import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import Usuario from "./components/Usuario.js";
import Logo from "./screens/Logo.js"
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Logo/>
      <Usuario/>
    </SafeAreaView>);
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#F7F7F7',
      width:"100%",
      margin: 2,
      padding: 2,
      verticalAlign: "top"
  },
});