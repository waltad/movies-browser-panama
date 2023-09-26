import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../Navigation/queryParameters";
import paginationParamName from "./paginationParamName";
import { useState, useEffect } from "react";
import { selectData } from "../../features/moviesSlice";
import { selectPeopleList } from "../../features/peopleSlice";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";

export const usePagination = () => {
  const location = useLocation();
  const moviesData = useSelector(selectData);
  const peopleData = useSelector(selectPeopleList);
  const data = location.pathname.startsWith("/movies")
    ? moviesData
    : peopleData;
  const totalPages = data.total_pages > 500 ? 500 : data.total_pages;
  const replaceQueryParameter = useReplaceQueryParameter();
  const [page, setPage] = useState(
    parseInt(useQueryParameter(paginationParamName)) || 1
  );

  useEffect(() => {
    replaceQueryParameter({
      key: paginationParamName,
      value: page,
    });
  }, [page]);

  const setNextPage = () => {
    setPage((page) => (page += 1));
  };

  const setPreviousPage = () => {
    setPage((page) => (page -= 1));
  };

  const setFirstPage = () => {
    setPage(1);
  };

  const setLastPage = () => {
    setPage(totalPages);
  };

  return {
    page,
    totalPages,
    setNextPage,
    setPreviousPage,
    setFirstPage,
    setLastPage,
  };
};
