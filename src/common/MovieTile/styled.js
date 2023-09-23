import { styled } from "styled-components";

export const Wrapper = styled.div`
  min-width: 324px;
  height: 650px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.tileShadow};
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    column-gap: 16px;
    min-width: 288px;
    height: 201px;
  }
`;

export const Poster = styled.img`
  width: 292px;
  height: 434px;
  border-radius: 5px;
  justify-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 114px;
    height: 169px;
    grid-column: 1;
    grid-row: 1 / 3;
  }
`;

export const MainInfo = styled.div`
  height: 134px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
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
  overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const Year = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.waterloo};
  margin: 8px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
  }
`;

export const Rating = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  height: 24px;
  margin: 16px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-column: 2;
    grid-row: 2;
    column-gap: 8px;
  }
`;

export const Star = styled.img`
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 16px;
    height: 16px;
  }
`;

export const Value = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
  }
`;

export const Votes = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
  }
`;
