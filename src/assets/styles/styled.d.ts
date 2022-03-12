import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
    };
    spacing: {
      m: string;
      l: string;
    };
    fontSize: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xl2: string;
      xl3: string;
      xl4: string;
    };
    fontFamily: {
      roboto: string;
      montserrat: string;
    };
    letterSpacing: {
      sm: string;
      md: string;
    };
    lineHeights: {
      sm: number;
      md: number;
    };
  }
}
