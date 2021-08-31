import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import gs from "../GlobalStyle/GlobalStyle";


const Checkout = () => {

  return (
    <View style={gs.container}>
      <View style={[gs.row, gs.spaceBetween]}>
        <AntDesign name="left" size={24} color="black" />
        <Text style={[gs.bold, styles.colorText]}>Checkout</Text>
        <Text></Text>
      </View>
      <ScrollView style={{ marginBottom: 120 }}>
        <View>
        
        
        </View>
        <View style={styles.inputContainer}>
          <Text style={gs.bold}>Your Address</Text>
          <View style={styles.border} />
          <View style={[gs.row, gs.alignCenter, gs.spaceBetween]}>
            <View style={gs.row}>
              <TextInput
                style={styles.input}
            
                placeholder="39 Street of NY, New York City, USA"
              />
            </View>
          </View>
        </View>
        
      </ScrollView>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={[gs.textCenter, gs.textWhite, gs.bold, gs.fontDefault]}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  colorText: {
    color: "#0170b2",
    fontSize: 16,
  },
  inputContainer: {
    marginVertical: 12,
    marginHorizontal: 20,
    height: 100,
    padding: 12,
    backgroundColor: "#feffff",
    borderRadius: 8,
    marginVertical: 20,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
    marginVertical: 12,
  },
  input: {
    marginLeft: 12,
  },
  inputContainerCoupon: {
    marginVertical: 12,
    marginHorizontal: 20,
    height: 65,
    padding: 12,
    backgroundColor: "#feffff",
    borderRadius: 8,
    marginVertical: 20,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "center",
    width: "90%",
  },
  couponContainer: {
    width: "100%",
  },
  validateCouponBtn: {
    backgroundColor: "#f4f5f7",
    padding: 12,
    borderRadius: 8,
  },
  btnContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 120,
    backgroundColor: "#f4f5f7",
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
  mt12: {
    marginTop: 12,
  },
  checkboxChecked: {
    width: "90%",
    backgroundColor: "#0170b2",
    flexDirection: "row",
    height: 60,
    marginHorizontal: 20,
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
  ml12: {
    marginLeft: 12,
  },
  checkboxUnchecked: {
    width: "90%",
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    height: 60,
    marginHorizontal: 20,
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
  timeContainer: {
    marginVertical: 12,
    marginHorizontal: 20,
    height: 140,
    padding: 12,
    backgroundColor: "#feffff",
    borderRadius: 8,
    marginVertical: 20,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "center",
    width: "90%",
  },
  timeBtn: {
    backgroundColor: "#cce2f0",
    padding: 12,
    borderRadius: 20,
  },
  timeBtnText: {
    color: "#0170b2",
    fontWeight: "600",
  },
});
