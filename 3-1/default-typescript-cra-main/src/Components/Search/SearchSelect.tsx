import React, { useState } from "react";
import SearchResultSpan from "./SearchResultSpan";

export type SickItem = {
  sickCd: string;
  sickNm: string;
};

interface SearchSelectProps {
  data: SickItem[];
  select: (item: SickItem) => void;
  query: string;
  setQuery: (query: string) => void;
}

const SearchSelect = ({ data, select, query, setQuery }: SearchSelectProps) => {
  const [searchResults, setSearchResults] = useState(data);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setQuery(input);
    const results = data.filter((item) => {
      return item.sickNm.toLowerCase().includes(input.toLowerCase());
    });
    setSearchResults(results);
    setHighlightedIndex(0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      select(searchResults[highlightedIndex]);
    } else if (e.key === "ArrowUp") {
      if (highlightedIndex === 0) {
        setHighlightedIndex(searchResults.length - 1);
      } else {
        setHighlightedIndex(highlightedIndex - 1);
      }
    } else if (e.key === "ArrowDown") {
      if (highlightedIndex === searchResults.length - 1) {
        setHighlightedIndex(0);
      } else {
        setHighlightedIndex(highlightedIndex + 1);
      }
    }
  };

  return (
    <div>
      <input
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
            onMouseEnter={() => setHighlightedIndex(index)}
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
