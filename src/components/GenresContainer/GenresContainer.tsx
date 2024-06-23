import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks/useHooks";
import {genreActions} from "../../redux/slices/genreSlice";
import GenreContainer from "./GenreContainer";
import styles from "./Genre.module.css";

const GenresContainer = () => {
    const {genres} = useAppSelector(state => state.genres)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.loadGenreList())
    }, [dispatch])
    return (
        <div className={styles.genres}>
            {genres.map(genre => <GenreContainer key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default GenresContainer;
