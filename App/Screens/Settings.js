import React, { useState } from 'react'
import { StyleSheet, Text, View,TouchableOpacity,ScrollView,TextInput,Image } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Ionicons, Entypo, EvilIcons, Feather,AntDesign,FontAwesome5,MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import RadioGroup from 'react-native-radio-buttons-group';

const languageData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'English(USA)',
    value: 'english'
}, {
    id: '2',
    label: 'Arabic',
    value: 'arabic'
}]
const themeData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Light Theme',
    value: 'light'
}, {
    id: '2',
    label: 'Dark Theme',
    value: 'dark'
},{
    id: '3',
    label: 'System Theme',
    value: 'system'
}]
import gs from '../GlobalStyle/GlobalStyle';
const Settings = () => {
    const [profile, setProfile] = useState(true);
    const [language, setLanguage] = useState(false);
    const [theme, setTheme] = useState(false);
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState("");
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [confirmPassword, setConfirmPassword] = useState("");
    const [date, setDate] = useState(new Date().toLocaleDateString("en-us",{month: "short",day: "numeric", year: "numeric"}));
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (value) => {
      setDate(value.toLocaleDateString("en-us",{month: "short",day: "numeric", year: "numeric"}))
  
      hideDatePicker();
    };
    const [radioButtons, setRadioButtons] = useState(languageData)

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }
    const [radioButtonsTheme, setRadioButtonsTheme] = useState(themeData)

    function onPressRadioButtonTheme(radioButtonsArray) {
        setRadioButtonsTheme(radioButtonsArray);
    }
    return (
        <View style={gs.container}>
        <View style={[gs.row,gs.spaceBetween]}>
        <AntDesign name="left" size={24} color="black" />
        <Text style={[gs.bold,styles.colorText]}>Settings</Text>
        <Text></Text>
        </View>
        <View style={[styles.settingsContainer,gs.row]}> 
        <TouchableOpacity 
        onPress={()=>{setProfile(true),setLanguage(false),setTheme(false)}}
        style={profile? styles.settingBtnColor :styles.settingBtn }>
        <Text 
        style={   profile?   [gs.textWhite,gs.bold]: gs.bold }> Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{setProfile(false),setLanguage(true),setTheme(false)}}
        style={language? styles.settingBtnColor :styles.settingBtn }>
        <Text    style={   language?   [gs.textWhite,gs.bold]: gs.bold }> Language</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>{setProfile(false),setLanguage(false),setTheme(true)}}
        style={theme? styles.settingBtnColor :styles.settingBtn }>
        <Text    style={   theme?   [gs.textWhite,gs.bold]: gs.bold }> Theme Mode</Text>
        </TouchableOpacity>
        </View>
       {profile && <ScrollView>
        <View style={styles.detailsContainer}>
        <Text style={[gs.bold,gs.fontDefault,styles.marginLeft]}>Profile Details</Text>
        <Text style={{color: '#a1a1a1', marginLeft:10}}>Change the following details and save them</Text>
        </View>
        <View>
        <View style={styles.inputContainer}>
        <Text style={gs.bold}>Email</Text>
        <View style={styles.border} />
        <View style={[gs.row, gs.alignCenter]}>
          <Entypo name="email" size={24} color="#8c9da7" />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="johndoe@gmail.com"
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
      <Text style={gs.bold}>Phone Number</Text>
      <View style={styles.border} />
      <View style={[gs.row, gs.alignCenter]}>
      <AntDesign name="mobile1" size={24} color="#8c9da7"/>
        <TextInput
          style={styles.input}
          value={number}
          onChangeText={(text) => setNumber(text)}
          placeholder="+1 223 665 &896"
        />
      </View>
    </View>
    <View style={styles.inputContainer}>
    <Text style={gs.bold}>Address</Text>
    <View style={styles.border} />
    <View style={[gs.row, gs.alignCenter]}>
    <Ionicons name="md-map-outline" size={24} color="#8c9da7"/>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={(text) => setAddress(text)}
        placeholder="address"
      />
    </View>
  </View>
  <View style={styles.inputContainerGender}>
  <Text style={gs.bold}>Gender</Text>
  <View style={styles.border} />
  <View style={[gs.row, gs.alignCenter,gs.spaceAround]}>
  <TouchableOpacity style={styles.genderBtn}>
  <Image source={require('./../assets/img/women.png')} style={styles.imgGender}/>
  </TouchableOpacity>
  <TouchableOpacity style={styles.genderBtn}>
  <Image source={require('./../assets/img/man.png')} style={styles.imgGender}/>
  </TouchableOpacity>
  
  </View>
</View>
<View style={styles.inputContainer}>
<Text style={gs.bold}>Date Of Barth</Text>
<View style={styles.border} />
<View style={[gs.row, gs.alignCenter,gs.spaceBetween]}>
<Text>{date}</Text>
<TouchableOpacity style={styles.calenderBtn} onPress={()=>setDatePickerVisibility(prevState=>!prevState)}>
<FontAwesome5 name="calendar-alt" size={24} color="white" />
<DateTimePickerModal
isVisible={isDatePickerVisible}
mode="date"
onConfirm={handleConfirm}
onCancel={hideDatePicker}
/>
</TouchableOpacity>
</View>
</View>
<View style={styles.inputContainer}>
<Text style={gs.bold}>Height</Text>
<View style={styles.border} />
<View style={[gs.row, gs.alignCenter, gs.spaceBetween]}>
  <View style={gs.row}>
  
    <TextInput
      style={styles.input}
      secureTextEntry
      value={height}
      onChangeText={(text) => setHeight(text)}
      placeholder="180 CM"
    />
  </View>
  <MaterialIcons name="height" size={24} color="#8c9da7" />

</View>
</View>
<View style={styles.inputContainer}>
<Text style={gs.bold}>Weight</Text>
<View style={styles.border} />
<View style={[gs.row, gs.alignCenter, gs.spaceBetween]}>
  <View style={gs.row}>
  
    <TextInput
      style={styles.input}
      secureTextEntry
      value={weight}
      onChangeText={(text) => setWeight(text)}
      placeholder="72 KG"
    />
  </View>
  <MaterialCommunityIcons name="weight" size={24} color="#8c9da7" />

</View>
</View>
<Text style={[gs.bold,gs.fontDefault,styles.marginLeft20]}>Change Password</Text>
<Text style={{color: '#a1a1a1', marginLeft:20}}>Change the following details and save them</Text>
      <View style={styles.inputContainer}>
        <Text style={gs.bold}>Password</Text>
        <View style={styles.border} />
        <View style={[gs.row, gs.alignCenter, gs.spaceBetween]}>
          <View style={gs.row}>
            <EvilIcons name="lock" size={30} color="#8c9da7" />
            <TextInput
              style={styles.input}
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="password"
            />
          </View>
          <Feather name="eye" size={24} color="#8c9da7" />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={gs.bold}>Confirm Password</Text>
        <View style={styles.border} />
        <View style={[gs.row, gs.alignCenter, gs.spaceBetween]}>
          <View style={gs.row}>
            <EvilIcons name="lock" size={30} color="#8c9da7" />
            <TextInput
              style={styles.input}
              secureTextEntry
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              placeholder="confirm password"
            />
          </View>
          <Feather name="eye" size={24} color="#8c9da7" />
        </View>
      </View>
        </View>
        </ScrollView>}
        
        <>
        {
            language && (
                <View style={styles.inputContainer}>
                <RadioGroup 
                radioButtons={radioButtons} 
                onPress={onPressRadioButton} 
                borderColor="#0170b2"
                color="#0170b2"
                containerStyle={{alignItems: 'flex-start'}}
            />
                </View>
            )
        }
        </>
        <>
        {
            theme && (
                <View style={styles.inputContainerTheme}>
                <RadioGroup 
                radioButtons={radioButtonsTheme} 
                onPress={onPressRadioButtonTheme} 
                borderColor="#0170b2"
                color="#0170b2"
                containerStyle={{alignItems: 'flex-start'}}
            />
                </View>
            )
        }
        </>
      
      {profile &&  <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.saveBtn}>
        <Text style={[gs.bold,gs.textWhite]}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetBtn}>
        <Text style={[gs.bold]}>Reset</Text>
        </TouchableOpacity>
        </View>}
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    colorText:{
        color: "#0170b2",
        fontSize:16
    },settingsContainer:{
        marginVertical:10,
        marginHorizontal:10,
        marginBottom:20
    },settingBtnColor:{
        backgroundColor:"#0170b2",
        padding:16,
        borderRadius:10,
        marginRight:10,
    },settingBtn:{
        backgroundColor:"#ededed",
        padding:16,
        borderRadius:10,
        marginRight:10,
    },detailsContainer:{
        marginHorizontal:10,
    },  inputContainer: {
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
      },inputContainerTheme:{
        marginVertical: 12,
        marginHorizontal: 20,
        height: 120,
        padding: 12,
        backgroundColor: "#feffff",
        borderRadius: 8,
        marginVertical: 20,
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
      },
      border: {
        borderBottomWidth: 1,
        borderBottomColor: "#f5f5f5",
        marginVertical: 12,
      },
      input: {
        marginLeft: 12,
      },genderBtn:{
        width: 90,
        height: 90,
        borderRadius: 8,
        backgroundColor: "#feffff",
        borderRadius: 8,
        padding: 4,
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
      },calenderBtn:{
        width: 80,
        height: 40,
        borderRadius: 25,
        backgroundColor: '#cce2f0',
        justifyContent: "center",
        alignItems: "center",
      },imgGender:{
        width: 80,
        height: 80,
      },inputContainerGender: {
        marginVertical: 12,
        marginHorizontal: 20,
        height: 160,
        padding: 12,
        backgroundColor: "#feffff",
        borderRadius: 8,
        marginVertical: 20,
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
      },marginLeft:{
        marginLeft:10
      },marginLeft20:{
        marginLeft:20
      },btnContainer:{
          zIndex: 1,
          position: 'absolute',
          bottom: 0,
          width: "100%",
          height: '10%',
          backgroundColor: "#ededed",
          borderTopLeftRadius :10,
          borderTopRightRadius :10,
          padding:10,
          flexDirection: "row",
          justifyContent: "space-around",
      },saveBtn:{
        marginTop:12,
        backgroundColor:"#0170b2",
        height:40,
        width: "60%",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
      },resetBtn:{
        marginTop:12,
        backgroundColor:"#d9dade",
        height:40,
        width: "25%",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
      }
})
// #8c9da7
