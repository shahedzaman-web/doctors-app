import React,{ useState } from 'react'
import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity } from 'react-native'
import {

    Entypo,
  } from "@expo/vector-icons";
  import { LinearGradient } from "expo-linear-gradient";
import gs from '../GlobalStyle/GlobalStyle';



const SpecialitiesCardList = ({item}) => {
    const [showDocList, setShowDocList] = useState(false);
    return (
        <View style={styles.boxContainer}>
        <LinearGradient
          start={[0.0, 0.5]}
          end={[1.0, 0.5]}
          locations={[0.0, 1.0]}
          colors={[item.color, item.color2]}
          style={styles.linearGradient}
        >
          <View
            style={{
              flexDirection: "row",

              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <View style={[gs.row, gs.alignCenter]}>
              <Image
                style={styles.specialitiesImg}
                source={item.colorImg}
              />
              <Text style={gs.bold}>{item.name}</Text>
            </View>
            <View style={[gs.row, gs.alignCenter]}>
              <Text style={styles.mx12}>({item.doctors.length})</Text>

              <TouchableOpacity
              onPress={() =>setShowDocList(prevState=>(!prevState))}
              style={gs.mx12}>

         {   showDocList ?         <Entypo name="chevron-small-up" size={24} color="#0170b2" />
               : <Entypo
                  name="chevron-small-down"
                  size={24}
                  color="#6d6c6a"
                />}

              </TouchableOpacity>
            </View>
          </View>

    {showDocList &&    <View>
            <FlatList
              keyExtractor={(index) =>"_" +index.toString()+ index.toString()}
              data={item.doctors}

              nestedScrollEnabled
              renderItem={({ item }) => (
                <View style={{ marginVertical: 10 }}>
                  <View style={styles.border} />
                  <Text style={styles.ml12}>{item}</Text>
                </View>
              )}
            />
          </View>}
        </LinearGradient>
      </View>
    )
}

export default SpecialitiesCardList

const styles = StyleSheet.create({
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
})
