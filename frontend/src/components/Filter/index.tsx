import React from "react";
import { useSearch } from "../../hooks/useSearch";
import { Dropdown } from "../Dropdown";

import { Container } from "./styles";

export const Filter: React.FC = () => {
  const { search } = useSearch();
  return (
    <Container>
      <div className="c-search">
        <span className="c-search__title">Busca:</span>
        <span className="c-search__item">
          {new Intl.ListFormat("pt-br", {
            style: "long",
            type: "conjunction",
          }).format(search)}
        </span>
      </div>
      <div className="c-dropdown">
        {/* <Dropdown /> */}
      </div>
    </Container>
  );
};
