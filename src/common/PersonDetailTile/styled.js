import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 23px 14px 0 14px;
`;

export const DetailsTile = styled.article`
  display: flex;
  padding: 40px;
  align-items: flex-start;
  gap: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  max-width: 100%;
  margin-top: 56px;
  align-self: center;
`;

export const NoImage = styled.img`
  width: 399px;
  height: 564px;
  margin-right: 40px;
  background-color: ${({ theme }) => theme.colors.silver};
  border-radius: 5px;
`;

export const Content = styled.div`
  display: flex;
  padding: 8px 0px;
  flex-direction: column;
  align-items: flex-start;
  /* gap: 24px; */
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 24px;
  line-height: 120%;
`;

export const DetailsLine = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Label = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.stormGray};
  font-weight: normal;
  line-height: 120%;
  margin-right: 11px;
`;

export const Info = styled.p`
  font-size: 18px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.woodSmoke};
  font-weight: normal;
  line-height: 120%;
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 1.6;
`;
