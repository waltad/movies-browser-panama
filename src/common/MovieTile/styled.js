import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 324px;
  height: 650px;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Poster = styled.img`
  width: 292px;
  height: 434px;
  margin-top: 16px;
  border-radius: 5px;
`;

export const Description = styled.div`
  width: 292px;
  height: 105px;
`;

export const Title = styled.div`
  width: 292px;
  height: 29px;
  font-family: Poppins;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 0px;
  text-align: left;
  color: black;
`;

export const Year = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0px;
  text-align: left;
  color: grey;
`;

export const Tags = styled.div`
  width: 279px;
  height: 36px;
  display: flex;
  gap: 8px;
`;

export const Tag = styled.div`
  height: 36px;
  padding: 8px 16px 8px 16px;
  border-radius: 5px;
  background-color: #E4E6F0;
;
`;