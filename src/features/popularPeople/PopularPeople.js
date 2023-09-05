import { Wrapper, Header, PeopleList, StyledNavLink } from "./styled";
import { PersonTile } from "../../common/PersonTile";
import { Pagination } from "../../common/Pagination";

const PopularPeople = () => {
  return (
    <>
      <Wrapper>
        <Header>Popular people</Header>
        <PeopleList>
          <StyledNavLink to="/default-path">
            <PersonTile />
          </StyledNavLink>
        </PeopleList>
        <Pagination />
      </Wrapper>
    </>
  );
};

export default PopularPeople;
