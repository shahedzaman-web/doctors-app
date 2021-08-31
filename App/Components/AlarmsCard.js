import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const AlarmsCard = ({title,left,timeNumber,times,to,from}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/photos/person.jpeg")}
        style={styles.image}
      />
      <View style={styles.chatCard}>
        <View style={[styles.chatContainer,styles.mb8]}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.title}>{left} left</Text>
        </View>
        <View style={styles.chatContainer}>
        <Text style={styles.colorText}>{timeNumber} times </Text>
        <Text style={styles.colorText}>{times}</Text>
      </View>
      <View style={styles.chatContainer}>
      <Text style={styles.colorText}>from : {from} </Text>
      <Text style={styles.colorText}>to: {to}</Text>
    </View>
      </View>
    </View>
  );
};

export default AlarmsCard;

const styles = StyleSheet.create({
    title:{
        color:'#1f2a3a',
        fontWeight:'600',
    },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  container: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingVertical: 20,
    elevation: 5,
    shadowOffset: { width: 0.5, height: 0.5 },
  },
  chatContainer: {
    width: "78%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },colorText:{
    color:"#aab8c1"
  },chatCard:{
      width:"100%",

  },mb8:{
      marginBottom:8
  }
});
