import { StyleSheet } from "react-native";
import Constants from "expo-constants";
const gs = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
  },
  bgWhite: {
    backgroundColor: "white",
  },
  bgGray: {
    backgroundColor: "gray",
  },
  borderRounded: {
    borderRadius: 50,
  },
  border: {
    borderWidth: 1,
  },
  border2: {
    borderWidth: 2,
  },
  border4: {
    borderWidth: 4,
  },
  borderB2: {
    borderBottomWidth: 2,
  },
  borderB4: {
    borderBottomWidth: 4,
  },
  borderGray: {
    borderColor: "gray",
  },
  borderB: {
    borderBottomWidth: 1,
  },
  borderT: {
    borderTopWidth: 1,
  },
  borderL: {
    borderLeftWidth: 1,
  },
  borderR: {
    borderRightWidth: 1,
  },
  borderRadius50: {
    borderRadius: 200,
  },
  shadow: {
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 8,
  },
  
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  alignCenter: {
    alignItems: "center",
  },spaceBetween:{
    justifyContent:"space-between"
  },spaceAround:{
    justifyContent:"space-around"
  },justifyCenter: {
    display: "flex",
    justifyContent: "center",
  },
  textCenter: {
    textAlign: "center",
  },
 
  textWhite: {
    color: "white",
  },
  bold: {
    fontWeight: "bold",
  },textNormal:{
    fontWeight: "normal",
  },
  italic: {
    fontStyle: "italic",
  }, fontDefault: {
    fontSize: 20,
  },fontXS:{
      fontSize: 10,
  },fontS:{
    fontSize: 12,
},
  fontNormal: {
    fontSize: 16,
  },
  fontL: {
    fontSize: 24,
  },
  fontXL: {
    fontSize: 30,
  },
  fontXXL: {
    fontSize: 40,
  },
  
});

export default gs;
