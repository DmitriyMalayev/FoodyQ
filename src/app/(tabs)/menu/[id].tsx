import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@assets/data/Products'
import { defaultPizzaImage } from '@/components/ProductListItem'
import Button from "@components/Button"
import Colors from '@/constants/Colors'

const ProductDetailsScreen = () => {
  const [selectedSize, setSelectedSize] = useState("M")

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
      <Text style={styles.sizeText} >Select a Size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable onPress={() => setSelectedSize(size)} style={[styles.size, { backgroundColor: selectedSize === size ? "red" : "lightgray" }]} key={size}>
            <Text style={styles.sizeText}> {size}</Text>
          </Pressable>
        ))}
      </View>
      <Button style={styles.button} text={"Add To Cart"} >Hello</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 25,
    padding: 20,
    backgroundColor: "#F9F4ED",
    alignItems: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
    backgroundColor: "#F9F4ED"
  },
  title: {
    fontSize: 25,
    fontWeight: 600,
    marginVertical: 10,
    color: Colors.light.tint
  },
  price: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "bold"
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  size: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: "#C0C0C0",
    width: 50,
    borderRadius: 25,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: "center"
  },
  sizeText: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "500",
  },
  button: {
    marginVertical: 10,
  }
})


export default ProductDetailsScreen