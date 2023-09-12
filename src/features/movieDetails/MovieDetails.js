import { BigPoster, MoviePage } from "../movieDetails/styled";

const securyBaseUrl = "https://image.tmdb.org/t/p/";
const bigPosterSize = "w500";

const MovieDetails = (backdrop_path) => {
  return (
    <>
      <MoviePage>
        <BigPoster
          src={backdrop_path ? `${securyBaseUrl}${bigPosterSize}${backdrop_path}` : null} alt="bigPoster"
        />
      </MoviePage>
      <p>Movie Details</p>
    </>
  );
};

export default MovieDetails;
