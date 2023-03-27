import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import products from "../mocks/products.json";
import { Filters, Item } from "../models/Products";
import api from "../services/api";

interface SearchInput {
  children: React.ReactNode;
}

interface SearchProps {
  onSearchProduct: (aProduct: string) => void;
  isLoading: boolean;
  data: Item[] | undefined;
  search: string;
}

const SearchContext = createContext({} as SearchProps);

export const SearchProvider: React.FC<SearchInput> = ({ children }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(Filters.closer);

  const onSearchProduct = (aProduct: string) => {
    setSearch(aProduct);
  };

  const getProduct = async (aProduct: string) => {
    try {
      const { data } = await api.get<Item[]>("/products/info", {
        params: {
          description: aProduct,
        },
      });
      return data;
    } catch {
      throw Error();
    }
  };

  const { data, isFetching, isLoading } = useQuery(
    ["search", search, filter],
    () => {
      if (!search) return;
      return getProduct(search);
    },
    {
      retry: false,
    }
  );

  return (
    <SearchContext.Provider
      value={{
        onSearchProduct,
        data,
        search,
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
