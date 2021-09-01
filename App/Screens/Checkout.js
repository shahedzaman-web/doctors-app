import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import { AntDesign, Ionicons, MaterialIcons,MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import gs from "../GlobalStyle/GlobalStyle";


const info={
  name:"Dr Baker Smith",
  cost:'20.40',
  img: require("./../assets/photos/male-doctor.jpg"),
  status: "Available"
}


const Checkout = () => {
  const [visa, setVisa] = useState(true);
  const [masterCard, setMasterCard] = useState(false);
  const [razorPay, setRazorPay] = useState(false);
  const [paypal, setPaypal] = useState(false);
  const [cash, setCash] = useState(false);
  const [wallet, setWallet] = useState(false);
  const handleVisaCard=()=>{
    setVisa(true)
    setMasterCard(false)
    setRazorPay(false)
    setPaypal(false)
    setCash(false)
    setWallet(false)
  }
  const handleMasterCard=()=>{
    setVisa(false)
    setMasterCard(true)
    setRazorPay(false)
    setPaypal(false)
    setCash(false)
    setWallet(false)
  }
  const handleRazorPay=()=>{
    setVisa(false)
    setMasterCard(false)
    setRazorPay(true)
    setPaypal(false)
    setCash(false)
    setWallet(false)
  }
  const handlePaypal=()=>{
    setVisa(false)
    setMasterCard(false)
    setRazorPay(false)
    setPaypal(true)
    setCash(false)
    setWallet(false)
  }
  const handleCash=()=>{
    setVisa(false)
    setMasterCard(false)
    setRazorPay(false)
    setPaypal(false)
    setCash(true)
    setWallet(false)
  }
  const handleWallet=()=>{
    setVisa(false)
    setMasterCard(false)
    setRazorPay(false)
    setPaypal(false)
    setCash(false)
    setWallet(true)
  }

  
  return (
    <View style={gs.container}>
      <View style={[gs.row, gs.spaceBetween,styles.mx12,styles.my12]}>
        <AntDesign name="left" size={24} color="black" />
        <Text style={[gs.bold, styles.colorText]}>Checkout</Text>
        <Text></Text>
      </View>
      <ScrollView style={{ marginBottom: 240 }}>
        <View>
        
        
        </View>
        <View style={[gs.row,gs.alignCenter,styles.mx20]}> 
        <AntDesign name="creditcard" size={24} color="black" />
      <View style={styles.ml12}>
      <Text style={[gs.bold,gs.fontNormal,styles.my8]}>Payment Option</Text>
      <Text style={{color: "#757575"}}>Select your preferred payment mode</Text>
      
      </View>
        </View>
        <TouchableOpacity
        style={
          visa ? styles.checkboxChecked : styles.checkboxUnchecked
        }
        onPress={handleVisaCard}
      >

    <View style={[gs.row,gs.alignCenter]}>
    {visa && (
      <MaterialIcons
        name="radio-button-checked"
        size={26}
        color="white"
      />
    )}
    {!visa && (
      <MaterialIcons
        name="radio-button-unchecked"
        size={24}
        color="#757575"
      />
    )}
<View style={ styles.ml12}>
<Text
style={
visa
 ? [gs.textWhite, gs.bold]
 : [gs.bold]
}
>
Visa Card
</Text>
<Text
style={
visa
? [gs.textWhite,styles.mt4]
: [ styles.mt4]
}
>
Click to pay your Visa card
</Text>
</View>
</View>
<Image source={require("./../assets/img/visacard.png")} style={styles.payImg} />
      </TouchableOpacity>
      <TouchableOpacity
      style={
        masterCard ? styles.checkboxChecked : styles.checkboxUnchecked
      }
      onPress={handleMasterCard}
    >

  <View style={[gs.row,gs.alignCenter]}>
  {masterCard && (
    <MaterialIcons
      name="radio-button-checked"
      size={26}
      color="white"
    />
  )}
  {!masterCard && (
    <MaterialIcons
      name="radio-button-unchecked"
      size={24}
      color="#757575"
    />
  )}
<View style={ styles.ml12}>
<Text
style={
  masterCard
? [gs.textWhite, gs.bold]
: [gs.bold]
}
>
Master Card
</Text>
<Text
style={
  masterCard
? [gs.textWhite,styles.mt4]
: [ styles.mt4]
}
>
Click to pay your MasterCard
</Text>
</View>
</View>
<Image source={require("./../assets/img/mastercard.png")} style={styles.payImg} />
    </TouchableOpacity>  
    
    
    <TouchableOpacity
    style={
      razorPay ? styles.checkboxChecked : styles.checkboxUnchecked
    }
    onPress={handleRazorPay}
  >

<View style={[gs.row,gs.alignCenter]}>
{razorPay && (
  <MaterialIcons
    name="radio-button-checked"
    size={26}
    color="white"
  />
)}
{!razorPay && (
  <MaterialIcons
    name="radio-button-unchecked"
    size={24}
    color="#757575"
  />
)}
<View style={ styles.ml12}>
<Text
style={
  razorPay
? [gs.textWhite, gs.bold]
: [gs.bold]
}
>
Razor Pay
</Text>
<Text
style={
  razorPay
? [gs.textWhite,styles.mt4]
: [ styles.mt4]
}
>
Click to pay your Razorpay gateway
</Text>
</View>
</View>
<Image source={require("./../assets/img/razorpay.png")} style={styles.payImg} />
  </TouchableOpacity>    



 
  <TouchableOpacity
  style={
    paypal ? styles.checkboxChecked : styles.checkboxUnchecked
  }
  onPress={handlePaypal}
>

<View style={[gs.row,gs.alignCenter]}>
{paypal && (
<MaterialIcons
  name="radio-button-checked"
  size={26}
  color="white"
/>
)}
{!paypal && (
<MaterialIcons
  name="radio-button-unchecked"
  size={24}
  color="#757575"
/>
)}
<View style={ styles.ml12}>
<Text
style={
  paypal
? [gs.textWhite, gs.bold]
: [gs.bold]
}
>
Paypal
</Text>
<Text
style={
  paypal
? [gs.textWhite,styles.mt4]
: [ styles.mt4]
}
>
Click to pay your Paypal gateway
</Text>
</View>
</View>
<Image source={require("./../assets/img/paypal.png")} style={styles.payImg} />
</TouchableOpacity>  

<View style={[gs.row,gs.alignCenter,styles.mx20]}> 
<MaterialCommunityIcons name="cash-usd-outline" size={24} color="black" />
<View style={styles.ml12}>
<Text style={[gs.bold,gs.fontNormal,styles.my8]}>Cash Method</Text>
<Text style={{color: "#757575"}}>Select your preferred cash</Text>

</View>
</View>

<TouchableOpacity
style={
  cash ? styles.checkboxChecked : styles.checkboxUnchecked
}
onPress={handleCash}
>

<View style={[gs.row,gs.alignCenter]}>
{cash && (
<MaterialIcons
name="radio-button-checked"
size={26}
color="white"
/>
)}
{!cash && (
<MaterialIcons
name="radio-button-unchecked"
size={24}
color="#757575"
/>
)}
<View style={ styles.ml12}>
<Text
style={
  cash
? [gs.textWhite, gs.bold]
: [gs.bold]
}
>
Cash
</Text>
<Text
style={
  cash
? [gs.textWhite,styles.mt4]
: [ styles.mt4]
}
>
Click to pay cash
</Text>
</View>
</View>
<Image source={require("./../assets/img/cash.png")} style={styles.payImg} />
</TouchableOpacity> 

<View style={[gs.row,gs.alignCenter,styles.mx20]}> 
<AntDesign name="wallet" size={24} color="black" />
<View style={styles.ml12}>
<Text style={[gs.bold,gs.fontNormal,styles.my8]}>Wallet Method</Text>
<Text style={{color: "#757575"}}>Select your preferred wallet</Text>

</View>
</View>
<TouchableOpacity
style={
  wallet ? styles.checkboxChecked : styles.checkboxUnchecked
}
onPress={handleWallet}
>

<View style={[gs.row,gs.alignCenter]}>
{wallet && (
<MaterialIcons
name="radio-button-checked"
size={26}
color="white"
/>
)}
{!wallet && (
<MaterialIcons
name="radio-button-unchecked"
size={24}
color="#757575"
/>
)}
<View style={ styles.ml12}>
<Text
style={
  wallet
? [gs.textWhite, gs.bold]
: [gs.bold]
}
>
Wallet
</Text>
<Text
style={
  wallet
? [gs.textWhite,styles.mt4]
: [ styles.mt4]
}
>
Pay using your wallet in the app
</Text>
</View>
</View>
<Image source={require("./../assets/img/wallet.png")} style={styles.payImg} />
</TouchableOpacity> 



      
      </ScrollView>
      <View style={styles.btnContainer}>
      <View style={[gs.row,styles.paymentInfo]}>
      <View>
      <Image source={info.img} style={styles.docImg} />
      {info.status==='Offline' ?
      (<View style={styles.statusViewOffline}>
          <Text style={styles.offlineText}>Offline</Text>
          </View>)
      :
      ((<View style={styles.statusViewAvailable}>
          <Text style={styles.availableText}>Available</Text>
          </View>))  }
      </View>
      <View style={styles.paymentTextInfo}>
      <Text style={[gs.bold]}>{info.name}</Text>
      <View style={styles.border} />
      <View style={[gs.row,gs.spaceBetween]}>
      <Text style={[gs.bold]}>Service Payment</Text>
      <Text style={[gs.bold]}>$<Text style={[gs.fontNormal]}>{info.cost}</Text></Text>
      </View>
      <Text style={[gs.bold]}>Tax</Text>
      <View style={styles.border} />
      <Text style={[gs.bold]}>Total</Text>
      </View>
      
      </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={[gs.textCenter, gs.textWhite, gs.bold, gs.fontDefault]}>
            Hire & Pay Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  colorText: {
    color: "#0170b2",
    fontSize: 16,
  },
  inputContainer: {
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
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
    marginVertical: 12,
  },
  input: {
    marginLeft: 12,
  },
  inputContainerCoupon: {
    marginVertical: 12,
    marginHorizontal: 20,
    height: 65,
    padding: 12,
    backgroundColor: "#feffff",
    borderRadius: 8,
    marginVertical: 20,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "center",
    width: "90%",
  },
  couponContainer: {
    width: "100%",
  },
  validateCouponBtn: {
    backgroundColor: "#f4f5f7",
    padding: 12,
    borderRadius: 8,
  },
  btnContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 260,
    backgroundColor: "#fffff4",
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  btn: {
    width: "90%",
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#0170b2",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 18,
    backgroundColor: "#0170b2",
    shadowColor: "#0170b2",
    shadowOpacity: 0.5,
    shadowRadius: 16,
    shadowOffset: { width: 2, height: 2 },
    elevation: 5,
  },
  mt12: {
    marginTop: 12,
  },
  checkboxChecked: {
    width: "90%",
    backgroundColor: "#0170b2",
    flexDirection: "row",
    height: 80,
    marginHorizontal: 20,
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 20,
    justifyContent:'space-between'
  },
  ml12: {
    marginLeft: 12,
  },mx20:{
    marginHorizontal:20
  },my8:{
    marginVertical:8
  },
  checkboxUnchecked: {
    width: "90%",
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    height: 80,
    marginHorizontal: 20,
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 20,
    justifyContent:'space-between'
  },
  timeContainer: {
    marginVertical: 12,
    marginHorizontal: 20,
    height: 140,
    padding: 12,
    backgroundColor: "#feffff",
    borderRadius: 8,
    marginVertical: 20,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "center",
    width: "90%",
  },
  timeBtn: {
    backgroundColor: "#cce2f0",
    padding: 12,
    borderRadius: 20,
  },
  timeBtnText: {
    color: "#0170b2",
    fontWeight: "600",
  },mt4:{
    marginTop:4,
    fontSize: 10,
  },payImg:{
    width:60,
    height:60,
    resizeMode:'contain',
    
  },docImg:{
    width:100,
    height:80,
    resizeMode:'cover',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },paymentInfo:{
    marginVertical:12,
    marginHorizontal:20
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
},paymentTextInfo:{
  marginLeft:20,

  width:"65%"
},border:{
  borderBottomColor:'#e0e0e0',
  width:'100%',
  borderBottomWidth:1,
  marginVertical:10,
},mx12:{
  marginHorizontal:12
},my12:{
  marginVertical: 12
}
});
