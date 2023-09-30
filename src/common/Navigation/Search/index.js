import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../queryParameters";
import { SearchBar, SearchBox, SearchIcon } from "./styled";
import searchQueryParamName from "../searchQueryParamName";
import { useRef } from "react";
import { usePagination } from "../../Pagination/usePagination";
import paginationParamName from "../../Pagination/paginationParamName";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

export const Search = ({ placeholder }) => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();
  const searchBarRef = useRef();
  const { page, setFirstPage } = usePagination();
  const location = useLocation();
  const history = useHistory();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  const setPageToFirst = () => {
    setFirstPage();
    replaceQueryParameter({
      key: paginationParamName,
      value: page,
    });
  };

  const onFocus = () => {
    if (location.pathname.startsWith("/movies/")) {
      history.replace("/movies");
    } else if (location.pathname.startsWith("/people/")) {
      history.replace("/people");
    } else {
      setPageToFirst();
    }
  };

  return (
    <SearchBox
      onClick={() => {
        searchBarRef.current.focus();
      }}
    >
      <SearchIcon />
      <SearchBar
        ref={searchBarRef}
        placeholder={placeholder}
        value={query || ""}
        onChange={onInputChange}
        onFocus={onFocus}
      />
    </SearchBox>
  );
};
