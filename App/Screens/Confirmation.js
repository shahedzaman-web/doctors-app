import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import gs from "../GlobalStyle/GlobalStyle";

const Confirmation = () => {
  return (
    <View style={gs.container}>
      <View style={[gs.row, gs.spaceBetween, styles.m12]}>
        <Entypo name="list" size={24} color="#0170b2" />
        <Text style={[gs.bold, styles.colorText]}>Checkout</Text>
        <Text></Text>
      </View>
      <View style={[gs.center, styles.mt]}>
        <Image
          source={require("./../assets/icon/confirmation.png")}
          style={styles.logo}
        />
        <Text style={[gs.bold, gs.fontDefault]}>Thank you!</Text>
        <Text style={styles.confirmText}>
          Your task has been successfully submitted, you will receive a
          confirmation soon
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={[gs.textCenter, gs.textWhite, gs.bold, gs.fontDefault]}>
            Book an Appointment
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Confirmation;

const styles = StyleSheet.create({
  m12: {
    margin: 12,
  },
  colorText: {
    color: "#0170b2",
    fontSize: 16,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginVertical: 20,
  },
  mt: {
    marginTop: "30%",
  },
  confirmText: {
    marginVertical: 20,
    marginHorizontal: "20%",
    textAlign: "center",
    color: "#c9c9c9",
  },
  btnContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 100,
    backgroundColor: "#ebebeb",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  btn: {
    width: "90%",
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#0170b2",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 18,
    backgroundColor: "#0170b2",
    shadowColor: "#0170b2",
    shadowOpacity: 0.5,
    shadowRadius: 16,
    shadowOffset: { width: 2, height: 2 },
    elevation: 5,
  },
});
