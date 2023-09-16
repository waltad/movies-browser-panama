import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";
import { SearchBar, SearchBox, SearchIcon } from "./styled"
import searchQueryParamName from "../searchQueryParamName";

export const Search = ({ placeholder }) => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <SearchBox>
            <SearchIcon />
            <SearchBar
                placeholder={placeholder}
                value={query || ""}
                onChange={onInputChange}
            />
        </SearchBox>
    );
};