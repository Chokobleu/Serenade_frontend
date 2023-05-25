import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import globalStyles from "../../utils/globalStyles";
import CardMessageContainer from "../components/CardMessageContainer";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment/moment";

const url = "http://192.168.10.170:3000";




const MessagesScreen = ({ navigation }) => {

  const [dataMessages, setDataMessages] = useState([]);
  const token = useSelector((state) => state.user.token);


  useEffect(() => {

    fetch(`${url}/users/chat/allMessages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    }).then(response => response.json())
      .then(data => {
        setDataMessages(data)

      });

  }, []);


  const message = dataMessages.map((data, i) => {
    if(data.lastMessage){
    const time = moment(data.lastMessage.date).format('LT');
    if(!time){
      time = "00:00 AM"
    }

    
    return (

      <TouchableOpacity
      key={i}
        onPress={() => {
          navigation.navigate("ChatScreen", { matchId: data.id });
        }}
      >

        <CardMessageContainer
          key={i}
          image={data.user.pictures[0]}
          name={data.user.name}
          message={data.lastMessage.content}
          time={time}
        />

      </TouchableOpacity>

    );
  }
  });

  return (
    <View style={globalStyles.screen}>
      <View className="mt-10">
        <Text style={globalStyles.titleText} className="mb-4">
          My Messages
        </Text>
        <Text style={globalStyles.mainText}>
          Find your alterego among one of these people
        </Text>
      </View>
      <View style={styles.horizontalLine} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={globalStyles.container}>
          <View>
            <View style={styles.profilcontainer}>{message}</View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalLine: {
    width: "100%",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 0,
  },
  scrollViewContent: {
    flexGrow: 1,
  },

  profilcontainer: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

export default MessagesScreen;
