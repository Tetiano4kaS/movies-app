import React, {FC} from 'react';

import {IGenreModule} from "../../interfaces/IGenreModule";
import {useAppDispatch, useAppSelector} from "../../hooks/useHooks";
import {genreActions} from "../../redux/slices/genreSlice";
import styles from "./Genre.module.css";

interface IProps {
    genre: IGenreModule
}

const GenreContainer: FC<IProps> = ({genre}) => {
    const {genreIds} = useAppSelector(state => state.genres)
    const dispatch = useAppDispatch();
    const handleClick = (id: number) => {
        dispatch(genreActions.setGenreId(id))
    }

    return (
        <div onClick={() => handleClick(genre.id)}
             className={`${styles.genreContainer} ${genreIds.includes(genre.id.toString()) ? styles.selected : ''}`}>
            {genre.name}
        </div>
    );

};

export default GenreContainer;
