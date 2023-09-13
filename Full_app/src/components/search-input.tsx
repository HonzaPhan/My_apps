import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

interface SearchInputIProps {
  getWeatherValue: (query: string) => void;
}

const SearchInput = ({ getWeatherValue }: SearchInputIProps): JSX.Element => {
  const [query, setQuery] = useState<string>("Prague");

  return (
    <Box className="search-box">
      <TextField
        placeholder="Search..."
        value={query}
        focused
        onChange={(e) => setQuery(e.target.value)}
        fullWidth
        inputProps={{ style: { color: "white" } }}
      />
      <Button variant="contained" onClick={() => getWeatherValue(query)}>
        Search
      </Button>
    </Box>
  );
};

export default SearchInput;
