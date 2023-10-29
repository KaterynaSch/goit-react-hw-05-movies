import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { fetchTrendingMovies } from "API/api";
import { MovieList } from "components/MovieList/MovieList";
import { HomePage, PageTitle } from "./Home.styled";

const Home = () => {

    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
        async function getTrendingMovies() {
            try {              
                 const {results} = await fetchTrendingMovies();                                
                 setMovies(results);
            } catch (error) {
                toast.error(`Error while fetching movies.`);
            }             
        };
        getTrendingMovies();
    }, []);

    return(
        <HomePage>
            <PageTitle>Trending Movies </PageTitle>
            <MovieList movies={movies}/>
        </HomePage>        
    )
};
export default Home;