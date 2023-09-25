import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CastWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 40px 0px 40px;
`;

export const CrewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 40px 0px 40px;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 12px;
  line-height: 120%;
  margin-top: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 2px;
    line-height: 130%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 1px;
    line-height: 130%;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 100%;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  justify-content: space-around;
  gap: 24px;
  padding: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
    grid-template-columns: repeat(auto-fill, minmax(228px, 1fr));
    width: 100%;
    gap: 16px;
    align-items: center;
    justify-content: center;
  }
`;
