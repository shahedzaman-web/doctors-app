import React, { useState } from "react";
import {

  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import gs from "../GlobalStyle/GlobalStyle";
import { Ionicons, Entypo, EvilIcons, Feather } from "@expo/vector-icons";

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState("");

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
      Forgot Password
    </Text>

    <Text style={styles.textField}>Enter your email to send you a reset password link</Text>
    <View style={styles.inputContainer}>
      <Text style={gs.bold}>Email</Text>
      <View style={styles.border} />
      <View style={[gs.row, gs.alignCenter]}>
        <Entypo name="email" size={24} color="#8c9da7" />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="johndoe@gmail.com"
        />
      </View>
    </View>
      
    
     

 

      <View style={gs.center}>
        <TouchableOpacity
        onPress={() =>navigation.push("Home")}
        style={[styles.btn, gs.center,styles.my80]}>
          <Text style={gs.textWhite}>Send Reset Link</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.whiteBtn, gs.center]}
      onPress={() =>navigation.navigate("Home")}
      >
        <Text style={styles.btnText}>You remember your password?</Text>
      </TouchableOpacity>
   
    </View>
  );
};

export default ForgotPassword;

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
  },
  btnText: {
    color: "#0170b2",
  },
  whiteBtn: {
    marginVertical: 12,
  },
  logoContainer: {
    paddingVertical: 12,
    backgroundColor: "#feffff",
    borderRadius: 8,
    width: "45%",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  logoBox: {
    marginVertical: 12,
    marginHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },textField:{
      textAlign:"center",
      marginVertical: 50
  },my80:{
        marginVertical: 80
  }
});

//#0170b2

//<Ionicons name="chevron-back" size={24} color="black" />
//<Entypo name="email" size={24} color="black" />
//<EvilIcons name="lock" size={24} color="black" />
//
