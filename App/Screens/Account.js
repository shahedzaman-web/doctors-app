import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView } from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  Ionicons,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";

import TopBar from "../Components/TopBar";
import gs from "../GlobalStyle/GlobalStyle";

const Account = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <View style={gs.container}>
          <TopBar title="Account" />
          <Text style={[gs.bold, gs.textCenter, gs.textWhite, styles.mt12]}>
            Hess Baker
          </Text>
          <Text style={[gs.textCenter, gs.textWhite]}>
            abc@gmail.com
          </Text>
        </View>
        <Image
        source={require("../assets/photos/team1.jpg")}
        style={styles.photo}
      />
      </View>
      
      <ScrollView>
      <View style={{    marginTop: "15%",}}> 
      <View style={styles.card}>
        <TouchableOpacity
          style={[gs.row, gs.alignCenter, gs.spaceBetween, styles.my8]}
        >
          <View style={[gs.row, gs.alignCenter]}>
            <Feather
            style={{ borderRightWidth: 1, borderRightColor: "#edf0f2",paddingRight:10 }}
              name="user"
              size={24}
              color="#0170b2"
            />
            <View style={{ borderLeftWidth: 1, borderLeftColor: "black" }} />
            <Text style={[gs.bold, styles.pl8]}>Profile</Text>
          </View>
          <Entypo name="chevron-small-right" size={24} color="#8c9da7" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[gs.row, gs.alignCenter, gs.spaceBetween, styles.my8]}
        >
          <View style={[gs.row, gs.alignCenter]}>
            <MaterialCommunityIcons
            style={{ borderRightWidth: 1, borderRightColor: "#edf0f2",paddingRight:10 }}
              name="clipboard-text"
              size={24}
              color="#0170b2"
            />

            <Text style={[gs.bold, styles.pl8]}>My Bookings</Text>
          </View>
          <Entypo name="chevron-small-right" size={24} color="#8c9da7" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[gs.row, gs.alignCenter, gs.spaceBetween, styles.my8]}
        >
          <View style={[gs.row, gs.alignCenter]}>
            <Feather  style={{ borderRightWidth: 1, borderRightColor: "#edf0f2",paddingRight:10 }} name="bell" size={24} color="#0170b2" />
            <View style={{ borderLeftWidth: 1, borderLeftColor: "black" }} />
            <Text style={[gs.bold, styles.pl8]}>Notifications</Text>
          </View>
          <Entypo name="chevron-small-right" size={24} color="#8c9da7" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[gs.row, gs.alignCenter, gs.spaceBetween, styles.my8]}
        >
          <View style={[gs.row, gs.alignCenter]}>
            <MaterialIcons  style={{ borderRightWidth: 1, borderRightColor: "#edf0f2",paddingRight:10 }} name="message" size={24} color="#0170b2" />
            <View style={{ borderLeftWidth: 1, borderLeftColor: "black" }} />
            <Text style={[gs.bold, styles.pl8]}>Messages</Text>
          </View>
          <Entypo name="chevron-small-right" size={24} color="#8c9da7" />
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <TouchableOpacity style={[gs.row,gs.alignCenter,gs.spaceBetween,styles.my8]}>
        <View style={[gs.row,gs.alignCenter]}> 
       <Ionicons  style={{ borderRightWidth: 1, borderRightColor: "#edf0f2",paddingRight:10 }} name="settings-outline" size={24} color="#0170b2" /> 
        <View style={{borderLeftWidth:1,borderLeftColor: 'black'}}/>
        <Text style={[gs.bold, styles.pl8]}>Settings</Text>
        </View>
        <Entypo name="chevron-small-right" size={24} color="#8c9da7" />
        </TouchableOpacity>
        <TouchableOpacity style={[gs.row,gs.alignCenter,gs.spaceBetween,styles.my8]}>
        <View style={[gs.row,gs.alignCenter]}> 
        <Ionicons  style={{ borderRightWidth: 1, borderRightColor: "#edf0f2",paddingRight:10 }} name="language"  size={24} color="#0170b2" /> 
 
        <Text style={[gs.bold, styles.pl8]}>Languages</Text>
        </View>
        <Entypo name="chevron-small-right" size={24} color="#8c9da7" />
        </TouchableOpacity>
        <TouchableOpacity style={[gs.row,gs.alignCenter,gs.spaceBetween,styles.my8]}>
        <View style={[gs.row,gs.alignCenter]}> 
        <MaterialIcons  style={{ borderRightWidth: 1, borderRightColor: "#edf0f2",paddingRight:10 }} name="brightness-7" size={24} color="#0170b2" /> 
        <View style={{borderLeftWidth:1,borderLeftColor: 'black'}}/>
        <Text style={[gs.bold, styles.pl8]}>Theme Mode</Text>
        </View>
        <Entypo name="chevron-small-right" size={24} color="#8c9da7" />
        </TouchableOpacity>
     
        </View>
        <View style={styles.card}>
        <TouchableOpacity style={[gs.row,gs.alignCenter,gs.spaceBetween,styles.my8]}>
        <View style={[gs.row,gs.alignCenter]}> 
        <Ionicons  style={{ borderRightWidth: 1, borderRightColor: "#edf0f2",paddingRight:10 }} name="md-help-buoy-sharp"  size={24} color="#0170b2" /> 
        <View style={{borderLeftWidth:1,borderLeftColor: 'black'}}/>
        <Text style={[gs.bold, styles.pl8]}>Help & FQA</Text>
        </View>
        <Entypo name="chevron-small-right" size={24} color="#8c9da7" />
        </TouchableOpacity>
        <TouchableOpacity style={[gs.row,gs.alignCenter,gs.spaceBetween,styles.my8]}>
        <View style={[gs.row,gs.alignCenter]}> 
        <MaterialIcons  style={{ borderRightWidth: 1, borderRightColor: "#edf0f2",paddingRight:10 }} name="logout"   size={24} color="#0170b2" /> 
 
        <Text style={[gs.bold, styles.pl8]}>Logout</Text>
        </View>
        <Entypo name="chevron-small-right" size={24} color="#8c9da7" />
        </TouchableOpacity>
 
     
        </View>
        </View>
        </ScrollView>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    backgroundColor: "#0170b2",
    width: "100%",
    height: "25%",
    borderBottomStartRadius: 12,
    borderBottomEndRadius: 12,
    position: "relative",
  },
  mt12: {
    marginTop: 12,
  },
  my12: {
    marginVertical: 12,
  },
  photo: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    position: "absolute",
    left: "36%",
    top: "80%",
    borderRadius: 25,
    borderWidth: 5,
    borderColor: "#fff",
  },
  card: {

    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 5,
    padding: 12,
  },
  border: {
    borderLeftWidth: 20,
    borderLeftColor: "#edf0f2",
  },
  pl8: {
    paddingLeft: 8,
  },
  my8: {
    marginVertical: 10,
  },
});
// #0170b2
// #edf0f2
