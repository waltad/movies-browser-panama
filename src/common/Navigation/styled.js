import { styled } from "styled-components";
import { ReactComponent as Logo } from "../../images/Logo.svg";
import { ReactComponent as Search } from "../../images/Search.svg";

export const NavigationBar = styled.nav`
    width: 100%;
    height: 94px;
    background-color: ${({ theme }) => theme.colors.black};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        height: 142px;
    }
`;

export const Wrapper = styled.div`
    height: 100%;
    max-width: 1368px;
    margin: auto;
    padding: 0 24px 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        justify-content: center;
        gap: 24px;
        padding: 0 16px 0 16px;
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoItems = styled.header`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-right: 80px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin-right: 19px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        gap: 8px;
    }
`;

export const LogoIcon = styled(Logo)`
    height: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 17px;
    }
`;

export const LogoName = styled.span`
    font-weight: 500;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.white};
    line-height: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 13px;
        line-height: 1.3;
    }
`;

export const NavigationList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 16px;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        gap: 12px;
    }
`;

export const NavigationItem = styled.li`
    padding: 8px 24px 8px 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 8px 12px 8px 12px;
    }
`;

export const StyledNavLink = styled.a`
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
    font-size: 14px;
    line-height: 1.5;
    vertical-align: middle;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 12px;
    }
`;

export const SearchBox = styled.div`
    width: 33%;
    height: 48px;
    border: 1px solid ${({ theme }) => theme.colors.mystic};
    border-radius: 33px;
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;

    &::placeholder && {
        color: ${({ theme }) => theme.colors.waterloo};
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: auto;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
        width: 100%
    }
`;

export const SearchIcon = styled(Search)`
    margin-left: 24px;
    height: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
        width: 16px;
        margin-left: 16px;
    }
`;

export const SearchBar = styled.input`
    width: 80%;
    height: 100%;
    font-size: 16px;
    padding: 12px 16px;
    border-radius: 33px;
    border: none;
    outline: none;
    line-height: 1.5;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMini}) {
        font-size: 13px;
        line-height: 1.3;
        padding: 8px 13px;
    }
`;