import React from 'react';

import MoviesComponent from "../components/MoviesContainer/MoviesComponent";
import GenresContainer from "../components/GenresContainer/GenresContainer";
import TopRatedComponent from "../components/MoviesContainer/TopRatedComponent";

const MoviesPage = () => {
    return (
        <div>
            <GenresContainer/>
            <TopRatedComponent/>
            <MoviesComponent/>
        </div>
    );
};

export default MoviesPage;
