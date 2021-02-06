import React from 'react';
import { DropDownWrapper, Options, Option } from "./styles";

const DropDown = ({ name, options }) => {
  return (
    <DropDownWrapper>
      {name}
      <Options>
        {options.map((o) => <Option key={o.name} value={o.value}>{o.name}</Option>)}
      </Options>
    </DropDownWrapper>
  );
};

export default DropDown;
