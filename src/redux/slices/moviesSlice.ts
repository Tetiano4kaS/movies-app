import {IMovieModel, Result} from "../../interfaces/IMovieModel";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {moviesService} from "../../services/moviesService";
import {IDetailModel} from "../../interfaces/IDetailModel";

type MoviesSliceType = {
    movies: IMovieModel,
    movie: Result
    details: IDetailModel
}

let initialState: MoviesSliceType = {
    movies: {
        page: 1,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    movie: {
        adult: false,
        backdrop_path: '',
        genre_ids: [],
        id: 0,
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 0,
        poster_path: '',
        release_date: '',
        title: '',
        video: false,
        vote_average: 0,
        vote_count: 0
    },
    details:{
            adult:                 false,
            backdrop_path:         '',
            belongs_to_collection: null,
            budget:                0,
            genres:                [],
            homepage:              '',
            id:                    0,
            imdb_id:               '',
            origin_country:        [],
            original_language:     '',
            original_title:        '',
            overview:              '',
            popularity:            0,
            poster_path:           '',
            production_companies:  [],
            production_countries:  [],
            release_date:          '',
            revenue:               0,
            runtime:               0,
            spoken_languages:      [],
            status:                '',
            tagline:               '',
            title:                 '',
            video:                 false,
            vote_average:          0,
            vote_count:            0,
    }
};

const loadMovies = createAsyncThunk('moviesSlice/loadMovies',
    async ({page, genreIds}: { page: number, genreIds: string }, thunkAPI) => {
    try {
        const movies = await moviesService.getAll(page, genreIds);
        return thunkAPI.fulfillWithValue(movies)
    } catch (e) {
        const error = e as AxiosError;
        return thunkAPI.rejectWithValue(error.response?.data);
    }
});

const loadCurrentMovie = createAsyncThunk('moviesSlice/loadCurrentMovie', async (id: string, thunkAPI) => {
    try {
        const movie = await moviesService.getMovieById(id);
        return thunkAPI.fulfillWithValue(movie)
    } catch (e) {
        const error = e as AxiosError;
        return thunkAPI.rejectWithValue(error.response?.data);
    }

});

const loadMovieDetails = createAsyncThunk('moviesSlice/loadMovieDetails', async (id: string, thunkAPI) => {
    try {
        const detail = await moviesService.getDetails(id);
        console.log(detail)
        return thunkAPI.fulfillWithValue(detail)
    } catch (e) {
        const error = e as AxiosError;
        return thunkAPI.rejectWithValue(error.response?.data);
    }
})


const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadMovies.fulfilled, (state, action) => {
                state.movies = action.payload
            })
            .addCase(loadCurrentMovie.fulfilled, (state, action) => {
                state.movie = action.payload
            })
            .addCase(loadMovieDetails.fulfilled, (state, action) => {
                state.details = action.payload
            })
});


const {reducer: moviesReducer, actions} = moviesSlice;

const moviesActions = {...actions, loadMovies, loadCurrentMovie, loadMovieDetails};

export {
    moviesActions,
    moviesReducer
}
