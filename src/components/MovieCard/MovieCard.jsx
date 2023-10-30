import { PageTitle } from "pages/Home/Home.styled";
import { DetailsWrapper, InfoWrapper, Subtitle } from "./MovieCard.styled";
import { DefaultIcon } from "components/Cast/Cast.styled";

export const MovieCard = ({movie}) => {
    
   const {title, poster_path, vote_average, overview, genres} = movie;  

    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    const posterUrl = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`: defaultImg;
    
    const userScore = (vote_average * 10).toFixed(0);
    const movieGenres = genres.map(genre => genre.name).join(', ');

    return(
        <DetailsWrapper> 

          {poster_path ? 
            <img src={posterUrl} width={250} alt={`${title} poster`} />
            : <DefaultIcon size={500}/>
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