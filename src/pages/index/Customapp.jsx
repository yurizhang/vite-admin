import React from 'react'
import { Global, css } from '@emotion/react';
import {
  Box,
  ColorModeProvider,
  CSSBaseline,
  ThemeProvider,
  useColorMode,
  useTheme,
  useColorStyle,
  ColorStyleProvider,
} from '@trendmicro/react-styled-ui';

import App from './App';

const Layout = (props) => {
  const { colorMode } = useColorMode();
  const [colorStyle] = useColorStyle({ colorMode });
  const { fontSizes, lineHeights } = useTheme();
  const backgroundColor = colorStyle.background.primary;
  const color = colorStyle.text.primary;
  // const backgroundColor = {
  //   light: 'white',
  //   dark: 'gray:100',
  // }[colorMode];
  // const color = {
  //   light: 'black:primary',
  //   dark: 'white:primary',
  // }[colorMode];

  return (
    <>
      <Global
        styles={css`
          body {
            font-size: ${fontSizes.sm};
            line-height: ${lineHeights.sm};
          }
        `}
      />
      <Box
        className="youdbettleremove"
        backgroundColor={backgroundColor}
        color={color}
        fontSize="sm"
        lineHeight="sm"
        minHeight="100vh"
        {...props}
      />
    </>
  );
};

const CustomApp = (props) => {
  return (
    <ThemeProvider>
      <ColorModeProvider value="dark">
        <ColorStyleProvider>
          <CSSBaseline />
            <App {...props} />
        </ColorStyleProvider>
      </ColorModeProvider>
    </ThemeProvider>
  );
};
export default CustomApp;
