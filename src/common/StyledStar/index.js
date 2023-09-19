import styled from "styled-components";

export default styled.div`
  width: 24px;
  height: 24px;

  img {
    width: 100%;
  }

@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
  width: 16px;
  height: 16px;
}
`;
