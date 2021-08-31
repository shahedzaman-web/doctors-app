import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import AlarmsCard from '../Components/AlarmsCard'
import TopBar from '../Components/TopBar'
import gs from '../GlobalStyle/GlobalStyle'

const Alarms = () => {
    return (
        <View style={gs.container}>
            <TopBar title="Alarms"/> 
            <View style={styles.insideContainer}>
            <View style={[styles.my12, gs.row, gs.spaceBetween]}>
            <Text style={[gs.bold, gs.fontDefault]}>Your Alarms</Text>
            <TouchableOpacity style={styles.view}>
              <Text style={styles.colorText}>add new alarm</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.grayText}>Swipe item left to delete it. | press an item to select it.</Text>

          </View>
          <AlarmsCard title ='Vitamine C' left='22' timeNumber='3' times='08:00 PM - 01:00 PM - 08:00 AM' to ='Mar 1,2021' from='Jan 1,2021' />
          <AlarmsCard title ='Lipitor' left='32' timeNumber='2' times='04:00 PM - 10:00 AM'  to ='Mar 1,2021' from='Jan 1,2021' />
          <AlarmsCard title ='Singulair' left='12' timeNumber='3' times='07:00 PM - 12:00 PM - 06:00 AM'  to ='Mar 1,2021' from='Jan 1,2021' />
          <AlarmsCard title ='Actos' left='4' timeNumber='1' times='08:00 P,'  to ='Mar 1,2021' from='Jan 1,2021' />
         
        </View>
    )
}

export default Alarms

const styles = StyleSheet.create({
    view: {
        borderRadius: 20,
        backgroundColor: "#e2edf3",
        paddingHorizontal: 18,
        paddingVertical: 10,
        
      },my12:{
          marginVertical: 12
      },insideContainer:{
          marginHorizontal: 20,
          marginBottom: 12
      }, colorText: {
        color: "#0170b2",
      },grayText:{
          color: '#969fa4'
      }
})
//#969fa4
