import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#fff',
    borderRadius: '4px',
  },
});

const InputUrl = ({ onChange, error }) => {
  const classes = useStyles();
  const errorMessage = 'Please ensure this field is populated and formatted correctly (see placeholder)'

  return (
    <TextField
      id='workflow-url'
      error={error}
      helperText={error ? errorMessage : ''}
      onChange={onChange}
      classes={{ root: classes.root }}
      label='Your Model URL'
      variant='outlined'
    />
  );
};

export default InputUrl;
