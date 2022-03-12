// React-query setup
import { QueryClient, QueryClientProvider } from 'react-query';
//styled-components setup
import GlobalStyle from 'assets/styles/GlobalStyle';
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../assets/styles/theme';
// templates
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import NewsSection from 'components/templates/NewsSection/NewsSection';

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
  padding-top: ${({ theme }) => theme.spacing.m};
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

const queryClient = new QueryClient();

const Root = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <MainTemplate>
            <StyledLogo>
              Study <br />
              Buddy
            </StyledLogo>
            <StyledSearchBar>Search bar</StyledSearchBar>
            <NewsSection />
            <StyledNav>Navigation</StyledNav>
            <StyledStudentsList>students list</StyledStudentsList>
            <StyledFooter>Created by Kamil Budzik</StyledFooter>
          </MainTemplate>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default Root;
