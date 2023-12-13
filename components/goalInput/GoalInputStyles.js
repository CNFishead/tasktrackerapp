import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 20,
    padding: 8,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    width: "30%",
    marginHorizontal: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    margin: 16,
  },
});
