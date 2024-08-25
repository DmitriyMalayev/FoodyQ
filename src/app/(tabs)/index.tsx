import { ScrollView, FlatList } from 'react-native';
import products from 'assets/data/Products';
import ProductListItem from '@components/ProductListItem';

export default function MenuScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerStyle={{ gap: 10, margin: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  );
}
