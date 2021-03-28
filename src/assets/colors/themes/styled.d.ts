import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
      palette: {
            alto: string;
            transparent: string;
            white: string;
            scienceblue: string;
            dodgerBlue: string;
            scorpion: string;
        },
      font: {
          Light: string;
          Regular: string;
          Medium: string;
          Bold: string;
      }
    }
}