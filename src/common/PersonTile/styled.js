import { styled } from "styled-components";

export const Container = styled.article`
    width: 208px;
    height: 339px;
    background-color: white;
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
        width: 136px;
        height: 245px;
        border-radius: 5px;
        padding: 8px;
    }
`;

export const ImageBox = styled.div`
    width: 176px;
    height: 231px;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
        width: 120px;
        height: 178px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
`;

export const Name = styled.header`
    margin: 12px 0 8px 0;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
        font-size: 14px;
        margin: 8px 0;
    }
`;

export const AdditionalInfo = styled.span`
    color: rgb(126, 131, 154);
    font-size: 18px;
    line-height: 27px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
        font-size: 13px;
        line-height: 1.3;
    }
`;