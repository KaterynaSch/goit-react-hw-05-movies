import { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation, useParams} from "react-router-dom";
import toast from 'react-hot-toast';
import { fetchMovieDetails } from "API/api";
import { MovieCard } from "components/MovieCard/MovieCard";
import { BackLink } from "components/BackLink";
import { Loader } from "components/Loader/Loader";
import { Container, DetailsLink, DetailsList } from "./MovieDetails.styled";

const MovieDetails = () => {

    const {movieId} = useParams();    
    const [loading, setLoading] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState({});
    const location = useLocation();

    useEffect(() => {
        const getMovieDetails = async () => {
            try {
                setLoading(true)
                const movieData = await fetchMovieDetails(movieId);
                if(movieData.length === 0) {
                    toast.error(`Movie not found or an error occurred while fetching movie details.`);
                }else{
                    setSelectedMovie(movieData);
                }                        
            } catch (error) {
                toast.error(`Error while fetching movie details`);                
            } finally {
                setLoading(false);
            }
        }
        getMovieDetails();
    }, [movieId]);
    if (!selectedMovie || Object.keys(selectedMovie).length === 0) {
        return null;
    }
    return(
        <Container>
            {loading && <Loader /> }  
            {<div>
                <BackLink to={location.state?.from ?? '/'}>Go back</BackLink>
                <MovieCard movie={selectedMovie}/>
                <DetailsList>
                    <li>
                        <DetailsLink to="cast" state={{ from: location?.state?.from ?? '/' }}>CAST</DetailsLink>
                    </li>
                    <li>
                        <DetailsLink to="reviews" state={{ from: location?.state?.from ?? '/' }}>REVIEWS</DetailsLink>
                    </li>                
                </DetailsList>
            </div>  }          
            <Suspense fallback={<Loader/>}>
                <Outlet /> 
            </Suspense>
        </Container>
    );
};
export default MovieDetails;