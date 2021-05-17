import 'styled-components';

interface Palette {
  main: string;
  text: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      common: {
        black: string;
        white: string;
        contrastText: string;
      };
      primary: Palette;
      secondary: Palette;
    };
  }
}
