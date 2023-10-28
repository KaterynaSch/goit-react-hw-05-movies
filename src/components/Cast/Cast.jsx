import { fetchMovieCast } from "api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast from 'react-hot-toast';
import { HiPhotograph } from "react-icons/hi";

const Cast = () =>  {
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
        }
        getMovieCast();
    }, [movieId])
    // const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    // const actorImg = profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}`: defaultImg;
    return (
        <div>
            <h2>Cast</h2>
            {movieCast.length === 0 &&
            <div>There are no cast for this movie.</div>}
            <ul>
                {movieCast.map(({id, profile_path, name, character}) =>
                <li key={id}>
                    {profile_path ? 
                    <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} width={250}/> :
                    <HiPhotograph size={250} /> }                
                <h3>{name}</h3>
                  <p>Character: {character}</p>   
                </li>
            )}           
            </ul>
        </div>
    );
};
export default Cast;