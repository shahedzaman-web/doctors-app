import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import {
  AntDesign,
  Foundation,
  FontAwesome5,
  MaterialCommunityIcons,
  Fontisto,
  Entypo,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import gs from "../GlobalStyle/GlobalStyle";
import { useState } from "react";
import SpecialitiesCardList from "../Components/SpecialitiesCardList";
import SpecialitiesCardGrid from "../Components/SpecialitiesCardGrid";

const specialitiesData = [
  {
    id: 1,
    name: "Allergists",
    img: require("./../assets/icon/image.png"),
    color: "#68d4eb",
    color2: "#e1f0f3",
    colorImg: require("./../assets/specialities/allergist.png"),
    doctors: ["Dr Baker Smith", "Dr Lynn Patts"],
  },
  {
    id: 2,
    name: "Oncologists",
    img: require("./../assets/icon/image-6.png"),
    color: "#f2a6a6",
    color2: "#efe5e6",
    colorImg: require("./../assets/specialities/oncologist.png"),
    doctors: ["Dr Lynn Patts"],
  },
  {
    id: 3,
    name: "Ophthalmologist",
    img: require("./../assets/icon/image-7.png"),
    color: "#ead4af",
    color2: "#f1eee9",
    colorImg: require("./../assets/specialities/Ophthalmologist.png"),
    doctors: ["Dr Aikenhead Mistry", "Dr Bird Ramsey"],
  },
  {
    id: 4,
    name: "Neurologists",
    img: require("./../assets/icon/image-5.png"),
    color: "#f7a4ca",
    color2: "#f1eee9",
    colorImg: require("./../assets/specialities/neurosurgeon.png"),
    doctors: ["Dr Bird Ramsey"],
  },
  {
    id: 5,
    name: "Hematologists",
    img: require("./../assets/icon/image-4.png"),
    color: "#ad8df1",
    color2: "#e7e3f4",
    colorImg: require("./../assets/specialities/Hematologists.png"),
    doctors: ["Dr Pullen Fillmore"],
  },
  {
    id: 6,
    name: "Dental Surgeons",
    img: require("./../assets/icon/image-3.png"),
    color: "#ead4af",
    color2: "#f1e9e6",
    colorImg: require("./../assets/specialities/Dental.png"),
    doctors: ["Dr Lillian Burgess"],
  },
  {
    id: 7,
    name: "Cardiovascular",
    img: require("./../assets/icon/image-2.png"),
    color: "#a1ea9b",
    color2: "#e4f2e5",
    colorImg: require("./../assets/specialities/Cardiovascular.png"),
    doctors: ["Dr Bird Ramsey"],
  },
  {
    id: 8,
    name: "Otolarynglogist",
    img: require("./../assets/icon/image-8.png"),
    color: "#b0d2f5",
    color2: "#e6edf5",
    colorImg: require("./../assets/specialities/Otolarynglogist.png"),
    doctors: ["Dr Bird Ramsey"],
  },
  {
    id: 9,
    name: "Veterinarian",
    img: require("./../assets/icon/image-9.png"),
    color: "#949a9a",
    color2: "#e1e4e5",
    colorImg: require("./../assets/specialities/veterinarian.png"),
    doctors: ["Dr Aikenhead Mistry", "Dr Bird Ramsey"],
  },
];

const Specialities = () => {
const [cardViewOption, setCardViewOption] = useState(true);
  return (
    <View style={[gs.container, styles.m12]}>
      <View style={[gs.row, gs.spaceBetween, styles.my12]}>
        <AntDesign name="left" size={24} color="black" />
        <Text style={[gs.bold, styles.colorText]}>Specialities</Text>
        <Text></Text>
      </View>
      <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      >
        <View style={[gs.row, gs.spaceBetween, styles.my12]}>
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
        <View style={[gs.row, styles.my12, gs.spaceBetween]}>
          <Text style={[gs.bold]}>Specialities</Text>
          <View style={[gs.row, gs.alignCenter]}>
           <TouchableOpacity onPress={() =>setCardViewOption(true) }>
           <Foundation
           style={styles.mx12}
           name="list-thumbnails"
           size={24}
           color={cardViewOption?  "#0170b2": "gray"}
         />
           </TouchableOpacity>
           <TouchableOpacity
           onPress={() =>setCardViewOption(false) }
           >
           <Fontisto name="nav-icon-grid" size={16}  color={!cardViewOption ?  "#0170b2": "gray"} />
           </TouchableOpacity>
          </View>
        </View>
        <View style={{ width: "100%" }}>
      {  cardViewOption ? 
        <FlatList
        key={'_'}
        data={specialitiesData}
        nestedScrollEnabled
        keyExtractor={(item,index) => "_" +index.toString()+ item.id.toString()}
        renderItem={({ item }) => <SpecialitiesCardList  item={item}/>}
      /> 
        : <FlatList
        key={'#'}
            data={specialitiesData}
            nestedScrollEnabled
            numColumns={2}
            keyExtractor={(item,index) => "#" +index.toString()+ item.id.toString()}
            renderItem={({ item }) => <SpecialitiesCardGrid  item={item}/>}
          />
        }
        </View>
      </ScrollView>
    </View>
  );
};

export default Specialities;

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
  colorText: {
    color: "#0170b2",
  },
  m12: {
    margin: 12,
  },
  boxContainer: {
    width: "100%",
    marginVertical: 12,
    borderRadius: 5,
  },
  specialitiesImg: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    paddingVertical: 10,
    marginTop: 10,
    marginHorizontal: 12,
  },
  linearGradient: {
    borderRadius: 5,
    width: "100%",
  },
  border: {
    borderBottomColor: "#ededed",
    borderBottomWidth: 1,
  },
  ml12: {
    marginLeft: 12,
    marginVertical: 6,
    fontWeight: "400",
  },
});
