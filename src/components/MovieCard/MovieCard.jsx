export const MovieCard = ({movie}) => {
    
   const {title, poster_path, vote_average, overview, genres} = movie;  

    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    const posterUrl = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`: defaultImg;
    
    const userScore = (vote_average * 10).toFixed(0);
    const movieGenres = genres.map(genre => genre.name).join(', ');

    return(
        <div>
           <img src={posterUrl} width = {250}  alt={`${title} poster`}/>
            <h2>{title}</h2>
            <p>User Score: {userScore} %</p>
            <h3>Overview:</h3>
            <p>{overview}</p>
            <h3>Genres:</h3>
            <p>{movieGenres}</p>
        </div>
    );
};