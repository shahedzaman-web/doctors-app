import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import gs from "../GlobalStyle/GlobalStyle";
const BookAnAppointment = () => {
  const [address, setAddress] = useState("");
  const [hint, setHint] = useState("");
  const [coupon, setCoupon] = useState("");
  const [soonPossible, setSoonPossible] = useState(true);
  const [schedule, setSchedule] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [date, setDate] = useState(
    new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  );
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(
      date.toLocaleDateString("en-us", {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    );

    hideDatePicker();
  };
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-us", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = (time) => {
      console.log(time.toLocaleTimeString("en-us", { hour: "2-digit", minute: "2-digit" }));
    setTime(
      time.toLocaleTimeString("en-us", { hour: "2-digit", minute: "2-digit" })
    );

    hideTimePicker();
  };
  return (
    <View style={gs.container}>
      <View style={[gs.row, gs.spaceBetween]}>
        <AntDesign name="left" size={24} color="black" />
        <Text style={[gs.bold, styles.colorText]}>Book An Appointment</Text>
        <Text></Text>
      </View>
      <ScrollView style={{ marginBottom: 120 }}>
        <View style={styles.inputContainer}>
          <Text style={gs.bold}>Your Address</Text>
          <View style={styles.border} />
          <View style={[gs.row, gs.alignCenter, gs.spaceBetween]}>
            <View style={gs.row}>
              <TextInput
                style={styles.input}
                value={address}
                onChangeText={(text) => setAddress(text)}
                placeholder="39 Street of NY, New York City, USA"
              />
            </View>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={gs.bold}>A Hint for the Doctor</Text>
          <View style={styles.border} />
          <View style={[gs.row, gs.alignCenter, gs.spaceBetween]}>
            <View style={gs.row}>
              <Ionicons
                name="document-text-outline"
                size={24}
                color="#8c9da7"
              />

              <TextInput
                style={styles.input}
                value={hint}
                onChangeText={(text) => setHint(text)}
                placeholder="Hint"
              />
            </View>
          </View>
        </View>
        <View style={styles.inputContainerCoupon}>
          <View
            style={[
              gs.row,
              gs.alignCenter,
              gs.spaceBetween,
              styles.couponContainer,
            ]}
          >
            <View
              style={[
                gs.row,
                gs.spaceBetween,
                gs.alignCenter,
                styles.couponContainer,
              ]}
            >
              <View style={gs.row}>
                <AntDesign name="aliyun" size={24} color="#8c9da7" />
                <TextInput
                  style={styles.input}
                  value={coupon}
                  onChangeText={(text) => setCoupon(text)}
                  placeholder="Coupon1"
                />
              </View>
              <TouchableOpacity style={styles.validateCouponBtn}>
                <Text>Validate</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={
            soonPossible ? styles.checkboxChecked : styles.checkboxUnchecked
          }
          onPress={() => (setSoonPossible(true), setSchedule(false))}
        >
          {soonPossible && (
            <MaterialIcons
              name="radio-button-checked"
              size={26}
              color="white"
            />
          )}
          {!soonPossible && (
            <MaterialIcons
              name="radio-button-unchecked"
              size={24}
              color="#757575"
            />
          )}
          <Text
            style={
              soonPossible
                ? [gs.textWhite, gs.bold, styles.ml12]
                : [gs.bold, styles.ml12]
            }
          >
            As Soon as Possible
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={schedule ? styles.checkboxChecked : styles.checkboxUnchecked}
          onPress={() => (setSchedule(true), setSoonPossible(false))}
        >
          {schedule && (
            <MaterialIcons
              name="radio-button-checked"
              size={26}
              color="white"
            />
          )}
          {!schedule && (
            <MaterialIcons
              name="radio-button-unchecked"
              size={24}
              color="#757575"
            />
          )}
          <Text
            style={
              schedule
                ? [gs.textWhite, gs.bold, styles.ml12]
                : [gs.bold, styles.ml12]
            }
          >
            Schedule an Order
          </Text>
        </TouchableOpacity>
{schedule &&
        <View style={styles.timeContainer}>
          <View style={[gs.row, gs.spaceBetween]}>
            <Text style={{ width: "60%" }}>
              When would you like us to come to your address?
            </Text>
            <TouchableOpacity style={styles.timeBtn} onPress={showDatePicker}>
              <Text style={styles.timeBtnText}>Select a Date</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
          <View style={styles.border} />
          <View style={[gs.row, gs.spaceBetween]}>
            <Text style={{ width: "60%" }}>
              At What's time you are free in your address?
            </Text>
            <TouchableOpacity style={styles.timeBtn} onPress={showTimePicker}>
              <Text style={styles.timeBtnText}>Select a Time</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleConfirmTime}
              onCancel={hideTimePicker}
            />
          </View>
        </View>}

 <View style={{marginVertical:20}}>
 <View style={gs.center}>
 <Text style={gs.bold}>Requested Service on</Text>
 <Text style={[gs.fontL, gs.bold, styles.mt12]}>{date}</Text>
 <Text style={[gs.fontL, gs.bold]}>At {time}</Text>
</View>
 </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={[gs.textCenter, gs.textWhite, gs.bold, gs.fontDefault]}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookAnAppointment;

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
    height: 120,
    backgroundColor: "#f4f5f7",
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
    height: 60,
    marginHorizontal: 20,
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
  ml12: {
    marginLeft: 12,
  },
  checkboxUnchecked: {
    width: "90%",
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    height: 60,
    marginHorizontal: 20,
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 20,
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
  },
});
