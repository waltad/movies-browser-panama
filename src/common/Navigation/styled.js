import { styled } from "styled-components";
import { ReactComponent as Logo } from "../../images/Logo.svg";
import { ReactComponent as Search } from "../../images/Search.svg";

export const NavigationBar = styled.nav`
    width: 100%;
    height: 94px;
    background-color: rgb(24, 24, 27);
`;

export const Wrapper = styled.div`
    height: 100%;
    max-width: 1368px;
    margin: auto;
    padding: 0 24px 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoItems = styled.header`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-right: 90px;
`;

export const LogoIcon = styled(Logo)`
    /* later making it smaller for mobile users */
`;

export const LogoName = styled.span`
    font-weight: 500;
    font-size: 24px;
    color: white;
`;

export const NavigationList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const NavigationItem = styled.li`
    padding: 8px 24px 8px 24px;
`;

export const StyledNavLink = styled.a`
    text-transform: uppercase;
    color: white;
    font-weight: 600;
    font-size: 14px;
`;

export const SearchBox = styled.div`
    width: 33%;
    height: 48px;
    border: 1px solid rgb(228, 230, 240);
    border-radius: 33px;
    background-color: white;
    display: flex;
    align-items: center;

    &::placeholder && {
        color: rgb(126, 131, 154);
    };
`;

export const SearchIcon = styled(Search)`
    margin-left: 24px;
`;

export const SearchBar = styled.input`
    width: 80%;
    height: 100%;
    font-size: 16px;
    padding: 12px 16px;
    border-radius: 33px;
    border: none;
    outline: none;
`;