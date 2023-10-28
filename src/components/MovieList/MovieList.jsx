import { Link, useLocation } from "react-router-dom"
import { MovieName } from "./MovieList.styled";

export const MovieList = ({movies}) => {
    const location = useLocation();
    return (
        <ul>
            {movies.map(movie => (                
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={{form:location}}>
                       <MovieName>{movie.title ?? movie.original_name}</MovieName> 
                    </Link>
                </li>
            ))}
        </ul>
    );
};