import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: 56px auto 123px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 24px 16px 0px 16px;
  }
`;

export const Header = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.woodSmoke};
  margin-left: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 20px;
  }
`;

export const PeopleList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(195px, 1fr));
  gap: 24px;
  padding: 12px 12px 16px 12px;
  margin-bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    height: 100%;
  }
`;




