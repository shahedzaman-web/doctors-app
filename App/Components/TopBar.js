import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Entypo,Feather} from '@expo/vector-icons';

const TopBar = ({title}) => {
    return (
        <View style={styles.row}>
        <Entypo name="list" size={24} color="black" />
            <Text style={styles.titleText}>{title}</Text>
            <Feather name="bell" size={24} color="black" />
        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    row:{
        marginVertical:10,
        marginHorizontal:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },titleText:{
        fontSize:16,
        fontWeight:'bold',
        color:"#0170b2",
    }
})
