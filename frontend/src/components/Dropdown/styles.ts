import { IconType } from "react-icons";
import { MdOutlineExpandLess } from "react-icons/md";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  button {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0rem 1.6rem;
    width: 35rem;
    height: 7.2rem;
    background-color: transparent;
    color: ${(props) => props.theme.colors.filter.filterBy};
    font-size: 2rem;
    border-radius: 0.8rem;
    border: 0;
  }

  > button {
    position: relative;
    background: rgba(0, 0, 0, 0.45);
    transition: 0.3s;
  }

  .menu {
    position: absolute;
    overflow: hidden;
    z-index: 1;
    width: 100%;
    height: 16.8rem;
    opacity: 0;
    scale: 0;
    visibility: hidden;
    transform-origin: 100% 0%;
    border-radius: 0.8rem;
    background: rgba(0, 0, 0, 0.45);
    transition: 0.4s;

    button {
      border: 0;
      width: 100%;
      height: 5.6rem;
      border-radius: 0;

      display: flex;
      align-items: center;

      &:hover {
        background: rgba(0, 0, 0, 0.26);
      }
    }
  }

  &.open .menu {
    scale: 1;
    right: 0;
    top: 7.2rem;
    opacity: 1;
    visibility: visible;
  }

  &.open svg {
    rotate: 180deg;
  }
`;

export const DropIcon = styled(MdOutlineExpandLess)`
  color: ${(props) => props.theme.colors.filter.filterBy};
  font-size: 2rem;
  margin-left: auto;
  transition: 0.4s;
`;

export const DropdownOptionIcon = ({ icon }: { icon: IconType }) =>
  styled(icon)`
    color: ${(props) => props.theme.colors.filter.filterBy};
    font-size: 2.4rem;
    margin-right: 0.8rem;
  `;
