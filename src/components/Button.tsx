import { Pressable, StyleSheet, Text, View } from "react-native"
import Colors from "@/constants/Colors"
import { forwardRef } from "react"

type ButtonProps = {
    text: String
} & React.ComponentPropsWithoutRef<typeof Pressable>

const Button = forwardRef<View | null, ButtonProps>(
    ({ text, ...pressableProps }, ref) => {
        return (
            <Pressable ref={ref} {...pressableProps} style={styles.container}>
                <Text style={styles.text}>{text}</Text>
            </Pressable>
        )
    }
)

const styles = StyleSheet.create({
    container: {
        marginVertical: 30,
        backgroundColor: Colors.light.tint, 
        padding: 20,
        alignItems: "center",
        borderRadius: 100,
    },
    text: {
        fontSize: 20,
        color: "white",
    }
})

export default Button 