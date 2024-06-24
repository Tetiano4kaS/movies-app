import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import cn from "classnames";

import {useAppDispatch, useAppSelector} from "../../hooks/useHooks";
import {moviesActions} from "../../redux/slices/moviesSlice";
import styles from "./MoviesComponent.module.css"

const TopRatedComponent = () => {
    const dispatch = useAppDispatch();
    const {topRated} = useAppSelector(state => state.movies);
    const navigate = useNavigate();
    const {theme} = useAppSelector(state => state.theme)

    useEffect(() => {
        dispatch(moviesActions.loadTopRatedMovies())
    }, [])

    return (
        <div className={cn(styles.topRatedContainer, {
            [styles.topRatedContainer_dark!]: theme
        })}>
            <h2 className={cn(styles.titleTopRated, {
                [styles.titleTopRated_dark!]: theme
            })}>Top Rated Movies</h2>
            <div className={styles.moviesGrid}>
                {topRated.results.slice(0, 5).map(movie => (
                    <div key={movie.id} className={styles.topRatedCard}
                         onClick={() => navigate(`/movies/details/${movie.id}`)}>
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                            className={styles.posterTopRated}
                        />
                        <h3 className={styles.topRatedTitle}>{movie.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopRatedComponent;
