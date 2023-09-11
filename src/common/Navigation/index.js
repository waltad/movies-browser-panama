import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import {
    LogoIcon,
    LogoName,
    NavigationBar,
    NavigationItem,
    NavigationList,
    SearchBar,
    Wrapper,
    StyledNavLink,
    Container,
    SearchBox,
    SearchIcon,
    LogoItemsLink
} from "./styled";

export const Navigation = () => {
    const location = useLocation();
    const placeholder = location.pathname.startsWith("/movies")
        ? "Search for movies..." : "Search for people...";

    return (
        <NavigationBar>
            <Wrapper>
                <Container>
                    <LogoItemsLink to="/movies">
                        <LogoIcon />
                        <LogoName>Movies&nbsp;Browser</LogoName>
                    </LogoItemsLink>
                    <NavigationList>
                        <NavigationItem>
                            <StyledNavLink to="/movies">Movies</StyledNavLink>
                        </NavigationItem>
                        <NavigationItem>
                            <StyledNavLink to="/people">People</StyledNavLink>
                        </NavigationItem>
                    </NavigationList>
                </Container>
                <SearchBox>
                    <SearchIcon />
                    <SearchBar placeholder={placeholder} />
                </SearchBox>
            </Wrapper>
        </NavigationBar >
    );
};