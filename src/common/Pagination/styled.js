import styled from "styled-components";
import { ReactComponent as prevArrow } from "./svg's/prevArrow.svg";
import { ReactComponent as nextArrow } from "./svg's/nextArrow.svg";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 100px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  margin-right: 12px;
  background-color: lightblue;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const PrevArrowIcon = styled(prevArrow)`
  margin: 0 4px;
  color: lightblue;
`;

export const NextArrowIcon = styled(nextArrow)`
  margin: 0 4px;
  color: lightblue;
`;

export const ButtonText = styled.p`
  margin: 0 4px;
`;

export const PageCounter = styled.div`
  margin: 0 24px 0 16px;
  color: black;
  font-size: 16px;
  line-height: 150%;
`;

export const PageNumbers = styled.span`
  margin: 0 8px;
  color: black;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
`;
