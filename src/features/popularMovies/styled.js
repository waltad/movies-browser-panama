import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapped = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 56px;
  margin-bottom: 24px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 24px;
    margin-bottom: 12px;
  }
`;

export const MovieList = styled.div`
  width: 1368px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  row-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 288px;
    row-gap: 16px;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

export const Title = styled.div`
  width: 1368px;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  text-align: left;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 288px;
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 100%;
  }
`;
