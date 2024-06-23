import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenreModule} from "../../interfaces/IGenreModule";
import {moviesService} from "../../services/moviesService";
import {AxiosError} from "axios";

type GenreSliceType = {
    genres: IGenreModule[],
    genreIds: string
};
const initialState: GenreSliceType = {
    genres: [],
    genreIds: ''
};

const loadGenreList = createAsyncThunk('genreSlice/loadGenreList', async (_, thunkAPI) => {
    try {
        const genreList = await moviesService.getGenresList()
        return thunkAPI.fulfillWithValue(genreList)
    } catch (e) {
        const error = e as AxiosError
        return thunkAPI.rejectWithValue(error.response?.data)
    }
});


const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        setGenreId(state, action) {
            const genreId = String(action.payload)
            const genreIdsArray = state.genreIds ? state.genreIds.split(',') : [];
            if (genreIdsArray.includes(genreId)) {
                state.genreIds = genreIdsArray.filter(el => el !== genreId).join(',')
                return
            }

            if (state.genreIds.length === 0) {
                state.genreIds = state.genreIds + action.payload
            } else {
                state.genreIds = state.genreIds + ',' + action.payload
            }
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadGenreList.fulfilled, (state, action) => {
                state.genres = action.payload
            })
});

const {reducer: genreReducer, actions} = genreSlice;

const genreActions = {...actions, loadGenreList}

export {genreReducer, genreActions}