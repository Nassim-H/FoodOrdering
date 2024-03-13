import Colors from "@/constants/Colors";
import { forwardRef } from "react";
import { Pressable, View,Text, StyleSheet } from "react-native";


type ButtonProps =  {
    text: string;
} & React.ComponentProps<typeof Pressable>;


const Button = forwardRef<View | null, ButtonProps>(
    ({text, ...props}, ref) => {
    return (
        <Pressable ref={ref} {...props} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}
);


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.tint,
        padding: 15,
        alignItems : 'center',
        borderRadius: 100,
        marginVertical: 10,
    },
    text: {
      fontSize: 16,
      fontWeight: '600',
      color: 'white',
    },
  });

  export default Button;

