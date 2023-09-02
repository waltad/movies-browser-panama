import { styled } from "styled-components";
import { ReactComponent as Error } from "../../../images/Error.svg";

export const ErrorIcon = styled(Error)`
    margin-top: 180px;
    height: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-top: 80px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
        margin-top: 40px;
        width: 60px;
    }
`;

export const Heading = styled.h1`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 26px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
        font-size: 20px;
    }
`;

export const Subheading = styled.h2`
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
        font-size: 12px;
    }
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

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
        font-size: 10px;
        padding: 12px 18px;
    }
`;