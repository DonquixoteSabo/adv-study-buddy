//styled-components setup
import GlobalStyle from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../assets/styles/theme';

const Root = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <h1>HELLO, Have a nice coding bro {'<3'} Glad u are here</h1>
      </ThemeProvider>
    </>
  );
};

export default Root;
