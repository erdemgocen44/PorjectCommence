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
    backgroundColor: "grey",
    width: "80%",
    height: "60%",
  },
  textStyle: {
    color: "white",
  },
});
