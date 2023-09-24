import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPersonInfo,
  selectPersonStatus,
  fetchPersonById,
} from "../personSlice";
import { Wrapper } from "./styled";
import PersonDetailTile from "../../../common/PersonDetailTile";
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
    if (location.includes("people/"))
      dispatch(fetchPersonById(id));
  }, [dispatch, location, id]);

  switch (status) {
    case "error":
      return <ErrorMessage />;
    case "loading":
      return <LoadingIcon />;
    case "success":
      return personInfo.personDescription.status_message ?
        (
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
          </Wrapper>
        )
    default:
      return <ErrorMessage />;
  }
};

export default PersonDetails;
