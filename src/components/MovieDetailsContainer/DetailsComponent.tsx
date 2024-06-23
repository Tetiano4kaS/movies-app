import React from 'react';
import {useAppSelector} from "../../hooks/useHooks";
import styles from "./Details.module.css"


const DetailsComponent = () => {
    const {movie} = useAppSelector(state => state.movies);

    const renderStars = (voteAverage:number) => {
        const maxStars = 5;
        const rating = Math.round(voteAverage / 2); // Convert 0-10 rating to 0-5
        const stars = [];

        for (let i = 0; i < maxStars; i++) {
            if (i < rating) {
                stars.push(<span key={i}>&#9733;</span>); // Filled star (★)
            } else {
                stars.push(<span key={i}>&#9734;</span>); // Empty star (☆)
            }
        }

        return stars;
    };

    return (
        <div className={styles.detailsContainer}>
            <div className={styles.posterContainer}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={styles.posterImage} />
            </div>
            <div className={styles.detailsContent}>
                <h2 className={styles.movieTitle}>{movie.title}</h2>
                <p className={styles.overview}>{movie.overview}</p>
                <div className={styles.additionalDetails}>
                    <p><strong>Release Date:</strong> {movie.release_date}</p>
                    <p><strong>Popularity:</strong> {movie.popularity}</p>
                    <p className={styles.rating}><strong>Rating:</strong> {renderStars(movie.vote_average)}</p>
                </div>
            </div>
        </div>
    );
    //     <div>
    //         <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
    //         {movie.title}
    //         <p>{movie.overview}</p>
    //         {movie.popularity}
    //         {movie.release_date}
    //         <div>
    //             <p>Rating: {renderStars(movie.vote_average)}</p>
    //         </div>
    //     </div>
    // );
};

export default DetailsComponent;