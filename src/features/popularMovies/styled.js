import { styled } from "styled-components";

export const Container = styled.div`
  width: 1368px;
  height: 1391px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto auto;
  row-gap: 24px;
  column-gap: 24px
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  text-align: left;
  grid-column: 1 / 5;
  grid-row: 1;
`;