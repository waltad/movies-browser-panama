import { styled } from "styled-components";
import { ReactComponent as Loading } from "../../../images/spinner.svg";

export const Spinner = styled(Loading)`
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    height: auto;
    animation: rotate 2s linear infinite;
    margin-top: 120px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
        width: 35px;
        margin-top: 24px;
    }
`;