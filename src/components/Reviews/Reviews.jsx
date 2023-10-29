import { fetchMovieReviews } from "API/api";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { useParams } from "react-router-dom";

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
        <ul>
            <h2>Reviews</h2>
            {movieReviews.length === 0 &&
            <div>There are no reviews for this movie.</div>}
            {movieReviews.map(({author, content, id}) => (
                <li key={id}>
                    <h3>Author: {author}</h3>
                    <p>{content}</p>
                </li>
            ))}
        </ul>
    )
};
export default Reviews;