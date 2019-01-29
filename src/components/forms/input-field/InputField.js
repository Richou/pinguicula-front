import React from 'react';
import TextField from "@material-ui/core/es/TextField/TextField";

export class InputField extends React.Component {

  onChangeHandler = event => {
    event.preventDefault();
    if (this.props.isValid && this.props.onChange) {
      const isValid = !this.props.isValid(event.target.value);
      this.props.onChange(event, isValid);
    }
  };

  render() {
    const {label, type, name, error} = this.props;

    return (
      <TextField
        label={label}
        className="login-input"
        type={type}
        name={name}
        error={error}
        margin="normal"
        variant="outlined"
        onChange={this.onChangeHandler}
      />
    )
  }
}
