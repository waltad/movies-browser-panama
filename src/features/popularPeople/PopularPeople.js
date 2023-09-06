import { Wrapper, Header, PeopleList, StyledNavLink } from "./styled";
import { PersonTile } from "../../common/PersonTile";
import { Pagination } from "../../common/Pagination";
import { ErrorMessage } from "../../common/States/Error";
import { LoadingIcon } from "../../common/States/Loading";
import { NoResults } from "../../common/States/NoResults";

const PopularPeople = () => {
  return (
    <>
      <Wrapper>
        <Header>Popular people</Header>
        <PeopleList>
          <StyledNavLink to="/personDetails">
            <PersonTile />
          </StyledNavLink>
        </PeopleList>
        <Pagination />
      </Wrapper>
    </>
  );
};

export default PopularPeople;
