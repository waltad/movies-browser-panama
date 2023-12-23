import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchPeople,
  selectPeopleList,
  selectPeopleStatus,
  fetchSearchPeople,
} from "../peopleSlice";
import { Wrapper, Header, PeopleList, StyledNavLink } from "./styled";
import { PersonTile } from "../../../common/PersonTile";
import { Pagination } from "../../../common/Pagination";
import { LoadingIcon } from "../../../common/States/Loading";
import { ErrorMessage } from "../../../common/States/Error";
import { NoResults } from "../../../common/States/NoResults";
import { useQueryParameter } from "../../../common/Navigation/queryParameters";
import searchQueryParamName from "../../../common/Navigation/searchQueryParamName";
import paginationParamName from "../../../common/Pagination/paginationParamName";

const PopularPeople = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectPeopleStatus);
  const data = useSelector(selectPeopleList);
  const peopleList = data.results || [];
  const query = useQueryParameter(searchQueryParamName);
  const total_results = data.total_results;
  const page = useQueryParameter(paginationParamName) || 1;

  useEffect(() => {
    const options = {
      query: query,
      page: page,
      type: "person",
    };

    if (query) {
      dispatch(fetchSearchPeople(options));
    } else {
      dispatch(fetchPeople(page));
    }
  }, [query, page, dispatch]);

  switch (status) {
    case "error":
      return <ErrorMessage />;
    case "loading":
      return query ? (
        <Wrapper>
          <Header>Search results for "{query}"</Header>
          <LoadingIcon />
        </Wrapper>
      ) : (
        <LoadingIcon />
      );
    case "success":
      if (!peopleList.length && query) {
        return (
          <Wrapper>
            <Header>Sorry, there are no results for "{query}"</Header>
            <NoResults />
          </Wrapper>
        );
      } else if (query) {
        return (
          <>
            <Wrapper>
              <Header>{`Search results for "${query}" (${total_results})`}</Header>
              <PeopleList>
                {peopleList.map((person) => (
                  <StyledNavLink key={person.id} to={`/people/${person.id}`}>
                    <PersonTile
                      name={person.name}
                      profile_path={person.profile_path}
                      id={person.id}
                    />
                  </StyledNavLink>
                ))}
              </PeopleList>
              <Pagination />
            </Wrapper>
          </>
        );
      } else {
        return (
          <>
            <Wrapper>
              <Header>Popular people</Header>
              <PeopleList>
                {peopleList.map((person) => (
                  <StyledNavLink key={person.id} to={`/people/${person.id}`}>
                    <PersonTile
                      name={person.name}
                      profile_path={person.profile_path}
                      id={person.id}
                    />
                  </StyledNavLink>
                ))}
              </PeopleList>
              <Pagination />
            </Wrapper>
          </>
        );
      }
    default:
      return <ErrorMessage />;
  }
};

export default PopularPeople;
