import {createBrowserRouter, Navigate} from "react-router-dom";

import MoviesPage from "../pages/MoviesPage";
import MainLayout from "../layouts/MainLayout";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import UserDetails from "../components/UserDetailsContainer/UserDetails";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'movies'}/>},
            {path: 'movies', element: <MoviesPage/>},
            {path: '/movies/details/:id', element: <MovieDetailsPage/>},
            {path: '/user-details', element: <UserDetails/>}
        ]
    }
]);

export {router}
