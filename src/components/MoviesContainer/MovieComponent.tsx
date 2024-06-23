import React, {FC} from 'react';
import cn from "classnames";

import {Result} from "../../interfaces/IMovieModel";
import {useNavigate} from "react-router-dom";
import {FaStar} from 'react-icons/fa';
import styles from "./MoviesComponent.module.css";
import {useAppSelector} from "../../hooks/useHooks";

interface IProps {
    movie: Result
}

const MovieComponent: FC<IProps> = ({movie}) => {
    const {theme} = useAppSelector(state => state.theme)
    const navigate = useNavigate();
    const formattedRating = movie.vote_average.toFixed(2);

    return (
        <div className={cn(styles.movieCard, {[styles.movieCard_dark!]: theme})}
             onClick={() => navigate(`/movies/details/${movie.id}`)}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} className={styles.moviePoster} alt="poster"/>
            <div className={styles.movieTitle}>{movie.title}</div>
            <div className={styles.movieRating}>
                <FaStar className={styles.starIcon}/>
                {formattedRating}
            </div>

        </div>
    );
};

export default MovieComponent;
