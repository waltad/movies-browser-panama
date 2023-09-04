import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  max-width: 1368px;
  margin-bottom: 100px;
  margin: 56px auto 40px;
`;

export const Header = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.woodSmoke};
  margin-left: 10px;
`;

export const PeopleList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(195px, 1fr));
    gap: 24px;
    padding: 12px;
`;
