import React from 'react';
import DropDown from '../DropDown';
import SearchInput from '../SearchInput';
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import { FilterBarWrapper, FilterIconWrapper, SearchInputWrapper } from './styles';

const FilterBar = ({ filters }) => {
  return (
    <FilterBarWrapper>
      <FilterIconWrapper>
        <FilterIcon />
      </FilterIconWrapper>
      {
        filters.map((f, i) => (
          <DropDown
            key={i}
            name={f.name}
            selectedFilter={f.selectedFilter}
            setFilter={f.setFilter}
            options={f.options}
          />
        ))
      }
      <SearchInputWrapper>
        <SearchInput />
      </SearchInputWrapper>
    </FilterBarWrapper>
  );
};

export default FilterBar;
