import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
const params = new URLSearchParams({
    api_key: '1c860efb7ea3ee5f6f74a151b9c6036d',
    language: 'en-US'    
})

export const fetchTrendingMovies = async () => {
    const response = await axios.get(`/trending/all/week?${params}`)
    return response.data;
};

export const fetchSearchMovies = async(query) => {
    const response = await axios.get(`/search/movie?${params}&${query}`)
    return response.data;
};

export const fetchMovieDetails = async(movieId) => {
    const response = await axios.get(`/movie/${movieId}?${params}`)
    return response.data;
};

export const fetchMovieCast = async(movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits?${params}`)
    return response.data;
};

export const fetchMovieReviews = async(movieId) => {
    const response = await axios.get(`/movie/${movieId}/reviews?${params}`)
    return response.data;
};
