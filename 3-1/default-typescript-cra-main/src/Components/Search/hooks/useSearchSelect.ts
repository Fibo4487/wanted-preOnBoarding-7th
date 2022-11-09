import Api from "@/lib/api/Api";
import useDebounce from "@/lib/util/useDebounce";
import { useState } from "react";
import { SickItem } from "../SearchSelect";

const useSearchSelect = (select: (item: SickItem) => void) => {
  const [searchResults, setSearchResults] = useState<SickItem[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [query, setQuery] = useState<string>("");
  const [cache, setCache] = useState<Map<string, SickItem[]>>(new Map());

  const fetchSickData = async (query: string) => {
    const cacheKeys = Array.from(cache.keys());

    if (cacheKeys.includes(query)) {
      const cachedData = cache.get(query);
      setSearchResults(cachedData || []);
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

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    const index = Number(e.currentTarget.dataset.index);
    setHighlightedIndex(index);
  };

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
      e.preventDefault();
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

  return {
    searchResults,
    highlightedIndex,
    query,
    handleMouseEnter,
    handleSearchQuery,
    handleKeyDown
  };
};

export default useSearchSelect;
