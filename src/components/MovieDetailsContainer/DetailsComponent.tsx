import React from 'react';
import cn from "classnames";

import {useAppSelector} from "../../hooks/useHooks";
import styles from "./Details.module.css";

const DetailsComponent = () => {
    const {details} = useAppSelector(state => state.movies);
    const {theme} = useAppSelector(state => state.theme);
    const {isLoading} = useAppSelector(state => state.movies)

    const renderStars = (voteAverage: number) => {
        const maxStars = 5;
        const rating = Math.round(voteAverage / 2);
        const stars = [];

        for (let i = 0; i < maxStars; i++) {
            if (i < rating) {
                stars.push(<span key={i}>&#9733;</span>);
            } else {
                stars.push(<span key={i}>&#9734;</span>);
            }
        }

        return stars;
    };

    const renderGenres = (genres: { id: number, name: string }[]) => (
        genres.map(genre => <span key={genre.id} className={styles.genre}>{genre.name}</span>)
    );

    const renderCompanies = (companies: { id: number, name: string }[]) => (
        companies.map(company => <span key={company.id} className={styles.company}>{company.name}</span>)
    );

    return (
        <div>
            {isLoading ? <p>Loading...</p> :
                <div className={cn(styles.detailsContainer, {[styles.detailsContainer_dark!]: theme})}>

                    <div className={styles.posterContainer}>
                        <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={details.title}
                             className={styles.posterImage}/>
                    </div>
                    <div className={styles.detailsContent}>
                        <h2 className={styles.detailsTitle}>{details.title}</h2>
                        <p className={styles.rating}><strong>Rating:</strong> {renderStars(details.vote_average)}
                        </p>
                        <p className={styles.overview}>{details.overview}</p>
                        <div className={styles.additionalDetails}>
                            <p><strong>Release Date:</strong> {details.release_date}</p>
                            <p><strong>Popularity:</strong> {details.popularity}</p>
                            <p><strong>Genres:</strong> {renderGenres(details.genres)}</p>
                            <p><strong>Runtime:</strong> {details.runtime} minutes</p>
                            <p><strong>Budget:</strong> ${details.budget}</p>
                            <p><strong>Production
                                Companies:</strong> {renderCompanies(details.production_companies)}
                            </p>
                        </div>
                    </div>

                </div>
            }
        </div>
    );
};

export default DetailsComponent;
