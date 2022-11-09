import React from "react";
import SearchResultSpan from "./SearchResultSpan";
import useSearchSelect from "./hooks/useSearchSelect";
import styled from "styled-components";

export type SickItem = {
  sickCd: string;
  sickNm: string;
};

interface SearchSelectProps {
  select: (item: SickItem) => void;
}

const SearchSelect = ({ select }: SearchSelectProps) => {
  const {
    searchResults,
    highlightedIndex,
    query,
    handleMouseEnter,
    handleSearchQuery,
    handleKeyDown
  } = useSearchSelect(select);

  return (
    <div>
      <SearchInput
        type="text"
        value={query}
        onChange={handleSearchQuery}
        onKeyDown={handleKeyDown}
      />
      <ul>
        {searchResults.map((item, index) => (
          <li
            key={index + 1}
            style={{
              backgroundColor:
                highlightedIndex === index ? "lightgray" : "white"
            }}
            onMouseEnter={handleMouseEnter}
            onClick={() => select(item)}
          >
            <SearchResultSpan text={item.sickNm} query={query} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchSelect;

const SearchInput = styled.input`
  width: 100%;
  border: 0;
  background-color: transparent;
  min-width: 0;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  padding: 0.375rem 0.75rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
