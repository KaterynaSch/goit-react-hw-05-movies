import { PageTitle } from "pages/Home/Home.styled";
import { DetailsWrapper, ImgWrapper, InfoWrapper, Subtitle } from "./MovieCard.styled";

export const MovieCard = ({movie}) => {
    
  const {title, poster_path, vote_average, overview, genres} = movie;  
 
  const posterUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;  
  const userScore = (vote_average * 10).toFixed(0);
  const movieGenres = genres ? genres.map(genre => genre.name).join(', '): '';

  return(
      <DetailsWrapper> 
        {poster_path ?
          <img src={posterUrl} width={250} height={375} alt={`${title} poster`} /> 
          : <ImgWrapper>Image not found</ImgWrapper>          
        }
        <InfoWrapper>
            <PageTitle>{title}</PageTitle>
            <p>User Score: {userScore} %</p>
            <Subtitle>Overview</Subtitle>
            <p>{overview}</p>
            <Subtitle>Genres</Subtitle>
            <p>{movieGenres}</p>
        </InfoWrapper>
          
      </DetailsWrapper>
  );
};