import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import { defaultTheme, GlobalStyle } from 'theme';
import { StylesProvider } from '@material-ui/styles';
import { ThemeProvider } from 'styled-components';

function AppWrapper({ children }) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={defaultTheme}>
        <StylesProvider injectFirst>
          <GlobalStyle />
          {children}
        </StylesProvider>
      </ThemeProvider>
    </>
  );
}

AppWrapper.defaultProps = {
  children: null,
};

AppWrapper.propTypes = {
  children: PropTypes.node,
};

export default AppWrapper;
