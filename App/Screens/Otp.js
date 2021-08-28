import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import gs from "../GlobalStyle/GlobalStyle";
import { Ionicons } from "@expo/vector-icons";

const Otp = ({navigation}) => {
  const [otp, setOtp] = useState("");

  return (
    <View style={gs.container}>
    <TouchableOpacity onPress={() =>navigation.goBack()}>
    <Ionicons name="chevron-back" size={28} color="#0170b2" />
    </TouchableOpacity>
      <View style={gs.center}>
        <Image source={require("../assets/img/logo.png")} style={styles.logo} />
      </View>
      <Text
        style={[
          styles.colorText,
          gs.textCenter,
          gs.fontDefault,
          gs.bold,
          styles.my20,
        ]}
      >
        Phone Verification
      </Text>
      <View style={styles.textContainer}>
        <Text style={gs.fontS}>
          We send the OTP code to your phone number, please check it and enter
          bellow.
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={gs.bold}>OTP Code</Text>
        <View style={styles.border} />
        <View style={[gs.row, gs.alignCenter]}>
          <TextInput
            style={styles.input}
            value={otp}
            onChangeText={(text) => setOtp(text)}
            placeholder="-----------"
          />
        </View>
      </View>
      <View style={gs.center}>
        <TouchableOpacity 
        onPress={() =>navigation.navigate('ProfileFilling')}
        style={[styles.btn, gs.center]}>
          <Text style={gs.textWhite}>Verify</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity 
      onPress={() =>navigation.navigate('Register')}
      style={[styles.whiteBtn, gs.center]}>
        <Text style={styles.btnText}>You don't have an account?</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() =>navigation.navigate('Login')}
      style={[styles.whiteBtn, gs.center]}>
        <Text style={styles.btnText}>You already have an account?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  colorText: {
    color: "#0170b2",
  },
  my20: {
    marginVertical: 20,
  },
  inputContainer: {
    marginVertical: 12,
    marginHorizontal: 20,
    marginBottom:40,
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
  btn: {
    width: "90%",
    height: 50,
    borderRadius: 8,
    marginVertical: 20,
    backgroundColor: "#0170b2",
    shadowColor: "#0170b2",
    shadowOpacity: 0.5,
    shadowRadius: 16,
    shadowOffset: { width: 2, height: 2 },
    marginBottom: 40,
  },
  btnText: {
    color: "#0170b2",
  },
  whiteBtn: {
    marginVertical: 12,
  },
  textContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
    marginBottom: 60,
  },
});

//#0170b2

//<Ionicons name="chevron-back" size={24} color="black" />
//<Entypo name="email" size={24} color="black" />
//<EvilIcons name="lock" size={24} color="black" />
//
