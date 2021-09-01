import React from 'react'
import { StyleSheet, Text, View,FlatList,Image } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import gs from '../GlobalStyle/GlobalStyle';



const SpecialitiesCardGrid = ({item}) => {

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
            justifyContent: "center",
              width: "100%",
            }}
          >
           
              <Image
                style={styles.specialitiesImg}
                source={item.colorImg}
              />
            
            </View>
           
        

        </LinearGradient>
        <Text style={[gs.bold,gs.textCenter,styles.my8]}>{item.name}</Text>
        <View style={styles.border} />
        <View >
        <FlatList
        key={'#'}
          keyExtractor={(index,item) =>  "#"+ item+ index.toString()}
          data={item.doctors}
          nestedScrollEnabled
          renderItem={({ item }) => (
            <View style={styles.docContainer}>
              <Text style={[styles.m10,gs.fontS,styles.p4]}>{item}</Text>
            </View>
          )}
        />
      </View>
      </View>
    )
}

export default SpecialitiesCardGrid

const styles = StyleSheet.create({
    boxContainer: {
        width: "45%",
        marginVertical: 12,
        borderRadius: 5,
        marginLeft:12,
        backgroundColor: "#fff",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0.5, height: 0.5},
        shadowRadius: 5,
        elevation: 5
      },
      specialitiesImg: {
        width: 100,
        height: 100,
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
        width:"80%",
        alignSelf:"center"
      },
      m10: {
        marginHorizontal: 6,
        marginVertical: 6,
        fontWeight: "400",
        color: "#8c9da7"
      },my8:{
        marginVertical: 8
      },docContainer:{
          borderWidth:1,
          borderRadius: 20,
        width:"80%",
        marginLeft:8,
        marginVertical: 6,
        borderColor: "#c0cace"
      }
})
