import React, { useEffect, useState } from "react";
import { useLocation } from "../../hooks/useLocation";
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
  const { coords } = useLocation();

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

  useEffect(() => {
    if (window.google) {
      window.google.maps.geometry.spherical.computeDistanceBetween(
        { lat: coords.latitude, lng: coords.longitude },
        { lat: coords.latitude, lng: coords.longitude }
      );
    }
  }, [coords.latitude, coords.longitude]);

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
