import React from 'react';
import MoviesComponent from "../components/MoviesContainer/MoviesComponent";
import GenresContainer from "../components/GenresContainer/GenresContainer";

const MoviesPage = () => {
    return (
        <div>
            <GenresContainer/>
            <MoviesComponent/>
        </div>
    );
};

export default MoviesPage;