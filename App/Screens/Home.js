import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView
} from "react-native";
import {
  Entypo,
  Feather,
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import gs from "../GlobalStyle/GlobalStyle";
import TopBar from "../Components/TopBar";

const specialitiesData = [
  {
    id: 1,
    name: "Allergists",
    img: require("./../assets/icon/image.png"),
  },
  {
    id: 2,
    name: "Oncologists",
    img: require("./../assets/icon/image-6.png"),
  },
  {
    id: 3,
    name: "Ophthalmologist",
    img: require("./../assets/icon/image-7.png"),
  },
  {
    id: 4,
    name: "Neurologists",
    img: require("./../assets/icon/image-5.png"),
  },
  {
    id: 5,
    name: "Hematologists",
    img: require("./../assets/icon/image-4.png"),
  },
  {
    id: 6,
    name: "Dental Surgeons",
    img: require("./../assets/icon/image-3.png"),
  },
  {
    id: 7,
    name: "Cardiovascular",
    img: require("./../assets/icon/image-2.png"),
  },
  {
    id: 8,
    name: "Otolaryngologist",
    img: require("./../assets/icon/image-8.png"),
  },
  {
    id: 9,
    name: "Veterinarian",
    img: require("./../assets/icon/image-9.png"),
  },
];
const doctorsData=[
  {
    id: 1,
    name: "Dr Baker Smith",
    specialities: 'Allergists',
    img: require("./../assets/photos/male-doctor.jpg"),
    experience: 1
}, {
  id: 2,
  name: "Dr Lynn Potts",
  specialities: 'Oncologists',
  img: require("./../assets/photos/female.jpg"),
  experience:12
}, {
  id:3 ,
  name: "Dr Aikenhead Mistry",
  specialities: 'Ophthalmologist',
  img: require("./../assets/photos/Ophthalmologist-doc.jpg"),
  experience:5,
  
}
]
const clinicsData= [
{
  id: 1,
  name: "Public Health Clinics",
  des: "lorem sdfsdfsdfttert er rfrnke. jerjfbjbj edewjnrfjn jwfweknf fwebfjbewjf   refreref efergrefdwe dwefeghrth fwfwe lorem sdfsdfsdfttert er rfrnkejerjfbjbj edewjnrfjn jwfweknf fwebfjbewjf   refreref efergrefdwe dwefeghrth fwfwe ",
  img: require("./../assets/photos/clinics1.jpg"),
  doctors:["Dr Baker Smith","Dr Aikenhead Mistry"],
  status: 'Open'

},{
  id: 2,
  name: "Flu Shot Clinic",
  des: "lorem sdfsdfsdfttert er rfrnkej erjfbjbj edewjnrfjn jwfweknf fwebfjbewjf   refreref efergrefdwe dwefeghrth fwfwe lorem sdfsdfsdfttert er rfrnkejerjfbjbj edewjnrfjn jwfweknf fwebfjbewjf   refreref efergrefdwe dwefeghrth fwfwe ",
  img: require("./../assets/photos/european-medical-general-center-schepkina.jpg"),
  doctors:["Dr Baker Smith","Dr Aikenhead Mistry"],
  status:"Open"
},{
  id: 3,
  name: "Universal Body Clinics",
  des: "lorem sdfsdfsdfttert er rfrnkejerjfbjbj edewjnrfjn jwfweknf fwebfjbewjf   refreref efergrefdwe dwefeghrth fwfwe lorem sdfsdfsdfttert er rfrnkejerjfbjbj edewjnrfjn jwfweknf fwebfjbewjf   refreref efergrefdwe dwefeghrth fwfwe lorem sdfsdfsdfttert er rfrnkejerjfbjbj edewjnrfjn jwfweknf fwebfjbewjf   refreref efergrefdwe dwefeghrth fwfwe",
  img: require("./../assets/photos/clinics-MyHealth.jpg"),
  doctors:["Dr Baker Smith","Dr Aikenhead Mistry","Dr Lynn Potts"],
  status: "Closed"
}

]

const Home = () => {
  return (
    <View style={gs.container}>
      <TopBar title="Doctors Appointment" />
      <ScrollView>
      <View >
        <View style={[gs.row, gs.spaceBetween, styles.my12,styles.mx12]}>
          <View style={[gs.row, styles.searchContainer]}>
            <FontAwesome5
              style={styles.mx12}
              name="search"
              size={24}
              color="#0170b2"
            />
            <TextInput
              placeholder="Search for doctors.."
              style={styles.search}
            />
          </View>
          <TouchableOpacity style={styles.filterBtn}>
            <MaterialCommunityIcons
              name="filter-variant"
              size={24}
              color="#0170b2"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={gs.center}>
          <View
            style={[
              gs.row,
              gs.spaceBetween,
              gs.alignCenter,
              styles.boxContainer,
              styles.mx12
            ]}
          >
            <View style={gs.row}>
              <Image
                source={require("./../assets/img/ambulance.png")}
                style={styles.icon}
              />
              <View style={{ padding: 10 }}>
                <Text style={[gs.bold, styles.mb8]}>Emergency</Text>
                <Text>Emergency call?</Text>
              </View>
            </View>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <View style={[styles.my12, gs.row, gs.spaceBetween,styles.mx12]}>
          <Text style={[gs.bold, gs.fontDefault]}>Specialities</Text>
          <TouchableOpacity style={styles.view}>
            <Text style={styles.colorText}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mx12}>
          <FlatList
            data={specialitiesData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={styles.specialityContainer}>
                  <Text style={styles.specialityText}>{item.name}</Text>
                  <Image source={item.img} style={styles.specialityImg} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View >
          <Text style={[gs.bold, gs.fontDefault, styles.my12,styles.mx12]}>
            Top Doctors
          </Text>
          <Text style={styles.mx12}>Press to see doctor details and book an appointment</Text>
          <View >
            <FlatList
              data={doctorsData}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={[styles.doctorContainer, styles.my12]}
                    onPress={() => {
                      console.log("Doctor Details");
                    }}
                  > 
                    <View style={[styles.doctorImgContainer,gs.row]}>
                      <Image
                        source={item.img}
                        style={styles.doctorImg}
                      />
                   
                    <View style={styles.doctorDetails}>
                      <Text style={[gs.bold,gs.fontNormal,styles.mb16]}>{item.name}</Text>
                      <Text style={styles.doctorSpeciality}>{item.specialities}</Text>
                      <View style={{marginTop:32,flexDirection: "row",justifyContent: "space-between"}}>
                      <Text style={styles.doctorExperience}>{item.experience} years</Text>
                      <View style={[gs.row,styles.ml20]} >
                      <FontAwesome name="star" size={16} color="#ffb24f" />
                      <FontAwesome name="star" size={16} color="#ffb24f" />
                      <FontAwesome name="star-half-empty" size={16} color="#ffb24f" />
                      <FontAwesome name="star-o" size={16} color="#ffb24f" />
                      <FontAwesome name="star-o" size={16} color="#ffb24f" />
                     
                      </View>
                      </View>
                    </View>
                    </View>
                  </TouchableOpacity>
                );  
              }}
            />
          </View>
        </View>

        <View >
        <Text style={[gs.bold, gs.fontDefault, styles.my12,styles.mx12]}>
          Clinics
        </Text>
        <Text style={styles.mx12}>Enter your address to show clinics nearby you </Text>
        <View >
          <FlatList
            data={clinicsData}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                style={styles.clinicsContainer}
                >
                <View style={{position: 'relative'}}>
                <View>
                <Image source={item.img} style={styles.clinicImg} />
                <View style={item.status=== "Open"  ? styles.status : styles.statusClosed}>
              <Text style={ gs.textWhite}>{item.status}</Text>
                </View>
                </View>
                <View style={styles.clinicDetails}>
                <Text style={styles.clinicsName}>{item.name}</Text>
                <Text  >
                {item.des.length < 35
                  ? `${item.des}`
                  : `${item.des.substring(0, 32)}`}
                </Text>
                <View style={[gs.row,styles.my12]} >
                <FontAwesome name="star" size={16} color="#ffb24f" />
                <FontAwesome name="star" size={16} color="#ffb24f" />
                <FontAwesome name="star-half-empty" size={16} color="#ffb24f" />
                <FontAwesome name="star-o" size={16} color="#ffb24f" />
                <FontAwesome name="star-o" size={16} color="#ffb24f" />
               
                </View>
                </View>
                </View>
                
                </TouchableOpacity>
              )
            }}
          />


      </View>
      </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mx20: {
    marginHorizontal: 20,
  },
  searchContainer: {
    borderRadius: 5,
    borderWidth: 1,
    width: "85%",
    padding: 10,
    borderColor: "#e7ebee",
  },
  mx12: {
    marginHorizontal: 12,
  },
  my12: {
    marginVertical: 12,
  },
  filterBtn: {
    borderRadius: 5,
    width: "10%",
    backgroundColor: "#e2edf3",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 60,
    height: 60,
  },
  boxContainer: {

    marginVertical: 12,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    width: "94%",
    height: 80,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
  },
  mb8: {
    marginBottom: 8,
  },
  colorText: {
    color: "#0170b2",
  },
  view: {
    borderRadius: 20,
    backgroundColor: "#e2edf3",
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  specialityImg: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginVertical: 10,
  },
  specialityContainer: {
    marginHorizontal: 12,
    marginVertical: 12,
    shadowOffset: { width: 0.5, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
  },
  specialityText: {
    textAlign: "center",
    color: "#576372",
    fontWeight: "bold",
  },doctorContainer:{
    marginHorizontal: 20,
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 15,

  },doctorImg:{
    width:160,
    height:130,
    resizeMode:"cover",
    borderRadius:12,
  },doctorDetails:{
    marginHorizontal:16,
    marginRight:30
  },mb16:{
    marginBottom:16
  },ml20:{
    marginLeft:20
  },doctorSpeciality:{
    fontSize:16,
  },clinicImg:{
    width:320,
    height:180,
    resizeMode:"cover",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },clinicsContainer:{
    
  marginTop:20,
  marginHorizontal:20,
  shadowOpacity: 0.3,
  shadowRadius: 6,
  elevation: 5,
  backgroundColor: "#fff",
  padding: 8,
  marginBottom:40,
  borderRadius: 15,
  },clinicsName:{
    fontSize:16,
    color: "#0170b2",
    marginVertical:12
  },clinicDetails:{
    marginLeft:12
  },status:{
    position:'absolute',
    bottom:10,
    left:12,
    backgroundColor:"#53c73c",
    paddingVertical:4,
    paddingHorizontal:8,
    borderRadius:10,
  },statusClosed:{
    position:'absolute',
    bottom:10,
    left:12,
    backgroundColor:"gray",
    paddingVertical:4,
    paddingHorizontal:8,
    borderRadius:10,
  }
});
//<Entypo name="list" size={24} color="black" />
//<Feather name="bell" size={24} color="black" />
//<AntDesign name="right" size={24} color="black" />
//<FontAwesome name="star" size={24} color="black" />
//<FontAwesome name="star-half-full" size={24} color="black" />
//
//
// "#0170b2"
// #e2edf3
// #e2edf3
//#868d95

//#576372 icon color
