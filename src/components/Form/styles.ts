import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  form: {
    width: "90%",
    flexDirection: "row",
    position: "absolute",
  },
  input: {
    flex: 1,
    backgroundColor: "#262626",
    height: 56,
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
    marginRight: 10,
    marginLeft: 30,
    top: 150,
    color: '#F2F2F2'
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
    top: 150,
  },
  buttonImage: {
    tintColor: "#F2F2F2",
  },
});
