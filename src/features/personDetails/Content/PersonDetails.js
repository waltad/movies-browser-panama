import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPersonInfo,
  selectPersonStatus,
  fetchPersonById,
} from "../personSlice";
import {
  Wrapper,
  Title,
  List,
  CastWrapper,
  CrewWrapper,
  StyledNavLink,
} from "./styled";
import PersonDetailTile from "../../../common/PersonDetailTile";
import { MovieTile } from "../../../common/MovieTile";
import { LoadingIcon } from "../../../common/States/Loading";
import { ErrorMessage } from "../../../common/States/Error";
import { useLocation } from "react-router-dom";

const PersonDetails = () => {
  const id = useParams().id;
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const status = useSelector(selectPersonStatus);
  const personInfo = useSelector(selectPersonInfo);

  useEffect(() => {
    if (location.includes("people/")) dispatch(fetchPersonById(id));
  }, [dispatch, location, id]);

  switch (status) {
    case "error":
      return <ErrorMessage />;
    case "loading":
      return <LoadingIcon />;
    case "success":
      return personInfo.personDescription.status_message ? (
        <ErrorMessage />
      ) : (
        <Wrapper>
          <PersonDetailTile
            poster={personInfo.personDescription.profile_path}
            name={personInfo.personDescription.name}
            birthday={personInfo.personDescription.birthday}
            birthplace={personInfo.personDescription.place_of_birth}
            biography={personInfo.personDescription.biography}
          />
          <>
            <CastWrapper>
              <Title>
                Movies - cast {`(${personInfo.personMovies.cast.length})`}
              </Title>
              <List>
                {personInfo.personMovies.cast.map((movie, index) => (
                  <StyledNavLink key={index} to={`/movies/${movie.id}`}>
                    <MovieTile
                      poster_path={movie.poster_path}
                      title={movie.original_title}
                      genre_ids={movie.genre_ids.slice(0, 2)}
                      release_date={movie.release_date}
                      vote_average={movie.vote_average}
                      vote_count={movie.vote_count}
                    />
                  </StyledNavLink>
                ))}
              </List>
            </CastWrapper>
            <CrewWrapper>
              <Title>
                Movies - crew {`(${personInfo.personMovies.crew.length})`}
              </Title>
              <List>
                {personInfo.personMovies.crew.map((movie, index) => (
                  <StyledNavLink key={index} to={`/movies/${movie.id}`}>
                    <MovieTile
                      poster_path={movie.poster_path}
                      title={movie.original_title}
                      genre_ids={movie.genre_ids.slice(0, 2)}
                      release_date={movie.release_date}
                      vote_average={movie.vote_average}
                      vote_count={movie.vote_count}
                    />
                  </StyledNavLink>
                ))}
              </List>
            </CrewWrapper>
          </>
        </Wrapper>
      );
    default:
      return <ErrorMessage />;
  }
};

export default PersonDetails;
