import { useState, useEffect } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (input.trim() !== "") {
        onSearch(input);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [input]);

  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="search"
    />
  );
}

export default SearchBar;
