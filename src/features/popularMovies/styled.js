import { styled } from "styled-components";

export const Wrapped = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 56px;
  margin-bottom: 24px;
  margin-left: 8%;
  margin-right: 8%;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
    margin-top: 24px;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 12px;
    min-width: auto;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1368px;
  row-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
    row-gap: 16px
  }
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  text-align: left;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;