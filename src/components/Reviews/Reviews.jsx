import { fetchMovieReviews } from "API/api";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { useParams } from "react-router-dom";
import { ReviewsList } from "./Reviews.styled";
import { Subtitle } from "components/MovieCard/MovieCard.styled";
import { SecondTitle } from "components/Cast/Cast.styled";

export const Reviews = () => {
    const [movieReviews, setMovieReviews] = useState([])
    const {movieId} = useParams ();

    useEffect(() => {
        const getMovieReviews = async() => {
            try {
                const {results} = await fetchMovieReviews(movieId);
                setMovieReviews(results);
            } catch (error) {
                toast.error(`Error while fetching movie revievs`);  
            }
        };
        getMovieReviews();
    }, [movieId]);

    return (
         <>
         <SecondTitle>Reviews </SecondTitle>
         {movieReviews.length === 0 &&
            <div>There are no reviews for this movie.</div>}
            
        <ReviewsList> 
            {movieReviews.map(({author, content, id}) => (                
                <li key={id}>
                    <Subtitle>Author: {author}</Subtitle>
                    <p>{content}</p>
                </li>
            ))}
        </ReviewsList>
         </>               
    )
};
export default Reviews;