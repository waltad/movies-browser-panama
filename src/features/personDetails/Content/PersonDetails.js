import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Wrapper } from "./styled";
import PersonDetailTile from "../../../common/PersonDetailTile";
import { LoadingIcon } from "../../../common/States/Loading";
import { Pagination } from "../../../common/Pagination";
import { ErrorMessage } from "../../../common/States/Error";

const PersonDetails = () => {
  return (
    <Wrapper>
      <PersonDetailTile />
    </Wrapper>
  );
};

export default PersonDetails;
