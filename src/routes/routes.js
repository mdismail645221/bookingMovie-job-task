import { createBrowserRouter, Link } from "react-router-dom";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <div>Not found <Link to='/'>Back Home</Link></div>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/movieDetails',
                element: <MovieDetails></MovieDetails>,
            },
        ]
    },
    
])