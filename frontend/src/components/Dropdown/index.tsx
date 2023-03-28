import React, { useRef, useState } from "react";
import { IconType } from "react-icons";
import { MdAccessTime, MdAttachMoney, MdMap } from "react-icons/md";
import { useSearch } from "../../hooks/useSearch";
import { Filters } from "../../models/Products";

import { Container, DropdownOptionIcon, DropIcon } from "./styles";

const filterName = (aName: Filters) => {
  switch (aName) {
    case Filters.closer:
      return "mais próximo";
    case Filters.cheaper:
      return "mais barato";
    case Filters.latest:
      return "mais recente";
    default:
      return "";
  }
};

export const Dropdown: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const chevronRef = useRef<HTMLSpanElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [menuTop, setMenuTop] = useState("");
  const [menuRight, setMenuRight] = useState("");
  const { filter, onSelectFilter } = useSearch();

  const handleClick = () => {
    const buttonRect = buttonRef.current?.getBoundingClientRect();
    const chevronRect = chevronRef.current?.getBoundingClientRect();

    if (buttonRect && chevronRect && isOpen) {
      const aMenuRight = buttonRect.right - chevronRect.right;
      const aMenuTop = buttonRect.top - chevronRect.top;
      setMenuRight(`${aMenuRight}px`);
      setMenuTop(`${aMenuTop}px`);
    } else {
      setMenuRight("0px");
      setMenuTop("78px");
    }

    setIsOpen((value) => !value);
  };

  const handleSelectFilter = (aFilter: Filters) => {
    onSelectFilter(aFilter);
    setIsOpen(false);
  };

  const renderDropdownOptionIcon = (anIcon: IconType) => {
    const Result = DropdownOptionIcon({ icon: anIcon });
    return <Result id={`${anIcon.name}`} />;
  };

  return (
    <Container className={isOpen ? "open" : ""}>
      <button ref={buttonRef} onClick={handleClick}>
        <span>Filtrar por: </span>
        <span>{filterName(filter)}</span>
        <DropIcon />
      </button>
      <div
        className={`menu ${isOpen ? "open" : ""}`}
        style={{ right: menuRight, top: menuTop }}
      >
        <button onClick={() => handleSelectFilter(Filters.closer)}>
          {renderDropdownOptionIcon(MdMap)}
          <span> mais próximo</span>
        </button>
        <button onClick={() => handleSelectFilter(Filters.cheaper)}>
          {renderDropdownOptionIcon(MdAttachMoney)}
          <span> mais barato</span>
        </button>
        <button onClick={() => handleSelectFilter(Filters.latest)}>
          {renderDropdownOptionIcon(MdAccessTime)}
          <span> mais recente</span>
        </button>
      </div>
    </Container>
  );
};
