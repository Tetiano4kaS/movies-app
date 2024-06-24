import {axiosInstance} from "./axiosService";

import {urls} from "../constans/urls";
import {IMovieModel, Result} from "../interfaces/IMovieModel";
import {IGenreModule} from "../interfaces/IGenreModule";
import {IDetailModel} from "../interfaces/IDetailModel";

const moviesService = {
    getAll: async (page: number, genreIds: string): Promise<IMovieModel> => {
        const url = urls.moviesUrl + `?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genreIds}`;
        const moviesList = await axiosInstance.get(url)
        return moviesList.data;
    },
    getMovieById: async (id: string): Promise<Result> => {
        const url = urls.byMovieId(id)
        const movie = await axiosInstance.get(url)
        return movie.data
    },
    getGenresList: async (): Promise<IGenreModule[]> => {
        const url = urls.genreList
        const genreList = await axiosInstance.get(url)
        return genreList.data.genres
    },
    searchMovies: async (query: string, page: number): Promise<IMovieModel> => {
        const url = urls.searchMovie + `?query=${query}&include_adult=false&language=en-US&page=${page}`
        const search = await axiosInstance.get(url)
        return search.data
    },
    getDetails: async (id: string): Promise<IDetailModel> => {
        const url = urls.movieDetails(id)
        const movieDetail = await axiosInstance.get(url)
        return movieDetail.data
    },
    getTopRated: async (): Promise<IMovieModel> => {
        const url = urls.topRated
        const topRated = await axiosInstance.get(url)
        return topRated.data
    }
};

export {moviesService}
