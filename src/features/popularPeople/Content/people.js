import { Wrapper, Header, PeopleList, StyledNavLink } from "./styled";
import { PersonTile } from "../../../common/PersonTile";
import { Pagination } from "../../../common/Pagination";

const People = () => {
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

export default People;