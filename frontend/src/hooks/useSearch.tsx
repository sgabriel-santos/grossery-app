import { createContext, useContext, useState } from "react";
import { useQuery } from "react-query";
import { Filters, Item } from "../models/Products";
import api from "../services/api";

interface SearchInput {
  children: React.ReactNode;
}

interface SearchProps {
  onSearchProduct: (aProducts: string[]) => void;
  onSelectFilter: (aFilter: Filters) => void;
  isLoading: boolean;
  data: Item[] | undefined;
  search: string[];
  filter: Filters;
  isError: boolean;
}

const SearchContext = createContext({} as SearchProps);

export const SearchProvider: React.FC<SearchInput> = ({ children }) => {
  const [search, setSearch] = useState<string[]>([""]);
  const [filter, setFilter] = useState(Filters.closer);

  const onSearchProduct = (aProducts: string[]) => {
    setSearch(aProducts);
  };

  const onSelectFilter = (aFilter: Filters) => {
    setFilter(aFilter);
  };

  const getProduct = async (aProducts: string[]) => {
    try {
      const { data } = await api.post<Item[]>("/products/info/many", aProducts);
      return data;
    } catch {
      throw Error();
    }
  };

  const { data, isFetching, isLoading, isError } = useQuery(
    ["search", search],
    () => {
      if (search.length === 1 && !search[0].length) return;
      return getProduct(search);
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <SearchContext.Provider
      value={{
        onSearchProduct,
        onSelectFilter,
        data,
        search,
        filter,
        isError,
        isLoading: isLoading || isFetching,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (): SearchProps => {
  const context = useContext(SearchContext);
  return context;
};
