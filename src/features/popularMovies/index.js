// import { Navigation } from "../../common/Navigation";
// import { Pagination } from "../../common/Pagination";
import { MovieTile } from "../../common/MovieTile";
import { Container, Title, Wrapped } from "./styled";

const PopularMovies = () => {
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
