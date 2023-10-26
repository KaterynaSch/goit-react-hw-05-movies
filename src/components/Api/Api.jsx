import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
const searcParams = new URLSearchParams({
    api_key: '1c860efb7ea3ee5f6f74a151b9c6036d',
    language: 'en-US'    
})

export const fetchTrendingMovies = async () => {
    const response = await axios.get(`/trending/all/week?${searcParams}`)
    return response.data;
};

export const fetchSearchMovies = async(query) => {
    const response = await axios.get(`/search/movie?${searcParams}&${query}`)
    console.log(response.data);
    return response.data;
};

export const fetchMovieDetails = async(movieId) => {
    const response = await axios.get(`/movie/${movieId}?${searcParams}`)
    return response.data;
};

export const fetchMovieCast = async(movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits?${searcParams}`)
    return response.data;
};

export const fetchMovieReviews = async(movieId) => {
    const response = await axios.get(`/movie/${movieId}/reviews?${searcParams}`)
    return response.data;
};
