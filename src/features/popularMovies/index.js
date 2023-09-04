import { Navigation } from "../../common/Navigation";
import { Pagination } from "../../common/Pagination";
import { MovieTile } from "../../common/MovieTile";
import { Container, Title } from "./styled";

const PopularMovies = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Title>Popular Movies</Title>
        <MovieTile />
        <MovieTile />
        <MovieTile />
        <MovieTile />
        <MovieTile />
        <MovieTile />
        <MovieTile />
        <MovieTile />
      </Container>
      <Pagination />
    </>
  );
};

export default PopularMovies;