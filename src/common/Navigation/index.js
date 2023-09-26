import { useLocation } from "react-router-dom";
import {
  LogoIcon,
  LogoName,
  NavigationBar,
  NavigationItem,
  NavigationList,
  Wrapper,
  StyledNavLink,
  Container,
  LogoItemsLink,
} from "./styled";
import { Search } from "./Search";

export const Navigation = () => {
  const location = useLocation();
  const placeholder = location.pathname.startsWith("/movies")
    ? "Search for movies..."
    : "Search for people...";

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
        <Search placeholder={placeholder} />
      </Wrapper>
    </NavigationBar>
  );
};
