import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
// import { useQueryParameter } from "../../../common/hooks/useQueryParameter";
// import {
//   fetchSearchPeopleList,
//   selectSearchPeopleStatus,
// } from "../../search/searchSlice";
import {
  fetchPeople,
  selectPeopleList,
  selectPeopleStatus,
} from "../../peopleSlice";
import { Wrapper, Header, PeopleList, StyledNavLink } from "./styled";
import { PersonTile } from "../../../common/PersonTile";
import { Pagination } from "../../../common/Pagination";
import { LoadingIcon } from "../../../common/States/Loading";
import { ErrorMessage } from "../../../common/States/Error";

const PopularPeople = () => {
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const status = useSelector(selectPeopleStatus);
  const peopleList = useSelector(selectPeopleList);

  useEffect(() => {
    if (location.includes("movie"))
      dispatch();
    else dispatch(fetchPeople());
  }, []);

  if (status === "error") {
    return <ErrorMessage />;
  }

  if (status === "loading") {
    return <LoadingIcon />;
  }

  if (status === "success") {
    return (
      <>
        <Wrapper>
          <Header>Popular people</Header>
          <PeopleList>
            {peopleList.results.map((person) => (
              <StyledNavLink key={`${person.id}`} to="/personDetails">
                <PersonTile />
              </StyledNavLink>
            ))}
          </PeopleList>
          <Pagination />
        </Wrapper>
      </>
    );
  }
};

export default PopularPeople;
