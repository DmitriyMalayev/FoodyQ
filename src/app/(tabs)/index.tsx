import { ScrollView } from 'react-native';
import products from 'assets/data/Products';
import ProductListItem from '@components/ProductListItem';

export default function MenuScreen() {
  return (
    <ScrollView>
      <ProductListItem product={products[0]} />
      <ProductListItem product={products[1]} />
      <ProductListItem product={products[2]} />
    </ScrollView>
  );
}
