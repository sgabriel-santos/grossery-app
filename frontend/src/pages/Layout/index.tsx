import { Header } from '../../components/Header';
import { ProductList } from '../../components/ProductList';
import { Container, Content } from './styles';

export const Layout = () => {
  return (
    <Container>
      <Content>
        <Header />
        <ProductList />
      </Content>
    </Container>
  );
};
