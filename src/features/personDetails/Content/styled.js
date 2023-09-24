import styled from "styled-components";

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

export const List = styled.ul``;
