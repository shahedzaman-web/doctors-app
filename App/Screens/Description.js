import React from 'react'
import { StyleSheet, Text, View,ScrollView,Image, FlatList,SafeAreaView, StatusBar, } from 'react-native'
import {
    FontAwesome,AntDesign
  } from "@expo/vector-icons";
import gs from '../GlobalStyle/GlobalStyle'


const descriptionData ={
    name: "Universal Body Clinics",
    des: "lorem sdfsdfsdfttert er rfrnkejerjfbjbj edewjnrfjn jwfweknf fwebfjbewjf   refreref efergrefdwe dwefeghrth fwfwe lorem sdfsdfsdfttert er rfrnkejerjfbjbj edewjnrfjn jwfweknf fwebfjbewjf   refreref efergrefdwe dwefeghrth fwfwe lorem sdfsdfsdfttert er rfrnkejerjfbjbj edewjnrfjn jwfweknf fwebfjbewjf   refreref efergrefdwe dwefeghrth fwfwe",
    img: require("./../assets/photos/clinics-MyHealth.jpg"),
    status: "Closed",
    doctors:["Dr Baker Smith","Dr Aikenhead Mistry","Dr Lynn Potts"],
    reviews: [
        {
        name:"Biance Walker",
        title: "lorem dolor sit amet",
        details: "lorem dolor sit amet, consect it amet, consect it amet, consec tit amet, consect it amet, consect it amet, consect",
        img: require("./../assets/photos/smiling-businessman-banker-sitting-his-workplace-1068x600.jpg")
    }, {
        name:"Giles Walker",
        title: "lorem dolor sit amet",
        details: "lorem dolor sit amet, consect it amet, consect it amet, consec tit amet, consect it amet, consect it amet, consect",
        img: require("./../assets/photos/smiling-businessman-banker-sitting-his-workplace-1068x600.jpg")
    }, {
        name:"Diane Walker",
        title: "lorem dolor sit amet",
        details: "lorem dolor sit amet, consect it amet, consect it amet, consec tit amet, consect it amet, consect it amet, consect",
        img: require("./../assets/photos/smiling-businessman-banker-sitting-his-workplace-1068x600.jpg")
    }
]
} 


const Description = () => {
    return (
      <ScrollView>
<View style={{position: "relative"}}>
<Image source={require('../assets/photos/clinics1.jpg')} style={styles.image}/>
<View style={[gs.container, gs.row,gs.spaceBetween,styles.topBar]}>
<AntDesign name="left" size={24} color="black" />
<AntDesign name="heart" size={24} color="#ed4242" />
</View>
<View style={styles.InfoContainer}> 
<View style={[gs.row,gs.spaceBetween]}>
<Text style={[gs.bold,gs.fontDefault]}>Dr Baker Smith</Text>
        <View style={descriptionData.status=== "Open"  ? styles.status : styles.statusClosed}>
        <Text style={ gs.textWhite}>{descriptionData.status}</Text>
          </View>
</View> 
        
        <View style={[gs.row,styles.star]} >
        <FontAwesome name="star" size={16} color="#ffb24f" />
        <FontAwesome name="star" size={16} color="#ffb24f" />
        <FontAwesome name="star" size={16} color="#ffb24f" />
        <FontAwesome name="star-half-empty" size={16} color="#ffb24f" />
        <FontAwesome name="star-o" size={16} color="#ffb24f" />
        <Text style={styles.review}>Reviews (236)</Text>
       
        </View>
</View>
</View>
<View style={styles.docContainer}>
<FlatList
keyExtractor={( item) => item}
horizontal
showsHorizontalScrollIndicator={false}
data={descriptionData.doctors}
renderItem={({item})=>(  
    <View style={styles.docNameContainer}>
    <Text style={styles.docName}>{item}</Text>
    </View>
)}
/>
        
</View>
<View style={styles.desContainer}>
    <Text style={[gs.bold,gs.fontDefault]}>Description</Text>
    <View style={styles.border} />
    <Text>{descriptionData.des}</Text>

</View>
<View style={styles.desContainer}>
    <Text style={[gs.bold,gs.fontDefault]}>Reviews & Ratings</Text>
    <View style={styles.border} />
    <View style={[gs.center,styles.my12]}>
    <Text style={gs.fontL}>3.5</Text>
    <View style={[gs.row,styles.star]} >
        <FontAwesome name="star" size={24} color="#ffb24f" />
        <FontAwesome name="star" size={24} color="#ffb24f" />
        <FontAwesome name="star" size={24} color="#ffb24f" />
        <FontAwesome name="star-half-empty" size={24} color="#ffb24f" />
        <FontAwesome name="star-o" size={24} color="#ffb24f" />
       
       
        </View>
        <Text style={styles.review}>Reviews (236)</Text>
        </View>
        <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight || 0,}}>
        <FlatList
        data={descriptionData.reviews}
        keyExtractor={( item) => item.name}
        nestedScrollEnabled
        renderItem={({item})=>(
            <View>
            <View style={styles.border} />
            <View style={[gs.row,gs.alignCenter]}>
            <View style={}>
            <Image source={item.img} style={styles.reviewImg} />
            <View>
            <Text>{item.name}</Text>
            <Text></Text>
            </View>
            </View>
           
            </View>
            </View>
        )}

        />
        </SafeAreaView>
    </View>
      
      </ScrollView>
    )
}

export default Description

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 250,
        resizeMode: 'cover',
    },InfoContainer:{
        position: "absolute",
        bottom: -30,
        backgroundColor: "#fff",
        width: "94%",
        height: 120,
        marginHorizontal: 10,
        borderRadius: 10,
        padding: 10,
        paddingVertical: 20,
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,

    },star:{
        marginVertical:10,
        marginRight: 10,
    },review:{  
        color: '#969696',
        marginLeft:10
    },status:{

        backgroundColor:"#53c73c",
        paddingVertical:4,
        paddingHorizontal:8,
        borderRadius:10,
      },statusClosed:{

        backgroundColor:"gray",
        paddingVertical:4,
        paddingHorizontal:8,
        borderRadius:10,
      },topBar:{
          position:"absolute",
          width: "94%",
          marginHorizontal:12
      },docContainer:{
          marginTop:50,
          marginHorizontal:10,

      },docNameContainer:{
          marginHorizontal:4,
          padding:4,
          paddingHorizontal:8,
          backgroundColor:"#d4e3ff",
          borderRadius:10,
          borderColor: "#bad3ff",
          borderWidth: 1
      },desContainer:{
          marginTop:20,
          shadowOffset: { width: 0.5, height: 0.5 },
          shadowOpacity: 0.3,
          shadowRadius: 10,
          elevation: 5,
          backgroundColor: "#fff",
          marginHorizontal:16,
          padding:10,
          paddingVertical:30,
          borderRadius:10,
      },border:{
          borderBottomColor: "#e6e6e6",
          borderBottomWidth: 1,
          marginVertical:10
      },my12:{
          marginVertical:12
      },reviewImg:{
          width:60,
          height:60,
          borderRadius:10,
      }
})
