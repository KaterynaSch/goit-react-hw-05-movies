import { Outlet, useLocation, useParams} from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { fetchMovieDetails } from "API/api";
import toast from 'react-hot-toast';
import { MovieCard } from "components/MovieCard/MovieCard";
import { BackLink } from "components/BackLink";
import { Loader } from "components/Loader/Loader";
import { Container, DetailsLink, DetailsList } from "./MovieDetails.styled";

const MovieDetails = () => {

    const [selectedMovie, setSelectedMovie] = useState(null);   
    const [loading, setLoading] = useState(false) 
    const {movieId} = useParams();
    const location = useLocation();   

    useEffect(() => {
         const getMovieDetails = async() => {
            try {
                setLoading(true);
                const movieData = await fetchMovieDetails(movieId);                
                setSelectedMovie(movieData);
            } catch (error) {
                toast.error(`Error while fetching movie details`);                
            } finally {
                setLoading(false);
            }
        }
        getMovieDetails();
    }, [movieId]);

    if (!selectedMovie) {
        return null; 
    }
 
    return(
        <Container>
            {loading && <Loader /> }  
            <div>
                <BackLink to={location.state?.from ?? '/'}>Go back</BackLink>
                <MovieCard movie = {selectedMovie}/>
                <DetailsList>
                    <li>
                        <DetailsLink to="cast" state={{ from: location?.state?.from ?? '/' }}>CAST</DetailsLink>
                    </li>
                    <li>
                        <DetailsLink to="reviews" state={{ from: location?.state?.from ?? '/' }}>REVIEWS</DetailsLink>
                    </li>                
                </DetailsList>
            </div>            
            <Suspense fallback={<Loader/>}>
                <Outlet /> 
            </Suspense>
        </Container>
    );
};
export default MovieDetails;