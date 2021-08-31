import React from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'

import gs from '../GlobalStyle/GlobalStyle';

const LoginHome = ({navigation}) => {
    return (
        <View style={gs.container}>

            <Image source={require('../assets/img/on_boarding.png')} style={styles.img} />

            <Text style={styles.title}>Find Your Perfect Doctor</Text>
            <Text style={styles.subText}>Easy way to make an appointment with a doctor</Text>
            <View style={gs.center}>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Login')}
            style={[styles.btn,gs.center]}>
            <Text >Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn,gs.center,styles.btnColor]}
            onPress={() => navigation.navigate('Register')}>
            <Text style={gs.textWhite} >Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btnSkip,gs.center]}>
            <Text style={styles.btnText}>Skip</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginHome

const styles = StyleSheet.create({

    img:{
        width: '100%',
        height: '45%',
        resizeMode: 'contain'
    },title:{
        color: '#0170b2',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 50,
    },subText:{
        color: '#8c9da7',
        fontSize: 20,
        textAlign: 'center',
        marginHorizontal: 40,
        marginVertical:20
    },btn:{
        backgroundColor: '#feffff',
        width: '90%',
        height: 50,
        borderRadius: 8,
        marginVertical: 20,
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },btnColor:{
        backgroundColor: '#0170b2',
        shadowColor: '#0170b2',
        shadowOpacity: 0.5,
        shadowRadius: 16,
        shadowOffset: { width: 2, height: 2 },
        elevation: 5,
    },btnText:{
        color: '#0170b2',
    },btnSkip:{
      
        width: '90%',
        height: 50,
        borderRadius: 8,
        marginVertical: 20,
    }
})

//#0170b2
//#8c9da7
