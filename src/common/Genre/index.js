import styled from "styled-components";

export default styled.div`
  padding: 8px 16px 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  text-align: left;
  background-color: ${({ theme }) => theme.colors.mystic};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 4px 8px 4px 8px;
    font-size: 10px;
  }
`;
