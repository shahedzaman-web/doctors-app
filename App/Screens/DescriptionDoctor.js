import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import gs from "../GlobalStyle/GlobalStyle";

const descriptionData = {
  name: "Dr Baker Smith",
  des: "Clinic, an organized medical service offering diagnostic, therapeutic, or preventive outpatient services. Often, the term covers an entire medical teaching centre, including the hospital and the outpatient facilities. The medical care offered by a clinic may or may not be connected with a hospital.",
  img: require("./../assets/photos/male-doctor.jpg"),
  status: "Available",
  specialist: ["Allergists"],
  cost: "20.40",
  reviews: [
    {
      name: "Biance Walker",
      title: "lorem dolor sit amet",
      details:
        "Clinic, an organized medical service offering diagnostic, therapeutic, or preventive outpatient services. Often, the term covers an entire medical teaching centre, including the hospital and the outpatient facilities. The medical care offered by a clinic may or may not be connected with a hospital.",
      img: require("./../assets/photos/smiling-businessman-banker-sitting-his-workplace-1068x600.jpg"),
    },
    {
      name: "Giles Walker",
      title: "lorem dolor sit amet",
      details:
        "Clinic, an organized medical service offering diagnostic, therapeutic, or preventive outpatient services. Often, the term covers an entire medical teaching centre, including the hospital and the outpatient facilities. The medical care offered by a clinic may or may not be connected with a hospital.",
      img: require("./../assets/photos/smiling-businessman-banker-sitting-his-workplace-1068x600.jpg"),
    },
    {
      name: "Diane Walker",
      title: "lorem dolor sit amet",
      details:
        "Clinic, an organized medical service offering diagnostic, therapeutic, or preventive outpatient services. Often, the term covers an entire medical teaching centre, including the hospital and the outpatient facilities. The medical care offered by a clinic may or may not be connected with a hospital.",
      img: require("./../assets/photos/smiling-businessman-banker-sitting-his-workplace-1068x600.jpg"),
    },
  ],
};

const DescriptionDoctor = () => {
  return (
    <View>
      <ScrollView>
        <View style={{ position: "relative", marginBottom: 70 }}>
          <Image source={descriptionData.img} style={styles.image} />
          <View style={[gs.container, gs.row, gs.spaceBetween, styles.topBar]}>
            <AntDesign name="left" size={24} color="black" />
            <AntDesign name="heart" size={24} color="#ed4242" />
          </View>
          <View style={styles.InfoContainer}>
            <View style={[gs.row, gs.spaceBetween]}>
              <Text style={[gs.bold, gs.fontDefault]}>
                {descriptionData.name}
              </Text>
              <View
                style={
                  descriptionData.status === "Available"
                    ? styles.status
                    : styles.statusClosed
                }
              >
                <Text style={styles.activeColor}>{descriptionData.status}</Text>
              </View>
            </View>
            <View style={[gs.row, gs.spaceBetween, gs.alignCenter]}>
              <View style={[gs.row, styles.star]}>
                <FontAwesome name="star" size={16} color="#ffb24f" />
                <FontAwesome name="star" size={16} color="#ffb24f" />
                <FontAwesome name="star" size={16} color="#ffb24f" />
                <FontAwesome name="star-half-empty" size={16} color="#ffb24f" />
                <FontAwesome name="star-o" size={16} color="#ffb24f" />
                <Text style={styles.review}>Reviews (236)</Text>
              </View>
              <Text style={[styles.textColor, gs.bold]}>
                $<Text style={gs.fontL}>{descriptionData.cost}/h</Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.docContainer}>
          <FlatList
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={descriptionData.specialist}
            nestedScrollEnabled
            renderItem={({ item }) => (
              <View style={styles.specialistContainer}>
                <Text style={styles.specialistText}>{item}</Text>
              </View>
            )}
          />
        </View>
        <View style={styles.desContainer}>
          <Text style={[gs.bold, gs.fontDefault]}>Description</Text>
          <View style={styles.border} />
          <Text>{descriptionData.des}</Text>
        </View>
        <View style={styles.desContainer}>
          <Text style={[gs.bold, gs.fontDefault]}>Reviews & Ratings</Text>
          <View style={styles.border} />
          <View style={[gs.center, styles.my12]}>
            <Text style={gs.fontL}>3.5</Text>
            <View style={[gs.row, styles.star]}>
              <FontAwesome name="star" size={24} color="#ffb24f" />
              <FontAwesome name="star" size={24} color="#ffb24f" />
              <FontAwesome name="star" size={24} color="#ffb24f" />
              <FontAwesome name="star-half-empty" size={24} color="#ffb24f" />
              <FontAwesome name="star-o" size={24} color="#ffb24f" />
            </View>
            <Text style={styles.review}>Reviews (236)</Text>
          </View>
          <SafeAreaView
            style={{ flex: 1, marginTop: StatusBar.currentHeight || 0 }}
          >
            <FlatList
              data={descriptionData.reviews}
              keyExtractor={(item) => item.name}
              nestedScrollEnabled
              renderItem={({ item }) => (
                <View style={{ width: "100%" }}>
                  <View style={styles.border} />
                  <View style={[gs.row, gs.alignCenter]}>
                    <View style={[gs.row, gs.alignCenter]}>
                      <Image source={item.img} style={styles.reviewImg} />
                      <View style={[gs.row, gs.spaceBetween, styles.width]}>
                        <View style={{ marginLeft: 12 }}>
                          <Text>{item.name}</Text>
                          <Text style={styles.grayText}>{item.title}</Text>
                        </View>
                        <View style={[gs.row, styles.reviewContainer]}>
                          <Text style={gs.textWhite}>4.48</Text>
                          <FontAwesome name="star-o" size={16} color="#fff" />
                        </View>
                      </View>
                    </View>
                  </View>
                  <Text style={styles.details}>{item.details}</Text>
                </View>
              )}
            />
          </SafeAreaView>
        </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={[gs.textCenter, gs.textWhite, gs.bold, gs.fontDefault]}>
            Book an Appointment
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DescriptionDoctor;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  InfoContainer: {
    position: "absolute",
    bottom: -30,
    backgroundColor: "#fff",
    width: "94%",
    height: 120,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    paddingVertical: 20,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  star: {
    marginVertical: 10,
    marginRight: 10,
  },
  review: {
    color: "#969696",
    marginLeft: 10,
  },
  status: {
    backgroundColor: "#d8ebd8",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  statusClosed: {
    backgroundColor: "gray",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  topBar: {
    position: "absolute",
    width: "94%",
    marginHorizontal: 12,
  },
  docContainer: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  specialistContainer: {
    marginHorizontal: 4,
    padding: 4,
    paddingHorizontal: 8,
    backgroundColor: "#c9eef6",
    borderRadius: 16,
  },
  desContainer: {
    marginTop: 20,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: "#fff",
    marginHorizontal: 16,
    padding: 10,
    paddingVertical: 30,
    borderRadius: 10,
  },
  border: {
    borderBottomColor: "#e6e6e6",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  my12: {
    marginVertical: 12,
  },
  reviewImg: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  width: {
    width: "82%",
  },
  grayText: {
    color: "#969696",
  },
  reviewContainer: {
    padding: 8,
    paddingHorizontal: 12,
    backgroundColor: "#0170b2",
    borderRadius: 20,
  },
  details: {
    color: "#969696",
    marginVertical: 10,
  },
  activeColor: {
    color: "#4cb04e",
    fontWeight: "600",
  },
  textColor: {
    color: "#0170b2",
  },
  specialistText: {
    color: "#1abcde",
  },
  btnContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 120,
    backgroundColor: "#fff",
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
});
