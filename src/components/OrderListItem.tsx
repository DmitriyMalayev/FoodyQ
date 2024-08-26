import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Colors from 'src/constants/Colors';
import { Order } from '../types';
import { Link } from 'expo-router';

export const defaultPizzaImage = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png"

type OrderListItemProps = {
    order: Order
}

const OrderListItem = ({ order }: OrderListItemProps) => {
    return (
        <Link href={`/menu/${order.id}`} asChild>
            <Pressable style={styles.container}>
                <Text style={styles.title}>{order.created_at}</Text>
                <Text style={styles.price}>${order.id}</Text>
                <Text style={styles.price}>${order.status}</Text>
                <Text style={styles.price}>${order.total}</Text>
                <Text style={styles.price}>${order.user_id}</Text>
            </Pressable>
        </Link>
    )
}
export default OrderListItem

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
