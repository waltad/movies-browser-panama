// import { Navigation } from "../../common/Navigation";
import { Pagination } from "../../common/Pagination";
import { MovieTile } from "../../common/MovieTile";
import { Wrapper, Container, Title } from "./styled";

const PopularMovies = () => {
  return (
    <>
      <Wrapper>
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
      </Wrapper>
      <Pagination />
    </>
  );
};

export default PopularMovies;
