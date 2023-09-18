import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";
import { SearchBar, SearchBox, SearchIcon } from "./styled"
import searchQueryParamName from "../searchQueryParamName";
import { useRef } from "react";
import { usePagination } from "../../Pagination/usePagination";
import paginationParamName from "../../Pagination/paginationParamName";

export const Search = ({ placeholder }) => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();
    const searchBarRef = useRef();
    const { page, setFirstPage } = usePagination();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    const onFocus = () => {
        setFirstPage();
        replaceQueryParameter({
            key: paginationParamName,
            value: page,
        });
    };

    return (
        <SearchBox onClick={() => {
            searchBarRef.current.focus();
        }}>
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