import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ChatCard from '../Components/ChatCard';
import TopBar from '../Components/TopBar'
import gs from '../GlobalStyle/GlobalStyle';

const Chats = () => {
    return (
        <View style={gs.container}>
        <TopBar title="Chat"/>
            <ChatCard name="Shifting House" chat="Hi"/>
            <ChatCard name="Pet Company" chat="Hey"/>
            <ChatCard name="Appliance Repair Company" chat="g"/>
        </View>
    )
}

export default Chats

const styles = StyleSheet.create({})
//#aab8c1
