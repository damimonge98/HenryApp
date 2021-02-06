import React from 'react';
import { DropDownWrapper, Options, Option } from "./styles";

const DropDown = ({ name, options, selectedFilter, setFilter }) => {
  return (
    <DropDownWrapper>
      {selectedFilter.value !== "" ? selectedFilter.name : name}
      <Options>
        {options.map((o) => (
          <Option
            key={o.name}
            value={o.value}
            onClick={() => setFilter(o)}
          >
            {o.name}
          </Option>
        ))}
      </Options>
    </DropDownWrapper>
  );
};

export default DropDown;
