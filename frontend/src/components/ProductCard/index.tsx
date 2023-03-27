import React, { useState } from "react";
import { CustomMap } from "../CustomMap";
import { Modal } from "../Modal";

import { Container, MapWrapper, PinIcon } from "./styles";

interface ProductCardProps {
  item: {
    name: string;
    price: number;
    market: string;
    destination: string;
  };
  id: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ item, id }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpenModal = () => {
    // ...request
    setModalOpen(true);
  };

  const brl = (aPrice: number) => {
    return new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(aPrice);
  };

  return (
    <Container id={id}>
      <div className="title-wrapper">
        <h2>{item.name}</h2>
      </div>
      <h1>{brl(item.price)}</h1>
      <div className="market-wrapper">
        <h3>{item.market}</h3>
      </div>
      <MapWrapper onClick={handleOpenModal}>
        <PinIcon />
      </MapWrapper>
      <Modal isOpen={modalOpen} onClose={handleCloseModal} title={item.market}>
        <CustomMap destination={item.destination} />
      </Modal>
    </Container>
  );
};
