import { View, Text, Image } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const OrderDetailsScreen = () => {
  const { id } = useLocalSearchParams()
  return (
    <View>
      <Stack.Screen options={{ title: `Details for ${id}` }} />
      <Text style={{ fontSize: 20 }}>You picked {id}</Text>
    </View>
  )
}

export default OrderDetailsScreen