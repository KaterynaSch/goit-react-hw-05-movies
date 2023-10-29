import { fetchMovieCast } from "API/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast from 'react-hot-toast';
// import { HiPhotograph } from "react-icons/hi";
import { CastList, DefaultIcon } from "./Cast.styled";

export const Cast = () => {
    const [movieCast, setMovieCast] = useState([])
    const {movieId} = useParams();

    useEffect(() => {
        async function getMovieCast() {
            try {
                const {cast} = await fetchMovieCast(movieId);
                setMovieCast(cast);
            } catch (error) {
                toast.error(`Error while fetching movie cast`);  
            }
        };
        getMovieCast();
    }, [movieId]);
  
    return (
        <div>
            <h2>Cast</h2>
            {movieCast.length === 0 &&
            <div>There is no cast list for this movie.</div>}
            <CastList>
                {movieCast.map(({id, profile_path, name, character}) =>
                <li key={id}>
                    {profile_path ? 
                    <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} width={250}/> :
                    <DefaultIcon size={250} /> }                
                <h3>{name}</h3>
                  <p>Character: {character}</p>   
                </li>
            )}           
            </CastList>
        </div>
    );
};
export default Cast;