import { fetchSearchMovies } from "components/Api/Api";
import toast from 'react-hot-toast';
import { MovieList } from "components/MovieList/MovieList";
import { SearchForm } from "components/SearchForm/SearchForm";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


export default function Movies() {
    const [searchMovies, setSearchMovies] = useState([]);   
    const [searchParams, setSearchParams] = useSearchParams();
    
   
    useEffect(() => {     
        const query = searchParams.get('query') ?? '';   
        async function getSearchMovies() {
            if (query === ""){
                return;
            }  
            try {
                 const {results} = await fetchSearchMovies(searchParams);  
                 console.log(results); 
                 if (results.length === 0){
                    toast.error(`Sorry, there are no films matching your search query. Please try again.`);
                 } else{
                setSearchMovies(results);                            
                 } 
            } catch (error) {
                toast.error('Error while fetching films. Please try again.');
            }  
        };
        getSearchMovies()
    }, [searchParams]);

  

    return (
        <>
            <SearchForm />
            <MovieList movies={searchMovies}/>
        </>
    );
};