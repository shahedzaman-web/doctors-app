import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ChatCard = ({name,chat}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/photos/person.jpeg")}
        style={styles.image}
      />
      <View style={styles.chatCard}>
        <View style={styles.chatContainer}>
          <Text>{name}</Text>
          <Text style={styles.colorText}>07:54</Text>
        </View>
        <View style={styles.chatContainer}>
        <Text style={styles.colorText}>{chat}</Text>
        <Text style={styles.colorText}>29-08-2021</Text>
      </View>
      </View>
    </View>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowOpacity: 0.2,
    shadowRadius: 3,
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

  }
});
