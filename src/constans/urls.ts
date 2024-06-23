const baseURL = 'https://api.themoviedb.org/3';

const urls = {
    moviesUrl: '/discover/movie',
    byMovieId: (id: string) => `/movie/${id}`,
    genreList: '/genre/movie/list',
    searchMovie: '/search/movie',
    movieDetails: (id: string) => `/movie/${id}`
}


export {baseURL, urls}
