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
import { Pagination } from "../../../common/Pagination";
import { ErrorMessage } from "../../../common/States/Error";

const PersonDetails = () => {
  const id = useParams();
  const personInfo = useSelector(selectPersonInfo);
  const status = useSelector(selectPersonStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchPersonById(id));
    } else return <LoadingIcon />;
  }, [dispatch, id]);

  if (status === "error") return <ErrorMessage />;
  if (status === "loading") return <LoadingIcon />;
  // if (searchStatus === "success" && query !== null) return <SearchPeople />;
  if (status === "success")
    return (
      <Wrapper>
        <PersonDetailTile poster={personInfo.personDescription} />
        <Pagination />
      </Wrapper>
    );
};

export default PersonDetails;

