import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import DetailsComponent from "../components/MovieDetailsContainer/DetailsComponent";
import {useAppDispatch} from "../hooks/useHooks";
import {moviesActions} from "../redux/slices/moviesSlice";

const MovieDetailsPage = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesActions.loadMovieDetails(id))
    }, [id])

    return (
        <div>
            <DetailsComponent/>
        </div>
    );
};

export default MovieDetailsPage;
