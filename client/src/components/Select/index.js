import React from 'react';

import { SelectWrapper, RowLabel, ErrorMessage, Option } from "./styles";

const Select = React.forwardRef(({ label, required, options = [], ...props }, ref) => {
  return (
    <SelectWrapper>
      <RowLabel>
        {label} {required ? "*" : null}
        {
          props.error &&
          <ErrorMessage>{props.error}</ErrorMessage>
        }
      </RowLabel>
      <select ref={ref} {...props}>
        {options.map((o, i) => (
          <Option key={i} value={o.value}>{o.text}</Option>
        ))}
      </select>
    </SelectWrapper>
  );
});

export default Select;
