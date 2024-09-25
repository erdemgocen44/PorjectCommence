import { StyleSheet, View, Text } from "react-native";

import { StatusBar } from "expo-status-bar";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text>Araba</Text>
      <StatusBar style="auto" />

      <View style={styles.subContainer}>
        <Text style={styles.textStyle}>TEST TEST</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    width: "80%",
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "blue",
  },
  textStyle: {
    color: "red",
    fontWeight: "bold",
  },
});
