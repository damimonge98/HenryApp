import React from 'react';

import {
  SearchWrapper
} from "./styles";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

const SearchInput = ({ ...props }) => {
  return (
    <SearchWrapper>
      <SearchIcon />
      <input {...props} />
      <CloseIcon />
    </SearchWrapper>
  );
};

export default SearchInput;
