import React, { useState } from "react";
import {

  StyleSheet,
  Text,
  View,
  Image,

  TouchableOpacity,
} from "react-native";
import gs from "../GlobalStyle/GlobalStyle";
import {
  Ionicons,FontAwesome5

} from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";


const ProfileFilling = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString("en-us",{month: "short",day: "numeric", year: "numeric"}));
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (value) => {
    setDate(value.toLocaleDateString("en-us",{month: "short",day: "numeric", year: "numeric"}))

    hideDatePicker();
  };
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
        Profile Filling
      </Text>
      <View style={styles.inputContainerGender}>
        <Text style={gs.bold}>Gender</Text>
        <View style={styles.border} />
        <View style={[gs.row, gs.alignCenter,gs.spaceAround]}>
        <TouchableOpacity style={styles.genderBtn}>
        <Image source={require('./../assets/img/women.png')} style={styles.imgGender}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.genderBtn}>
        <Image source={require('./../assets/img/man.png')} style={styles.imgGender}/>
        </TouchableOpacity>
        
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={gs.bold}>Date Of Barth</Text>
        <View style={styles.border} />
        <View style={[gs.row, gs.alignCenter,gs.spaceBetween]}>
        <Text>{date}</Text>
        <TouchableOpacity style={styles.calenderBtn} onPress={()=>setDatePickerVisibility(prevState=>!prevState)}>
        <FontAwesome5 name="calendar-alt" size={24} color="white" />
        <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
        </TouchableOpacity>
        </View>
      </View>

      <View style={gs.center}>
        <TouchableOpacity
        onPress={() =>navigation.push("Home")}
        style={[styles.btn, gs.center]}>
          <Text style={gs.textWhite}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={gs.center}>
      <TouchableOpacity 
      onPress={() =>navigation.push("Home")}
      style={[styles.whiteBtn, gs.center]}>
        <Text style={styles.btnBlack}>Ship To Home</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default ProfileFilling;

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
  },  inputContainerGender: {
    marginVertical: 12,
    marginHorizontal: 20,
    height: 160,
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
    elevation: 5,
  },
  btnText: {
    color: "#0170b2",
  },btnBlack:{
    color: "black",
  },
  whiteBtn: {
    backgroundColor: "#feffff",
    width: "90%",
    height: 50,
    borderRadius: 8,
    marginVertical: 20,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
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
  },imgGender:{
    width: 80,
    height: 80,
  },genderBtn:{
    width: 90,
    height: 90,
    borderRadius: 8,
    backgroundColor: "#feffff",
    borderRadius: 8,
    padding: 4,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },calenderBtn:{
    width: 80,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#cce2f0',
    justifyContent: "center",
    alignItems: "center",
  }
});
//#cce2f0
