import { styled } from "styled-components";
import { ReactComponent as Search } from "../../../images/Search.svg";

export const SearchBox = styled.div`
  width: 33%;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.mystic};
  border-radius: 33px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  cursor: text;

  &::placeholder && {
    color: ${({ theme }) => theme.colors.waterloo};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const SearchIcon = styled(Search)`
  margin-left: 24px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
    width: 16px;
    margin-left: 16px;
  }
`;

export const SearchBar = styled.input`
  width: 80%;
  height: 100%;
  font-size: 16px;
  padding: 12px 16px;
  border-radius: 33px;
  border: none;
  outline: none;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
    font-size: 13px;
    line-height: 1.3;
    padding: 8px 13px;
  }
`;
