import { React } from "react";
import { Image, View, StyleSheet } from "react-native";

export default function Logo() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('../assets/senac.png')} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        margin: 15,
        padding: 15,
    },
    tinyLogo: {
        alignSelf:"center",
        width:"50%",
        height: "50%",
        resizeMode: "contain"
      },
});