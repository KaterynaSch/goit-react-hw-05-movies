import { Link, useLocation } from "react-router-dom"
import { ListItem, MovieName } from "./MovieList.styled";

export const MovieList = ({movies}) => {
    const location = useLocation();
    return (
        <ul>
            {movies.map(movie => (                
                <ListItem key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={{ from: location}}>
                       <MovieName>{movie.title ?? movie.original_name}</MovieName> 
                    </Link>
                </ListItem>
            ))}
        </ul>
    );
};