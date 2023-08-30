import { useState } from "react";

interface SearchInputIProps {
  getWeatherValue: (query: string) => void;
}

const SearchInput = ({ getWeatherValue }: SearchInputIProps): JSX.Element => {
  const [query, setQuery] = useState<string>("Prague");

  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button" onClick={() => getWeatherValue(query)}>
        Search
      </button>
    </div>
  );
};

export default SearchInput;
