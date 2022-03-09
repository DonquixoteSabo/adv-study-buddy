import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    spacing: {
      m: string;
    };
    fontSize: {
      m: string;
    };
    colors: {
      primary: string;
    };
  }
}
