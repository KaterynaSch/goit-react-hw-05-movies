import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
const searchParams = new URLSearchParams({
    api_key: '1c860efb7ea3ee5f6f74a151b9c6036d',
    language: 'en-US'    
})

export const fetchTrendingMovies = async () => {
    const {data} = await axios.get(`/trending/all/week?${searchParams}`)
    return data;
};

export const fetchSearchMovies = async(query) => {
    const {data} = await axios.get(`/search/movie?${searchParams}&query=${query}`)    
    return data;
};

export const fetchMovieDetails = async(movieId) => {
    const {data} = await axios.get(`/movie/${movieId}?${searchParams}`)
    return data;
};

export const fetchMovieCast = async(movieId) => {
    const {data} = await axios.get(`/movie/${movieId}/credits?${searchParams}`)
    return data;
};

export const fetchMovieReviews = async(movieId) => {
    const {data} = await axios.get(`/movie/${movieId}/reviews?${searchParams}`)
    return data;
};
