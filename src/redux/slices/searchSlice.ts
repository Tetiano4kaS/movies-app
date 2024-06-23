import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovieModel} from "../../interfaces/IMovieModel";
import {moviesService} from "../../services/moviesService";
import {AxiosError} from "axios";

type SearchType = {
    search: IMovieModel,
    query: string
}
const initialState: SearchType = {
    search: {
        page: 1,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    query: ''
}

const searchMovies = createAsyncThunk('searchSlice/searchMovies',
    async ({query, page}: { query: string, page: number }, thunkAPI) => {
    try {
        const movies = await moviesService.searchMovies(query, page);
        console.log(movies)
        return thunkAPI.fulfillWithValue(movies);
    } catch (e) {
        const error = e as AxiosError;
        return thunkAPI.rejectWithValue(error.response?.data);
    }
});

const clearSearchResults = createAsyncThunk('searchSlice/clearSearchResults', async (_, thunkAPI) => {
    return initialState.search;
});

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {
        clearQuery(state) {
            state.query = '';
        }
    },
    extraReducers: builder =>
        builder
            .addCase(searchMovies.fulfilled, (state, action) => {
                state.search = action.payload;
            })
            .addCase(clearSearchResults.fulfilled, (state) => {
                state.search = initialState.search;
                state.query = '';
            })
})

const {reducer: searchReducer, actions} = searchSlice;
const searchActions = {...actions, searchMovies, clearSearchResults}


export {searchActions, searchReducer}