import { StyleSheet } from "react-native";

export const Colors = {
  primary: "#cb7f35",
  secondary: "#cb7f35",
  tersiary: "#cb7f35",
  white: "#fbf7ef",
  black: "#39180f",
  A100: "#f4e8d1",
  A200: "#e8d09f",
  A300: "#ddb36c",
  A700: "#954828",
  A800: "#7a3b26",
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" && 30,    
    paddingHorizontal: 20,
    height: "100%",
  },
  Text: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.black,
  },
  ViewHeader: {    
    marginVertical: 0,
  },
  ViewnNavHeader: {    
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    marginVertical: 20,
    marginHorizontal: 80,
    paddingHorizontal: 20,    

  },
  TextNavHeader: {
    fontSize: 18,
    color: Colors.black,
  },
  ButtonNavHeader: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: Colors.white,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: -80 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 9,
  },
  ButtonNavHeaderActive: {
    backgroundColor: Colors.tersiary,
    fontWeight: "bold",
    color: Colors.white,
    fontSize: 18,
  },
  VewTimer:{
    flex: .3,
    marginBottom: 20,
    backgroundColor: Colors.white,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },  
  TextTimer: {
    fontSize: 72,
    color: Colors.A800,
    fontFamily: "monospace",
    fontWeight: "bold",
  },
});