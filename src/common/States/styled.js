import { styled } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
    padding: 0 20px;
    text-align: center;
    margin-top: 56px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
        gap: 14px;
        margin-top: 24px;
    }
`;