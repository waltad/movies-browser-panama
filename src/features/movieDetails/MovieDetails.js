// import { useDispatch } from "react-redux";
import Genres from "../../common/Genres";
import Genre from "../../common/Genre";
import {
  MoviePage,
  MovieSection,
  Section,
  BigPosterWithGradient,
  Info,
  Title,
  Year,
  ProductionAndRealese,
  StyledText,
} from "../movieDetails/styled";
// import { selectMovieDetails } from "../moviesSlice";

// const securyBaseUrl = "https://image.tmdb.org/t/p/";
// const bigPosterSize = "w500";

const MovieDetails = ({ backdrop_path, title, release_date }) => {
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
          <Info>
            <Title>
              Mulan
              {title ? title : null}
            </Title>

            <Year>
              2020
              {release_date ? release_date.slice(0, 4) : null}
            </Year>

            <ProductionAndRealese>
              <StyledText>Production: </StyledText> <br />
              <StyledText>Release date: </StyledText>
            </ProductionAndRealese>
            <Genres>
              <Genre>Horror</Genre><Genre>Adventure</Genre><Genre>Science fiction</Genre>
            </Genres>
          </Info>
        </MovieSection>

        <Section></Section>
      </MoviePage>
      <p>Movie Details</p>
    </>
  );
};

export default MovieDetails;
