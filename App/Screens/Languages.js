import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {AntDesign} from '@expo/vector-icons';
import RadioGroup from 'react-native-radio-buttons-group';



import gs from '../GlobalStyle/GlobalStyle';

const languageData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'English(USA)',
    value: 'english'
}, {
    id: '2',
    label: 'Arabic',
    value: 'arabic'
}]


const Languages = () => {
    const [radioButtons, setRadioButtons] = useState(languageData)

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }
    

    return (
        <View style={gs.container}>
        <View style={[gs.row,gs.spaceBetween]}>
        <AntDesign name="left" size={24} color="black" />
        <Text style={[gs.bold,styles.colorText]}>Languages</Text>
        <Text></Text>
        </View>
        <View style={styles.inputContainer}>
                <RadioGroup 
                radioButtons={radioButtons} 
                onPress={onPressRadioButton} 
                borderColor="#0170b2"
                color="#0170b2"
                containerStyle={{alignItems: 'flex-start'}}
            />
                </View>

        
        
        
        
        
        
        </View>
    )
}

export default Languages

const styles = StyleSheet.create({
    colorText:{
        color: "#0170b2",
        fontSize:16
    }, inputContainer: {
        marginVertical: 12,
        marginHorizontal: 20,
        height: 100,
        padding: 12,
        backgroundColor: "#feffff",
        borderRadius: 8,
        marginVertical: 20,
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
      }
})
