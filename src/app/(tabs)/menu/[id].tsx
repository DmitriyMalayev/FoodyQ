import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@assets/data/Products'
import { defaultPizzaImage } from '@/components/ProductListItem'
import Colors from '@/constants/Colors'

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams()
  const product = products.find((p) => p.id.toString() === id)
  const sizes = ["S", "M", "LG", "XL"]

  if (!product) {
    return <Text>Product Not Found</Text>
  }
  return (
    <View style={styles.container} >
      <Stack.Screen options={{ title: `Details for ${product.name}` }} />
      <Image style={styles.image} source={{ uri: product.image || defaultPizzaImage }} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>

      <Text>Select a Size</Text>
      <View style={styles.sizes}>
        {sizes.map((s) => {
          return (
            <View style={styles.size} key={s}>
              <Text style={styles.sizeText} > {s}</Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 25,
    padding: 20,
    backgroundColor: "#F9F4ED"
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
    backgroundColor: "#F9F4ED"
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    marginVertical: 10,
    color: Colors.light.tint
  },
  price: {
    fontSize: 18,
    fontWeight: "bold"
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  size: {
    marginVertical: 20,
    backgroundColor: "grey",
    width: 50,
    borderRadius: 25,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: "center"
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
  }
})


export default ProductDetailsScreen