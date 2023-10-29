import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import toast from 'react-hot-toast';
import { fetchSearchMovies } from "API/api";
import { MovieList } from "components/MovieList/MovieList";
import { SearchForm } from "components/SearchForm/SearchForm";
import { Loader } from "components/Loader/Loader";

 const Movies = () =>  {
    const [searchMovies, setSearchMovies] = useState([]);   
    const [searchParams, ] = useSearchParams();
    const [loading, setLoading] = useState(false)
   
    useEffect(() => {     
        const query = searchParams.get('query') ?? '';
         
        async function getSearchMovies() {
            if (query === ""){
                return;
            }  
            try {
                setLoading(true); 
                 const {results} = await fetchSearchMovies(query);                
                 if (results.length === 0){
                    toast.error(`Sorry, there are no films matching your search query. Please try again.`);
                 } else{
                setSearchMovies(results);                            
                 } 
            } catch (error) {
                toast.error('Error while fetching films. Please try again.');
            } finally {
                setLoading(false);
            } 
        };
        getSearchMovies()
    }, [searchParams]);

  

    return (
        <>
            <SearchForm />
            {loading && <Loader /> }  
            <MovieList movies={searchMovies}/>
        </>
    );
};
export default Movies;