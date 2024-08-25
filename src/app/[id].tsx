import { View, Text, Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { defaultPizzaImage } from '@/components/ProductListItem'

const ProductDetailsScreen = () => {
  const { id, name, price } = useLocalSearchParams()
  return (
    <View>
      <Text>You picked {id}</Text>
       {/* <Text>{name}</Text>
      <Text>${price}</Text> */}
    </View>
  )
}

export default ProductDetailsScreen