import { styled } from "styled-components";

export const Wrapped = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 56px;
  margin-bottom: 24px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
    margin-top: 24px;
    margin-bottom: 12px;
  }
`;

export const Container = styled.div`
  width: 1368px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  row-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
    width: 288px;
    font-size: 18px;
    margin-bottom: 12px;
  }
`;
