import React from "react";

interface SearchResultSpanProps {
  text: string;
  query: string;
}

const SearchResultSpan = ({ text, query }: SearchResultSpanProps) => {
  const regex = new RegExp(`(${query})`, "gi");

  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, i) => (
        <span
          key={i}
          style={{
            fontWeight:
              part.toLowerCase() === query.toLowerCase() ? "bold" : "normal"
          }}
        >
          {part}
        </span>
      ))}
    </span>
  );
};

export default SearchResultSpan;
