import { StyleSheet } from "react-native";

export const theme = {
  tint: "blue",
  background: "white",
  text: "black",
  button: "green",
};

export const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: theme.tint,
  },
  button: {
    backgroundColor: theme.button,
    height: 50,
    width: 200,
    borderRadius: 25,
  },
  button_title: {
    color: theme.background,
  },
});
