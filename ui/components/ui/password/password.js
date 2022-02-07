import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { clearClipboard } from '../../../helpers/utils/util';

export default function Password({
  clearClipboardOnPaste = false,
  password,
  placeholder,
  onPasswordChange,
  showPassword = false,
}) {
  return (
    <>
      <TextField
        type="password"
        onChange={(e) => onPasswordChange(e.target.value)}
        value={password}
        placeholder={placeholder}
        autoComplete="off"
        onPaste={clearClipboardOnPaste ? clearClipboard : undefined}
      />
      {showPassword ? (
        <svg className="password__shown" viewBox="0 0 240 80">
          <text className="password__shown-text" x="0" y="50">
            {password}
          </text>
        </svg>
      ) : null}
    </>
  );
}

Password.propTypes = {
  clearClipboardOnPaste: PropTypes.bool,
  password: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onPasswordChange: PropTypes.func.isRequired,
  showPassword: PropTypes.bool,
};
