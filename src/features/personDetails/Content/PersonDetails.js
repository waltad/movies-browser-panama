import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPersonInfo,
  selectPersonStatus,
  fetchPersonById,
} from "../personSlice";
import { Wrapper, Title, List, WrapperM } from "./styled";
import PersonDetailTile from "../../../common/PersonDetailTile";
import { MovieTile } from "../../../common/MovieTile";
import { LoadingIcon } from "../../../common/States/Loading";
import { Pagination } from "../../../common/Pagination";
import { ErrorMessage } from "../../../common/States/Error";
import { useLocation } from "react-router-dom";

const PersonDetails = () => {
  const id = useParams().id;
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const status = useSelector(selectPersonStatus);
  const personInfo = useSelector(selectPersonInfo);

  useEffect(() => {
    if (location.includes("person/")) dispatch(fetchPersonById(id));
  }, [dispatch, location, id]);

  if (status === "error") return <ErrorMessage />;
  if (status === "loading") return <LoadingIcon />;
  // if (searchStatus === "success" && query !== null) return <SearchPeople />;
  if (status === "success")
    return (
      <Wrapper>
        <PersonDetailTile
          poster={personInfo.personDescription.profile_path}
          name={personInfo.personDescription.name}
          birthday={personInfo.personDescription.birthday}
          birthplace={personInfo.personDescription.place_of_birth}
          biography={personInfo.personDescription.biography}
        />

        <>
          <Wrapper>
            <Title>Movies - cast {``}</Title>
            <List>
              <MovieTile />
            </List>
          </Wrapper>
        </>

        <Pagination />
      </Wrapper>
    );
};

export default PersonDetails;
