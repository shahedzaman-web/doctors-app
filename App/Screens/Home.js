import React from 'react'
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native'
import { Entypo,Feather,AntDesign,FontAwesome,FontAwesome5,MaterialCommunityIcons } from '@expo/vector-icons';

import gs from '../GlobalStyle/GlobalStyle';
import TopBar from '../Components/TopBar';

const Home = () => {
    return (
        <View style={gs.container}>
            <TopBar title='Doctors Appointment'/>
       <View style={styles.mx20}>
            
       <View style={[gs.row,gs.spaceBetween,styles.my12]}>
       <View style={[gs.row,styles.searchContainer]}>
       <FontAwesome5 style={styles.mx12} name="search" size={24} color="#0170b2" />
       <TextInput placeholder="Search for doctors.." style={styles.search}/>
       </View>
       <TouchableOpacity style={styles.filterBtn}>
       <MaterialCommunityIcons name="filter-variant" size={24} color="#0170b2" />
       </TouchableOpacity>
       </View>
<TouchableOpacity style={gs.center}>
<View style={[gs.row,gs.spaceBetween,gs.alignCenter,styles.boxContainer]}>
<View style={gs.row}>
<Image source={require('./../assets/img/ambulance.png')}  style={styles.icon}/>
<View style={{padding: 10}}>
<Text style={[gs.bold,styles.mb8]}>Emergency</Text>
<Text>Emergency call?</Text>
</View>
</View>
 <AntDesign name="right" size={24} color="black" />
 </View>
</TouchableOpacity>
<View style={[styles.my12,gs.row,gs.spaceBetween]}>
<Text style={[gs.bold,gs.fontDefault]}>Specialities</Text>
<TouchableOpacity style={styles.view}>
<Text style={styles.colorText}>View All</Text>
</TouchableOpacity>
</View>
       </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    mx20:{
        marginHorizontal:20
    },searchContainer:{
        borderRadius:5,
        borderWidth:1,
        width: '85%',
        padding:10,
        borderColor:'#e7ebee',
    },mx12:{
        marginHorizontal:12
    },my12:{
        marginVertical:12
    },filterBtn:{
        borderRadius:5,
        width: '10%',
        backgroundColor:'#e2edf3',
        justifyContent:'center',
        alignItems:'center',
    },icon:{
        width:60,
        height:60,
    },boxContainer:{

        marginVertical:12,
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
        width: '100%',
        height:80,
        backgroundColor:'#fff',
        padding:10,
        borderRadius:15,
    },mb8:{
        marginBottom:8
    },colorText:{
        color:'#0170b2'
    },view:{
        borderRadius:20,
        backgroundColor:'#e2edf3',
        paddingHorizontal:18,
        paddingVertical:10,
    }
})
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
