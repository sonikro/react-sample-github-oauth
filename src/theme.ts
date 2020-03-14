import { createMuiTheme } from '@material-ui/core';

import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

const formFieldVariant = 'outlined';

const theme = createMuiTheme({
  props: {
    MuiTextField: {
      variant: formFieldVariant,
    },
    MuiFormControl: {
      variant: formFieldVariant,
    },
    MuiSelect: {
      variant: formFieldVariant,
    },
    MuiFormLabel: {
      variant: formFieldVariant,
    },
    MuiFormControlLabel: {
      variant: formFieldVariant,
    },
    MuiInputLabel: {
      variant: formFieldVariant,
    },
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
} as ThemeOptions);

export default theme;
