import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Colors from 'src/constants/Colors';
import { Product } from '../types';
import { Link } from 'expo-router';

export const defaultPizzaImage = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png"

type ProductListItemProps = {
    product: Product
}

const ProductListItem = ({ product }: ProductListItemProps) => {
    return (
        <Link href={`/${product.id}`} asChild>
            <Pressable style={styles.container}>
                <Image style={styles.image} source={{ uri: product.image || defaultPizzaImage }} />
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.price}>${product.price}</Text>
            </Pressable>
        </Link>
    )
}
export default ProductListItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        maxWidth: "50%",
    },
    title: {
        fontSize: 20,
        fontWeight: 600,
        marginVertical: 10,
        color: Colors.light.tint
    },
    price: {
        fontSize: 16,
        fontWeight: 500,
        color: Colors.dark.tint
    },
    image: {
        width: "100%",
        aspectRatio: 1,
        resizeMode: "contain",
        backgroundColor: "#F9F4ED"
    }
});
