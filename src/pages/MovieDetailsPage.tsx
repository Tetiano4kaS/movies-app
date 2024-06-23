import React, {useEffect} from 'react';
import DetailsComponent from "../components/MovieDetailsContainer/DetailsComponent";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../hooks/useHooks";
import {moviesActions} from "../redux/slices/moviesSlice";

const MovieDetailsPage = () => {
    const {id}=useParams();
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(moviesActions.loadCurrentMovie(id))
    },[id])

    return (
        <div>
            <DetailsComponent/>
        </div>
    );
};

export default MovieDetailsPage;