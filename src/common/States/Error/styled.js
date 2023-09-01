import { styled } from "styled-components";
import { ReactComponent as Error } from "../../../images/Error.svg";

export const ErrorIcon = styled(Error)`
    margin-top: 180px;
`;

export const Heading = styled.h1`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    margin: 0;
`;

export const Subheading = styled.h2`
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
    margin: 0;
`;

export const Button = styled.a`
    padding: 16px 24px;
    background-color: rgb(0, 68, 204);
    border-radius: 5px;
    color: white;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.35;
    cursor: pointer;
`;