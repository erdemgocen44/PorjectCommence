import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Nom</Text>

      <TextInput style={styles.input} placeholder="Lütfen Nom Giriniz" />

      <Text style={styles.textStyle}>Prenom</Text>

      <TextInput style={styles.input} placeholder="Lütfen Prenom Giriniz" />

      <Text style={styles.textStyle}>PostCode</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        inputMode="numeric"
        placeholder="Lütfen Posta Kodunuzu Giriniz"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 3,
    width: "80%",
    borderRadius: 10,
    borderColor: "black",
    padding: 15,
    marginVertical: 12,
    textAlign: "center",
    fontStyle: "italic",
    elevation: 1,
    color: "gris",
  },
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
    fontSize: 14,
  },
});
