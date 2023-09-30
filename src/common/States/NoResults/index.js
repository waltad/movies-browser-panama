import noresults from "../../../images/noresults.png";
import { Wrapper } from "../styled";
import { NoResultsImage } from "./styled";

export const NoResults = () => (
  <Wrapper>
    <NoResultsImage src={noresults} alt="No results found" />
  </Wrapper>
);
