import { Wrapper, Header, PeopleList, StyledNavLink } from "./styled";
import { PersonTile } from "../../common/PersonTile";
import { Pagination } from "../../common/Pagination";
import Content from "./Content";

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
