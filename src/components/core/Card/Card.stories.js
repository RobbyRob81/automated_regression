import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { storiesOf } from '@storybook/react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Card from './Card';
import theme from '../../../styles/themes/verus_theme';

const muiTheme = createMuiTheme(theme);
const story = storiesOf('Card', module);

story.add('default', () => <Card />);
story.add('dark', () => (
  <MuiThemeProvider theme={muiTheme}>
    <CssBaseline>
      <Card />
    </CssBaseline>
  </MuiThemeProvider>
));
