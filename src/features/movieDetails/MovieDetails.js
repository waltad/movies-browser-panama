// import { useDispatch } from "react-redux";
import Genres from "../../common/Genres";
import Genre from "../../common/Genre";
import {
  MoviePage,
  MovieSection,
  Section,
  BigPosterWithGradient,
  Poster,
  Info,
  Title,
  Year,
  ProductionAndRelease,
  StyledText,
  Rating,
  Value,
} from "../movieDetails/styled";
import noPoster from "../../images/Movie.png";
import star from "../../images/Star.png";
import StyledStar from "../../common/StyledStar";
// import { selectMovieDetails } from "../moviesSlice";

// const securyBaseUrl = "https://image.tmdb.org/t/p/";
// const bigPosterSize = "w500";

const MovieDetails = ({ backdrop_path, poster_path, title, release_date, vote_average }) => {
  // const dispatch = useDispatch();
  // dispatch(selectMovieDetails);
  // src={backdrop_path ? `${securyBaseUrl}${bigPosterSize}${backdrop_path}` : null} alt="bigPoster"
  return (
    <>
      <MoviePage>
        <BigPosterWithGradient>
          <img
            src="https://image.tmdb.org/t/p/w500//5mzr6JZbrqnqD8rCEvPhuCE5Fw2.jpg"
            alt="bigPoster"
          />
        </BigPosterWithGradient>

        <MovieSection>
          
          <Poster src={poster_path ? poster_path : noPoster}/>

          <Info>
            <Title>
              Mulan
              {title ? title : null}
            </Title>

            <Year>
              2020
              {release_date ? release_date.slice(0, 4) : null}
            </Year>

            <ProductionAndRelease>
              <StyledText>Production: </StyledText> <br />
              <StyledText>Release date: </StyledText>
            </ProductionAndRelease>

            <Genres>
              <Genre>Horror</Genre><Genre>Adventure</Genre><Genre>Science fiction</Genre>
            </Genres>

            <Rating>
              <StyledStar src={star}/>
              <Value>
                7,8
                {vote_average ? vote_average.toFixed(1) : null}
              </Value>
            </Rating>
          </Info>
        </MovieSection>

        <Section></Section>
      </MoviePage>
      <p>Movie Details</p>
    </>
  );
};

export default MovieDetails;
