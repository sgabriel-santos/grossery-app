import React from "react";
import { useSearch } from "../../hooks/useSearch";
import { ProductCard } from "../ProductCard";

import { Container } from "./styles";

export const ProductList: React.FC = () => {
  const { data } = useSearch();

  if (!data) {
    return null;
  }

  const renderProducts = () => {
    const result = data.map(({ business, description, location, price }) => (
      <ProductCard
        key={String(business + location)}
        id={String(business + location)}
        item={{
          destination: location,
          market: business,
          name: description,
          price,
        }}
      />
    ));
    return result;
  };

  return <Container>{renderProducts()}</Container>;
};
