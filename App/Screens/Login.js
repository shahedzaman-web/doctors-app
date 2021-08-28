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
import { Ionicons, Entypo, EvilIcons, Feather } from "@expo/vector-icons";

const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <View style={gs.container}>
    <TouchableOpacity onPress={() =>navigation.goBack()}>
    <Ionicons name="chevron-back" size={28} color="#0170b2" />
    </TouchableOpacity>
    
    
      <ScrollView>
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
      Login
    </Text>
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
    <View style={styles.inputContainer}>
      <Text style={gs.bold}>Password</Text>
      <View style={styles.border} />
      <View style={[gs.row, gs.alignCenter, gs.spaceBetween]}>
        <View style={gs.row}>
          <EvilIcons name="lock" size={30} color="#8c9da7" />
          <TextInput
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="password"
          />
        </View>
        <Feather name="eye" size={24} color="#8c9da7" />
      </View>
    </View>
    <View style={styles.inputContainer}>
      <Text style={gs.bold}>Confirm Password</Text>
      <View style={styles.border} />
      <View style={[gs.row, gs.alignCenter, gs.spaceBetween]}>
        <View style={gs.row}>
          <EvilIcons name="lock" size={30} color="#8c9da7" />
          <TextInput
            style={styles.input}
            secureTextEntry
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            placeholder="confirm password"
          />
        </View>
        <Feather name="eye" size={24} color="#8c9da7" />
      </View>
    </View>
      </ScrollView>
      <Text style={[gs.textCenter]}>or continue using</Text>
      <View style={styles.logoBox}>
        <TouchableOpacity style={styles.logoContainer}>
          <TouchableOpacity style={[gs.row, gs.alignCenter]}>
            <Image
              style={{ width: 24, height: 24, marginHorizontal: 10 }}
              source={require("../assets/img/google.png")}
            />
            <Text>Google</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <View style={[gs.row, gs.alignCenter]}>
            <Image
              style={{ width: 24, height: 24, marginHorizontal: 10 }}
              source={require("../assets/img/facebook.png")}
            />
            <Text>Facebook</Text>
          </View>
        </View>
      </View>

 

      <View style={gs.center}>
        <TouchableOpacity
        onPress={() =>navigation.push("Home")}
        style={[styles.btn, gs.center]}>
          <Text style={gs.textWhite}>Log in</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.whiteBtn, gs.center]}
      onPress={() =>navigation.navigate("Register")}
      >
        <Text style={styles.btnText}>You don't have an account?</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={() =>navigation.navigate("ForgotPassword")}
      style={[styles.whiteBtn, gs.center]}>
        <Text style={styles.btnText}>Forget your password?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

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
  },
});

//#0170b2

//<Ionicons name="chevron-back" size={24} color="black" />
//<Entypo name="email" size={24} color="black" />
//<EvilIcons name="lock" size={24} color="black" />
//
