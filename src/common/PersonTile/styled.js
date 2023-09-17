import { styled } from "styled-components";

export const Container = styled.article`
    width: 208px;
    height: 339px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.tileShadow};
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
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

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
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
    overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 14px;
        margin: 8px 0;
    }
`;

export const AdditionalInfo = styled.span`
    color: ${({ theme }) => theme.colors.waterloo};
    font-size: 18px;
    line-height: 1.5;
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 13px;
        line-height: 1.3;
    }
`;