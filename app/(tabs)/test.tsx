import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, View, Text } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
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
    backgroundColor: "black",
    width: "80%",
    height: "80%",
  },
  textStyle: {
    color: "white",
  },
});
