import styled from "styled-components";

export default styled.img`
  width: 24px;
  height: 24px;
  align-self: center;

@media (max-width: ${({ theme }) => theme.breakpoints}) {
  width: 16px;
  height: 16px;
}
`;
