import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BookingCard from '../Components/BookingCard'
import TopBar from '../Components/TopBar'
import gs from '../GlobalStyle/GlobalStyle'

const Booking = () => {
    return (
        <View style={gs.container}>
            <TopBar title="Bookings"/>
            <BookingCard status='Offline' name='Aikenhead Mistry' img={require('./../assets/photos/male-doctor.jpg')}/>
            <BookingCard status='Available' name='Bird Ramsey' img={require('./../assets/photos/female.jpg')}/>
            </View> 
    )
}

export default Booking

const styles = StyleSheet.create({})
