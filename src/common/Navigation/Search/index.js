import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";
import { SearchBar, SearchBox, SearchIcon } from "./styled"
import searchQueryParamName from "../searchQueryParamName";
import { useRef } from "react";

export const Search = ({ placeholder }) => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();
    const searchBarRef = useRef();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
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
            />
        </SearchBox>
    );
};