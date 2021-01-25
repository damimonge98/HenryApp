import React from 'react';
import { InputWrapper, ErrorMessage, RowLabel } from './styles';

const Input = ({ label, ...otherProps }) => {
  return (
    <InputWrapper>
      <RowLabel>
        {label} {otherProps.required ? "*" : null}
        {
          otherProps.error &&
          <ErrorMessage>Error</ErrorMessage>
        }
      </RowLabel>
      <input {...otherProps} />
    </InputWrapper>
  );
};

export default Input;
