import { extendTheme, ITheme } from 'native-base';

import { colorPalette } from './foundations/colorPalette';
import { fontSizes } from './foundations/fonts';

export const theme: ITheme = extendTheme({
  fontSizes,
  colors: colorPalette,
});
