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
} from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import gs from "../GlobalStyle/GlobalStyle";

const descriptionData = {
  name: "Universal Body Clinics",
  des: "Clinic, an organized medical service offering diagnostic, therapeutic, or preventive outpatient services. Often, the term covers an entire medical teaching centre, including the hospital and the outpatient facilities. The medical care offered by a clinic may or may not be connected with a hospital.",
  img: require("./../assets/photos/clinics-MyHealth.jpg"),
  status: "Closed",
  doctors: ["Dr Baker Smith", "Dr Aikenhead Mistry", "Dr Lynn Potts"],
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

const DescriptionClinics = () => {
  return (
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
                descriptionData.status === "Open"
                  ? styles.status
                  : styles.statusClosed
              }
            >
              <Text style={gs.textWhite}>{descriptionData.status}</Text>
            </View>
          </View>

          <View style={[gs.row, styles.star]}>
            <FontAwesome name="star" size={16} color="#ffb24f" />
            <FontAwesome name="star" size={16} color="#ffb24f" />
            <FontAwesome name="star" size={16} color="#ffb24f" />
            <FontAwesome name="star-half-empty" size={16} color="#ffb24f" />
            <FontAwesome name="star-o" size={16} color="#ffb24f" />
            <Text style={styles.review}>Reviews (236)</Text>
          </View>
        </View>
      </View>
      <View style={styles.docContainer}>
        <FlatList
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={descriptionData.doctors}
          nestedScrollEnabled
          renderItem={({ item }) => (
            <View style={styles.docNameContainer}>
              <Text style={styles.docName}>{item}</Text>
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
  );
};

export default DescriptionClinics;

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
    backgroundColor: "#53c73c",
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
  docNameContainer: {
    marginHorizontal: 4,
    padding: 4,
    paddingHorizontal: 8,
    backgroundColor: "#d4e3ff",
    borderRadius: 10,
    borderColor: "#bad3ff",
    borderWidth: 1,
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
});
