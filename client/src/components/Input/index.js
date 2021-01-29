import React from 'react';
import { InputWrapper, ErrorMessage, RowLabel } from './styles';

const Input = React.forwardRef(({ label, required, ...otherProps }, ref) => {
  return (
    <InputWrapper>
      <RowLabel>
        {label} {required ? "*" : null}
        {
          otherProps.error &&
          <ErrorMessage>{otherProps.error}</ErrorMessage>
        }
      </RowLabel>
      <input ref={ref} {...otherProps} />
    </InputWrapper>
  );
});

export default Input;
