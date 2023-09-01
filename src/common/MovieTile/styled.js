import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 324px;
  height: 650px;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const Poster = styled.img`
  display: block;
  width: 292px;
  height: 434px;
  margin-top: 16px;
  border-radius: 5px;
`;

export const Description = styled.div`
  width: 292px;
`;

export const Title = styled.div`
  width: 292px;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  text-align: left;
  margin: 8px 0;
`;

export const Year = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: grey;
`;

export const Tags = styled.div`
  width: 279px;
  height: 36px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0;
`;

export const Tag = styled.div`
  height: 36px;
  padding: 8px 16px 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  background-color: #E4E6F0;
`;

export const Rating = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  gap: 12px;
  height: 24px;
  margin: 0 16px 16px 16px;
`;

export const Star = styled.img`
  width: 24px;
  height: 24px;
`;

export const Value = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
`;

export const Votes = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;