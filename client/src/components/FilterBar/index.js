import React from 'react';
import DropDown from '../DropDown';
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import { FilterBarWrapper, FilterIconWrapper } from './styles';

const FilterBar = ({ filters }) => {
  return (
    <FilterBarWrapper>
      <FilterIconWrapper>
        <FilterIcon />
      </FilterIconWrapper>
      {
        filters.map((f, i) => <DropDown key={i} name={f.name} options={f.options} />)
      }
    </FilterBarWrapper>
  );
};

export default FilterBar;
