import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapped = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1408px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
    padding: 0 16px;
  }
`;

export const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
    width: 100%;
    gap: 16px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
  }
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  text-align: left;
  margin: 56px 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
    font-size: 18px;
    margin: 24px 0 12px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 100%;
  }
`;