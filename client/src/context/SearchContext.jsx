import { createContext, useContext, useEffect, useState } from "react";
import { SEARCH_SHOWS } from "../api/searchApi";
import { useQuery } from "@apollo/client";

const searchContext = createContext();

export const useSearchContext = () => {
  const context = useContext(searchContext);
  if (!context) throw new Error("Search Provider is missing");
  return context;
};

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState({
    totalCount: 0,
    shows: [],
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [lastSelected, setSelectedItem] = useState(null);

  const {
    loading,
    error,
    data,
    refetch: refetchResults,
  } = useQuery(SEARCH_SHOWS, {
    variables: { filter: { search: searchTerm, limit: 5 } },
  });

  useEffect(() => {
    if (data) {
      setSearchResults(data.shows); // Assuming your data structure has a 'searchResults' field
    }
  }, [data]);

  return (
    <searchContext.Provider
      value={{
        searchResults,
        searchTerm,
        setSearchTerm,
        refetchResults,
        error,
        loading,
        setSelectedItem,
        lastSelected,
      }}
    >
      {children}
    </searchContext.Provider>
  );
};
