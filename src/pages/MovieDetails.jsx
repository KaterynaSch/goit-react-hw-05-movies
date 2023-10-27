import { Link, Outlet, useLocation, useParams} from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { fetchMovieDetails } from "components/Api/Api";
import toast from 'react-hot-toast';
import { MovieCard } from "components/MovieCard/MovieCard";

const MovieDetails = () => {
    const [selectedMovie, setSelectedMovie] = useState(null);   
    const {movieId} = useParams();
    const location = useLocation();   

    useEffect(() => {
        async function getMovieDetails() {
            try {
                const  data  = await fetchMovieDetails(movieId);
                setSelectedMovie(data);
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
        <div>
            <Link to={location.state?.from ?? '/'}>Go back</Link>
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
        </div>
    );
};
export default MovieDetails;