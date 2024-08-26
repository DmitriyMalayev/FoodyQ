import { Stack } from "expo-router";

export default function OrderStack() {
    return (
        <Stack>
            <Stack.Screen name="orders" options={{ title: "Orders" }} />
        </Stack>
    )
}