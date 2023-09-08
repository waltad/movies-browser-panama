// import { Navigation } from "../../common/Navigation";
// import { Pagination } from "../../common/Pagination";
import { useDispatch } from "react-redux";
import { MovieTile } from "../../common/MovieTile";
import { Container, Title, Wrapped } from "./styled";
import { fetchPopularMovies } from "../moviesSlice";

const PopularMovies = () => {
  
  const dispatch = useDispatch();
  
  dispatch(fetchPopularMovies());

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
};

export default PopularMovies;
