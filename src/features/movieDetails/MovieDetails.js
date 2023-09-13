// import { useDispatch } from "react-redux";
import { BigPoster, MoviePage, MovieSection, Section } from "../movieDetails/styled";
// import { selectMovieDetails } from "../moviesSlice";

const securyBaseUrl = "https://image.tmdb.org/t/p/";
const bigPosterSize = "w500";

const MovieDetails = (backdrop_path) => {
  
  // const dispatch = useDispatch();
  // dispatch(selectMovieDetails);

  return (
    <>
      <MoviePage>
        <BigPoster
          src={backdrop_path ? `${securyBaseUrl}${bigPosterSize}${backdrop_path}` : null} alt="bigPoster"
        />
        
        <MovieSection>

        </MovieSection>

        <Section>

        </Section>
      </MoviePage>
      <p>Movie Details</p>
    </>
  );
};

export default MovieDetails;
