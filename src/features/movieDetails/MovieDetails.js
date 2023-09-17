import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
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
  SmallerText,
  Description,
} from "../movieDetails/styled";
import noPoster from "../../images/Movie.png";
import star from "../../images/Star.png";
import StyledStar from "../../common/StyledStar";
import { selectMovieId } from "../moviesSlice";
import { fetchMovieDetails, selectMovieDetailsData, selectMovieDetailsStatus } from "../movieDetailsSlice";
import { ErrorMessage } from "../../common/States/Error";
import { LoadingIcon } from "../../common/States/Loading";

const securyBaseUrl = "https://image.tmdb.org/t/p/";
const bigPosterSize = "w500";
const posterSize = "w300";
// { backdrop_path, poster_path, title, release_date, vote_average, vote_count }

const MovieDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const movieId = (useSelector(selectMovieId)).toString();
  const status = useSelector(selectMovieDetailsStatus);
  const movieDetails = useSelector(selectMovieDetailsData);

  useEffect(() => {
    if (location.includes("movieDetails")) dispatch(fetchMovieDetails(movieId));
  }, []);

  if (status === "error") {
    return <ErrorMessage />;
  }

  if (status === "loading") {
    return <LoadingIcon />;
  }

  if (status === "success") {
    return (
      <>
        <MoviePage>
          <BigPosterWithGradient>
            <img
              src={movieDetails.backdrop_path ? `${securyBaseUrl}${posterSize}${movieDetails.backdrop_path}` : null}
              alt="bigPoster"
            />
          </BigPosterWithGradient>

          <MovieSection>

            <Poster src={movieDetails.poster_path ? `${securyBaseUrl}${bigPosterSize}${movieDetails.poster_path}` : noPoster} />

            <Info>
              <Title>
                {movieDetails.title ? movieDetails.title : null}
              </Title>

              <Year>
                {movieDetails.release_date ? movieDetails.release_date.slice(0, 4) : null}
              </Year>

              <ProductionAndRelease>
                <StyledText>Production: </StyledText> <br />
                <StyledText>Release date: </StyledText>
              </ProductionAndRelease>

              <Genres>
                <Genre>Horror</Genre><Genre>Adventure</Genre><Genre>Science fiction</Genre>
              </Genres>

              <Rating>
                <StyledStar src={star} />
                <Value>
                  {movieDetails.vote_average ? (movieDetails.vote_average).toFixed(1) : null}
                </Value>
                <SmallerText>
                  / 10
                </SmallerText>
                <SmallerText>
                  {movieDetails.vote_count} votes
                </SmallerText>
              </Rating>
              <Description>
                {movieDetails.overview}
              </Description>
            </Info>
          </MovieSection>

          <Section></Section>
        </MoviePage>
        <p>Movie Details</p>
      </>
    );
  }
};

export default MovieDetails;
