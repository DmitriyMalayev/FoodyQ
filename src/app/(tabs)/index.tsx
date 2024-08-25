import Colors from '@/src/constants/Colors';
import { StyleSheet, Text, View, Image } from 'react-native';
import products from '@/assets/data/products';

const product = products[0]

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#efeae1",
    padding: 10,
    borderRadius: 25
  },
  title: {
    fontSize: 25,
    fontWeight: 600,
    marginVertical: 10,
    color: Colors.light.tint
  },
  price: {
    fontSize: 20,
    fontWeight: 500,
    color: Colors.dark.tint
  },
  image: {
    width: "60%",
    aspectRatio: 1
  }
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: '80%',
  // },
});
