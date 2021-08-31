import React from 'react'
import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import {AntDesign} from '@expo/vector-icons';
import gs from '../GlobalStyle/GlobalStyle';
const Notifications = () => {
    return (
        <View style={gs.container}>
        <View style={[gs.row,gs.spaceBetween]}>
        <AntDesign name="left" size={24} color="black" />
        <Text style={[gs.bold,styles.colorText]}>Notifications</Text>
        <Text></Text>
        </View>
        <ScrollView>
     <View style={styles.bottomContainer}>
     <Text style={[gs.bold,gs.fontDefault]}>Incoming Notifications</Text>
     <Text style={{color: '#a1a1a1'}}>Swipe item left to delete it.</Text>

   <View style={[gs.row,styles.card]}>
   <Image source={require('./../assets/icon/GreyNotification.png')} style={styles.icons} />
   <View style={{marginLeft: 12}}> 
   <Text>lorem dsfsfdsfs fsgdssgg</Text>
   <Text style={{color: '#a1a1a1',}}>6, November 2019 | 10:09</Text>
   </View>
    </View>
    <View style={[gs.row,styles.cardColored]}>
    <Image source={require('./../assets/icon/GreyNotification.png')} style={styles.icons} />
    <View style={{marginLeft: 12}}> 
    <Text style={gs.bold}>asdfdg gdfggdfgfdgd fdgd</Text>
    <Text style={{color: '#a1a1a1',}}>6, November 2019 | 10:09</Text>
    </View>
     </View>
     <View style={[gs.row,styles.card]}>
     <Image source={require('./../assets/icon/GreyNotification.png')} style={styles.icons} />
     <View style={{marginLeft: 12}}> 
     <Text>lorem dsfsfdsfs fsgdssgg</Text>
     <Text style={{color: '#a1a1a1',}}>6, November 2019 | 10:09</Text>
     </View>
      </View>
      <View style={[gs.row,styles.card]}>
   <Image source={require('./../assets/icon/GreyNotification.png')} style={styles.icons} />
   <View style={{marginLeft: 12}}> 
   <Text>lorem dsfsfdsfs fsgdssgg</Text>
   <Text style={{color: '#a1a1a1',}}>6, November 2019 | 10:09</Text>
   </View>
    </View>
    <View style={[gs.row,styles.card]}>
   <Image source={require('./../assets/icon/GreyNotification.png')} style={styles.icons} />
   <View style={{marginLeft: 12}}> 
   <Text>lorem dsfsfdsfs fsgdssgg</Text>
   <Text style={{color: '#a1a1a1',}}>6, November 2019 | 10:09</Text>
   </View>
    </View>
    <View style={[gs.row,styles.cardColored]}>
    <Image source={require('./../assets/icon/GreyNotification.png')} style={styles.icons} />
    <View style={{marginLeft: 12}}> 
    <Text style={gs.bold}>asdfdg gdfggdfgfdgd fdgd</Text>
    <Text style={{color: '#a1a1a1',}}>6, November 2019 | 10:09</Text>
    </View>
     </View>
     <View style={[gs.row,styles.card]}>
     <Image source={require('./../assets/icon/GreyNotification.png')} style={styles.icons} />
     <View style={{marginLeft: 12}}> 
     <Text>lorem dsfsfdsfs fsgdssgg</Text>
     <Text style={{color: '#a1a1a1',}}>6, November 2019 | 10:09</Text>
     </View>
      </View>

      
      </View>
      </ScrollView>
        </View>
    )
}

export default Notifications

const styles = StyleSheet.create({
    colorText:{
        color: "#0170b2",
        fontSize:16
    },bottomContainer:{
        marginHorizontal: 20,
        marginTop:20
    },icons:{
        width:50,
        height:50,
        resizeMode:'contain'
    },card:{
        marginVertical: 16,
        padding:10,
        borderRadius:10,
        backgroundColor: '#fff',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: { width: 0.5, height: 0.5 },
        elevation: 5,
        alignItems:'center'
    },cardColored:{
        marginVertical: 16,
        padding:10,
        borderRadius:10,
        backgroundColor: '#ededed',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: { width: 0.5, height: 0.5 },
        elevation: 5,
        alignItems:'center'
    }
})
