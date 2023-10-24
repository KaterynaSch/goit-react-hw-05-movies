import { Link } from "react-router-dom"

export const MovieList = ({movies}) => {
    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                     <Link to={`${movie.id}`}>{movie.name||movie.title}</Link>
                </li>
            ))}
        </ul>
    );
};