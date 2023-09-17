import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 16px;
    width: 290px;
  }
`;

export const DetailsTile = styled.article`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px;
  box-shadow: ${({ theme }) => theme.tileShadow};
  max-width: 1288px;
  margin-top: 56px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 3fr;
  grid-gap: 0px 40px;
  align-content: start;
  justify-content: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 24px;
    margin-top: 24px;
    grid-gap: 0px 24px;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 60%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 16px;
    margin-top: 10px;
    grid-gap: 0px 16px;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr auto;
  }
`;

export const NoImage = styled.img`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: span 2;
  align-self: start;
  justify-self: end;
  width: 399px;
  height: 564px;
  background-color: ${({ theme }) => theme.colors.silver};
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 212px;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 116px;
    height: auto;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    justify-self: start;
  }
`;

export const Content = styled.div`
  padding: 8px 0px 24px 0px;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 24px;
  line-height: 120%;
  margin-top: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
    line-height: 130%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 12px;
    line-height: 130%;
  }
`;

export const DetailsLine = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.stormGray};
  font-weight: normal;
  line-height: 120%;
  margin: 0 11px 3px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const Info = styled.p`
  font-size: 18px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.woodSmoke};
  font-weight: normal;
  line-height: 120%;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 16px;
    font-size: 12px;
    grid-area: 2 / 1 / 3 / 3;
  }
`;
