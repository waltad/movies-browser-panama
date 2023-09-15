import styled from "styled-components";
import star from "../../images/Star.png";

export default styled.img`
  width: 24px;
  height: 24px;
  src: ${(props) => props.src = star};

@media (max-width: ${({ theme }) => theme.breakpoints}) {
  width: 16px;
  height: 16px;
}
`;
