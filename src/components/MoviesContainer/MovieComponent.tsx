import React, {FC} from 'react';
import {Result} from "../../interfaces/IMovieModel";
import {useNavigate} from "react-router-dom";
import {FaStar} from 'react-icons/fa';
import styles from "./MoviesComponent.module.css";

interface IProps {
    movie: Result
}

const MovieComponent: FC<IProps> = ({movie}) => {
    const navigate = useNavigate();
    const formattedRating = movie.vote_average.toFixed(2);
    return (
        <div className={styles.movieCard} onClick={() => navigate(`/movies/details/${movie.id}`)}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} className={styles.moviePoster}/>
            <div className={styles.movieTitle}>{movie.title}</div>
            <div className={styles.movieRating}>
                <FaStar className={styles.starIcon}/>
                {formattedRating}
            </div>

        </div>
    );
};

export default MovieComponent;