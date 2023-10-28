import { Link, Outlet, useLocation, useParams} from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { fetchMovieDetails } from "api";
import toast from 'react-hot-toast';
import { MovieCard } from "components/MovieCard/MovieCard";
import { BackLink } from "components/BackLink";

const MovieDetails = () => {
    const [selectedMovie, setSelectedMovie] = useState(null);   
    // const [selectedMovie, setSelectedMovie] = useState({});  
    const {movieId} = useParams();
    const location = useLocation();   

    useEffect(() => {
         const getMovieDetails = async() => {
            try {
                const movieData = await fetchMovieDetails(movieId);
                console.log(movieData);
                setSelectedMovie(movieData);
            } catch (error) {
                toast.error(`Error while fetching movie details`);                
            }
        }
        getMovieDetails();
    }, [movieId]);

    if (!selectedMovie) {
        return null; 
    }
 
    return(
        <>
            <BackLink to={location.state?.from ?? '/'}>Go back</BackLink>
            <MovieCard movie = {selectedMovie}/>
             <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>                
            </ul>
            <Suspense fallback={'LOADING PAGE...'}>
                <Outlet /> 
            </Suspense>
        </>
    );
};
export default MovieDetails;