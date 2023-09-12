import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 324px;
  height: 650px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.tileShadow};
  padding: 16px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
    grid-template-columns: auto auto;
    grid-template-rows: 1fr 3fr;
    column-gap: 16px;
    width: 288px;
    height: 201px;
  }
`;

export const Poster = styled.img`
  width: 292px;
  height: 434px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
    width: 114px;
    height: 169px;
    grid-column: 1;
    grid-row: 1 / 3;
  }
`;

export const MainInfo = styled.div`
  height: 134px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
    height: auto;
    grid-column: 2;
    grid-row: 1;
  }
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  text-align: left;
  margin: 8px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
    font-size: 16px;
    margin: 0;
  }
`;

export const Year = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.waterloo};
  margin: 8px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
    font-size: 13px;
  }
`;

export const Genres = styled.div`
  width: 292px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 2px;
  margin: 8px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
    max-width: 126px;
    height: auto;
  }
`;

export const Genre = styled.div`
  height: 36px;
  padding: 8px 16px 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  text-align: left;
  background-color: ${({ theme }) => theme.colors.mystic};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
    height: 19px;
    padding: 4px 8px 4px 8px;
    font-size: 10px;
  }
`;

export const Rating = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  height: 24px;
  margin: 16px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
    grid-column: 2;
    grid-row: 2;
    column-gap: 8px;
  }
`;

export const Star = styled.img`
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
    width: 16px;
    height: 16px;
  }
`;

export const Value = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
    font-size: 13px;
  }
`;

export const Votes = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
    font-size: 13px;
  }
`;
