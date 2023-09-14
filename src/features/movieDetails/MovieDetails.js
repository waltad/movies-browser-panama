// import { useDispatch } from "react-redux";
import { MoviePage, MovieSection, Section, StyledPosterWithGradient, Title } from "../movieDetails/styled";
// import { selectMovieDetails } from "../moviesSlice";

// const securyBaseUrl = "https://image.tmdb.org/t/p/";
// const bigPosterSize = "w500";

const MovieDetails = (backdrop_path) => {
  
  // const dispatch = useDispatch();
  // dispatch(selectMovieDetails);
// src={backdrop_path ? `${securyBaseUrl}${bigPosterSize}${backdrop_path}` : null} alt="bigPoster"
  return (
    <>
      <MoviePage>
        <StyledPosterWithGradient>
          <img src="https://image.tmdb.org/t/p/w500//5mzr6JZbrqnqD8rCEvPhuCE5Fw2.jpg" alt="bigPoster" />
        </StyledPosterWithGradient>
        
        <MovieSection>
          <Title>
            Mulan
          </Title>


        </MovieSection>

        <Section>

        </Section>
      </MoviePage>
      <p>Movie Details</p>
    </>
  );
};

export default MovieDetails;
