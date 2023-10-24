import { fetchTrendingMovies } from "components/Api/Api";
import { MovieList } from "components/MovieList/MovieList";
import { useEffect, useState } from "react";

export default function Home() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getTrendingMovies() {
            try {
                 const {results} = await fetchTrendingMovies();  
                 console.log(results);                
                 setMovies(results);
            } catch (error) {
                console.log(error);
            }          

        }
        getTrendingMovies()
    }, []);

    return(
        <MovieList movies={movies}/>
    )
}