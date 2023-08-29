import {
    LogoIcon,
    LogoItems,
    LogoName,
    NavigationBar,
    NavigationItem,
    NavigationList,
    SearchBar,
    Wrapper,
    StyledNavLink,
    Container,
    SearchBox,
    SearchIcon
} from "./styled";


export const Navigation = () => {
    return (
        <NavigationBar>
            <Wrapper>
                <Container>
                    <LogoItems>
                        <LogoIcon />
                        <LogoName>Movies&nbsp;Browser</LogoName>
                    </LogoItems>
                    <NavigationList>
                        <NavigationItem>
                            <StyledNavLink>Movies</StyledNavLink>
                        </NavigationItem>
                        <NavigationItem>
                            <StyledNavLink>People</StyledNavLink>
                        </NavigationItem>
                    </NavigationList>
                </Container>
                <SearchBox>
                    <SearchIcon />
                    <SearchBar placeholder="Search for movies..."/>
                </SearchBox>
            </Wrapper>
        </NavigationBar>
    );
};