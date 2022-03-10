//styled-components setup
import GlobalStyle from 'assets/styles/GlobalStyle';
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../assets/styles/theme';
// templates
import MainTemplate from '../../templates/MainTemplate';

const StyledLogo = styled.span`
  grid-row: 1/2;
  grid-column: 1/2;
  display: grid;
  place-items: center;
  text-align: right;
  background: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  color: white;
`;

const StyledNav = styled.nav`
  grid-column: 1/2;
  grid-row: 2/-1;
  border-right: 1px solid ${({ theme }) => theme.colors.primary};
`;

const StyledSearchBar = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`;

const StyledNewsSection = styled.div`
  grid-column: 3/4;
  grid-row: 1/-1;
  border-left: 1px solid ${({ theme }) => theme.colors.primary};
`;

const StyledStudentsList = styled.div`
  grid-column: 2/3;
  grid-row: 2/-1;
`;
const StyledFooter = styled.footer`
  grid-column: 2/3;
  grid-row: 3/4;
  text-align: center;
`;

const Root = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <MainTemplate>
          <StyledLogo>
            Study <br />
            Buddy
          </StyledLogo>
          <StyledSearchBar>Search bar</StyledSearchBar>
          <StyledNewsSection>News section</StyledNewsSection>
          <StyledNav>Navigation</StyledNav>
          <StyledStudentsList>students list</StyledStudentsList>
          <StyledFooter>Created by Kamil Budzik</StyledFooter>
        </MainTemplate>
      </ThemeProvider>
    </>
  );
};

export default Root;
