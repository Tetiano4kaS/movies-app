import React, {useEffect, useMemo, useState} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks/useHooks";
import {moviesActions} from "../../redux/slices/moviesSlice";
import MovieComponent from "./MovieComponent";
import PaginationComponent from "../../Pagination/PaginationComponent";
import styles from './MoviesComponent.module.css';

const MoviesComponent = () => {
    const {movies} = useAppSelector(state => state.movies)
    const {genreIds} = useAppSelector(state => state.genres)
    const {search, query} = useAppSelector(state => state.search);
    const dispatch = useAppDispatch();
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(moviesActions.loadMovies({page, genreIds}));
    }, [page, genreIds]);

    useEffect(() => {
        if (query.trim() === '') {
            dispatch(moviesActions.loadMovies({page, genreIds}));
        }
    }, [query, page, genreIds]);

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    const hasSearchResults = useMemo(() => search?.results?.length > 0, [search]);
    const resultsToRender = useMemo(() => hasSearchResults ? search.results : movies.results, [hasSearchResults, search, movies]);

    return (
        <div className={styles.moviesContainer}>
            <div className={styles.moviesRow}>
                {resultsToRender.map(movie => <MovieComponent key={movie.id} movie={movie}/>)}
            </div>
            <div className={styles.pagination}>
                <PaginationComponent
                    currentPage={page}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default MoviesComponent;