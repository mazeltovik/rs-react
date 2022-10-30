import React from 'react';
import SearchDelete from './searchDelete';
import SearchIcon from './searchIcon';
type PropsInput = {
  inputValue: string;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

function SearchBar(props: PropsInput) {
  return (
    <div className="search">
      <SearchIcon />
      <input
        type="text"
        className="search-input"
        autoFocus
        placeholder="Please enter something"
        value={props.inputValue}
        onChange={props.handleChange}
        onKeyDown={props.onKeyDown}
      ></input>
      {props.inputValue.length > 0 && <SearchDelete clickHandler={props.handleClick} />}
    </div>
  );
}

export default SearchBar;
