import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  selectStatus,
  selectData,
  selectGenres
} from "../moviesSlice";
import { MovieTile } from "../../common/MovieTile";
import { ErrorMessage } from "../../common/States/Error";
import { LoadingIcon } from "../../common/States/Loading";
import { Container, Title, Wrapped } from "./styled";
import { fetchPopularMovies } from "../moviesSlice";

const PopularMovies = () => {
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const status = useSelector(selectStatus);
  const popularMoviesList = useSelector(selectData);
  const genres = useSelector(selectGenres);

  useEffect(() => {
    if (location.includes("movie")) dispatch(fetchPopularMovies());
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
        <Wrapped>
          <Title>Popular Movies</Title>
          <Container>
            <MovieTile />
            <MovieTile />
            <MovieTile />
            <MovieTile />
            <MovieTile />
            <MovieTile />
            <MovieTile />
            <MovieTile />
          </Container>
        </Wrapped>
      </>
    );
  }
};

export default PopularMovies;
