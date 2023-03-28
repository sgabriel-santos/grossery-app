import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 2.4rem 0rem;

  .c-search {
    span {
      font-size: 2.2rem;
    }
    > span.c-search__title {
      color: ${(props) => props.theme.colors.filter.search};
      font-weight: 700;

      display: box;
      margin-right: 1.6rem;
    }

    > span.c-search__item {
      color: ${(props) => props.theme.colors.filter.productName};
      font-weight: 700;
    }
  }

  .c-dropdown {

  }
`;
