import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { FontAwesome,FontAwesome5 } from '@expo/vector-icons';


import gs from '../GlobalStyle/GlobalStyle'

const BookingCard = ({img,name,status}) => {
    return (
        <View style={styles.container}>
        <View style={gs.row}>
        <View>
        <Image source={img} style={styles.image}/>
        {status==='Offline' ?
        (<View style={styles.statusViewOffline}>
            <Text style={styles.offlineText}>Offline</Text>
            </View>)
        :
        ((<View style={styles.statusViewAvailable}>
            <Text style={styles.availableText}>Available</Text>
            </View>))  }
    
        </View>
        <View style={styles.detailsContainer}>
      <View>
      <Text style={gs.bold}>Dr{name}</Text>
      <View style={styles.border} />
      <View style={styles.mt12}>
      <View style={[gs.row,gs.spaceBetween]}>
      <Text>Your Review</Text>
      <View style={gs.row} >
      <FontAwesome name="star" size={16} color="#ffb24f" />
      <FontAwesome name="star" size={16} color="#ffb24f" />
      <FontAwesome name="star-half-empty" size={16} color="#ffb24f" />
      <FontAwesome name="star-o" size={16} color="#ffb24f" />
      <FontAwesome name="star-o" size={16} color="#ffb24f" />
     
      </View>
      </View>
      <View style={[gs.row,gs.spaceBetween]}>
      <Text>Time</Text>
      <Text style={styles.time}>13:13 | 2020-11-05</Text>
      </View>
      <View style={[gs.row,gs.spaceBetween]}>
      <Text>Total Price</Text>
      <Text style={styles.price}>$<Text style={{fontSize:20}}>145.46</Text></Text>
      </View>
      </View>
      </View>
      <View style={styles.bottom}>
      <View style={styles.box}>
      <Text style={styles.boxText}>Rating</Text>
      </View>
      <View style={styles.box}>
      <Text style={styles.boxText}>Re-Booking</Text>
      </View>
      </View>

        </View>
      
        </View>
        
        </View>
    )
}

export default BookingCard

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        marginHorizontal:10,
        marginVertical:10,
        borderRadius:10,
        padding:20,
  
       shadowOffset:{  width: 0.5,  height: 0.5,  },
       shadowOpacity: 0.2,

    },
    image:{
        width:100,
        height:100,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },statusViewOffline:{
        backgroundColor:'#ececec',
        width:100,
        borderBottomEndRadius:10,
        borderBottomStartRadius:10,
        paddingVertical:4,
        justifyContent:'center',
        alignItems:'center'
    },offlineText:{
        color:'#9e9e9e',
        fontWeight:'500'
    },statusViewAvailable:{
        backgroundColor:'#dcefdc',
        width:100,
        borderBottomEndRadius:10,
        borderBottomStartRadius:10,
        paddingVertical:4,
        justifyContent:'center',
        alignItems:'center'
    },availableText:{
        color:'#59a85c',
        fontWeight:'500'
    },border:{
        borderBottomColor:'#e0e0e0',
        width:'100%',
        borderBottomWidth:1,
        marginTop:10,
    },detailsContainer:{
        flexDirection:'column',
        marginLeft:20,
        width:'70%',
    },mt12:{
        marginTop:12
    },time:{
        color:'#8c9da7'
    },price:{
        color:'#0170b2',
        fontWeight:'bold'
    },bottom:{
        alignItems: 'flex-end',
       
        marginTop:10
    },box:{
        backgroundColor:'#e6f1f7',
        padding:8,
        paddingHorizontal:20,
        borderRadius:16,
        marginVertical:6
    },boxText:{
        color:'#0170b2',
    }
})
// #ececec
// #9e9e9e
// #e6f1f7
// #0170b2
// #8c9da7
// #ffb24f
// #dcefdc
// #59a85c
