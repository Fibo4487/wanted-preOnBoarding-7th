import Api from "@/lib/api/Api";
import useDebounce from "@/lib/util/useDebounce";
import React, { useState } from "react";
import SearchResultSpan from "./SearchResultSpan";

export type SickItem = {
  sickCd: string;
  sickNm: string;
};

interface SearchSelectProps {
  select: (item: SickItem) => void;
}

const SearchSelect = ({ select }: SearchSelectProps) => {
  const [searchResults, setSearchResults] = useState<SickItem[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [query, setQuery] = useState<string>("");
  const [cache, setCache] = useState<Map<string, SickItem[]>>(new Map());

  const fetchSickData = async (query: string) => {
    const cacheKeys = Array.from(cache.keys());

    if (cacheKeys.includes(query)) {
      setSearchResults(cache.get(query) as SickItem[]);
      return;
    }
    const sickData = await Api.get<SickItem[]>(`/sick?q=${query}`);
    const results = sickData
      .filter((item) => {
        return item.sickNm.toLowerCase().includes(query.toLowerCase());
      })
      ?.slice(0, 15);
    setCache((prev) => {
      const newCache = new Map(prev);

      newCache.set(query, results);
      return newCache;
    });
    setSearchResults(results);
  };

  const debounceGetSickData = useDebounce<typeof fetchSickData>(
    fetchSickData,
    500
  );

  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (!input) {
      setSearchResults([]);
      return setQuery("");
    }
    debounceGetSickData(input);
    setQuery(input);
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
