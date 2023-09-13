import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 23px 14px 0 14px;
`;

export const DetailsTile = styled.article`
  display: grid;
  grid-template-columns: minmax(auto, 400px) 1fr;
  grid-template-rows: auto 1fr;
  grid-column-gap: 0px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  margin-top: 56px;
  align-self: center;
`;

export const NoImage = styled.img`
  grid-area: 1 / 1 / 3 / 2;
  width: 399px;
  height: 564px;
  margin-right: 40px;
  background-color: ${({ theme }) => theme.colors.silver};
  border-radius: 5px;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 24px;
`;

export const Content = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
`;

export const Details = styled.div`
  margin-bottom: 24px;
`;

export const DetailsLine = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Label = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.woodSmoke};
  line-height: 1.2;
  margin-bottom: 8px;
  margin-right: 11px;
`;

export const Info = styled.span`
  font-size: 18px;
  font-weight: normal;
  color: black;
  line-height: 22px;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  /* grid-area: 2 / 2 / 3 / 3; */
  font-size: 20px;
  margin: 24px 0 0 40px;
  line-height: 1.6;
`;
