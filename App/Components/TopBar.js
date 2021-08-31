import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Entypo,Feather} from '@expo/vector-icons';

const TopBar = ({title}) => {
    return (
        <View style={title=== 'Account'? styles.rowColored :styles.row}>
        <Entypo name="list" size={24} color={title=== 'Account'? "white":"black"} />
            <Text style={title=== 'Account'? styles.titleTextWhite :styles.titleText}>{title}</Text>
            <Feather name="bell" size={24} color={title=== 'Account'? "white":"black"} />
        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    row:{
        paddingVertical:10,
        paddingHorizontal:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },rowColored:{
        paddingVertical:10,
        paddingHorizontal:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor: '#0170b2'
    },
    titleText:{
        fontSize:16,
        fontWeight:'bold',
        color:"#0170b2",
    },titleTextWhite:{
        fontSize:16,
        fontWeight:'bold',
        color:"white",
    }
})
