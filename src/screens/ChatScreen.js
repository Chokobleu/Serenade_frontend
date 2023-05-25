import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import React from "react";
import globalStyles from "../../utils/globalStyles";
import UserAvatar from "../components/UserAvatar";
import ChatRecipientMessage from "../components/ChatRecipientMessage";
import ChatSenderMessage from "../components/ChatSenderMessage";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Header from "../components/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import User from "../../reducers/User";
import { useRoute } from '@react-navigation/native';
import moment from "moment/moment";


const url = "http://192.168.10.170:3000";



const ChatScreen = () => {
  // Initialization calculation scrollview height for display the end
  //-------------------------------------------------------------

  const scrollViewRef = useRef();
  const [isScrollViewAtEnd, setIsScrollViewAtEnd] = useState(false);
  const [messageText, setMessageText] = useState("");
  const token = useSelector((state) => state.user.token);

  const route = useRoute();
  const { matchId } = route.params;

  let recipientAvatar = "";
  let recipientName = "";

  //-------------------------------------------------------------


  const [messages, setMessages] = useState([])

  // Diplay end of scrollview at the first opening
  //-------------------------------------------------------------


const loadMessages=()=>{
  fetch(`${url}/users/chat/oneRoomMessages`, {

    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ matchId }),
  }).then(response => response.json())
    .then(data => {
      setMessages(data.messages)

    });



}


  useEffect(() => {
    loadMessages()
  }, []);

  useEffect(() => {
    if (isScrollViewAtEnd) {
      scrollViewRef.current.scrollToEnd({ animated: false });
    }
  }, [isScrollViewAtEnd]);

  const handleScrollViewLayout = () => {
    setIsScrollViewAtEnd(true);
  };

  // setTimeout(() =>{
  //   loadMessages()
  // },2000)

  //--------------------------------------------------------------
  // const avatarImage =
  //   "https://images.pexels.com/photos/1382726/pexels-photo-1382726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  // Send messages
  //--------------------------------------------------------------


  const handleSendMessage = () => {

    if(messageText){
    const date = new Date();

    userToken = token

    const messageData = {
      author: token,
      content: messageText,
      date: date
    }
    


    fetch(`${url}/users/chat/addMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messageData, matchId, userToken }),
    }).then(response => response.json())
      .then(data => {
        console.log(messages)

        if (data.result) {
          loadMessages()
        }

      }); setMessageText("");
    };
  };

  // Dislike
  //--------------------------------------------------------------

  const handleDismatch = () => {
    console.log("handleDismatch");
  };

  // Initialisation messages views
  //--------------------------------------------------------------

  const allMessages = messages.map((data, i) => {

    const time = moment(data.date).format('LT');
    if (!time) {
      time = "00:00 AM"
    }

    const image = data.author.pictures[0];

    if (data.author.token != token) {
      if (recipientAvatar == "") {
        recipientAvatar = image;
      }
      if (recipientName == "") {
        recipientName = data.author.name;
      }
      return (
        <ChatRecipientMessage
          key={i}
          date={time}
          text={data.content}
          connected={true}
          size={40}
          avatarImage={recipientAvatar}
          avatarDisplay={true}
        />
      );
    } else {
      return <ChatSenderMessage key={i} date={time} text={data.content} />;
    }
  });

  //--------------------------------------------------------------

  return (
    <View style={globalStyles.screen}>
      <View style={styles.header}>
        <View style={styles.topHeader}>
          <View className="w-1/6">
            <Header />
          </View>

          <View style={styles.user} className="w-3/6 items-center">
            <UserAvatar
              connected={true}
              size={70}
              avatarImage={recipientAvatar}
              avatarDisplay={true}
            />
          </View>
          <View className="w-1/6 items-center">
            <TouchableOpacity
              onPress={() => handleDismatch()}
              className="w-7 h-7 bg-white rounded-full justify-center items-center"
            >
              <MaterialCommunityIcons
                name="heart-broken"
                size={24}
                color={globalStyles.primaryColor}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.headerText}>{ recipientName }</Text>
        <View style={styles.headerBorder} />
      </View>

      <ScrollView
        style={styles.scroll}
        className="p-6"
        ref={scrollViewRef}
        onLayout={handleScrollViewLayout}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
        contentContainerStyle={styles.scrollContentContainer}
      >
        {allMessages}
      </ScrollView>

      <View keyboardShouldPersistTaps="handled" style={styles.sendContainer}>
        <View style={styles.inputContainer}>
          {/* <FontAwesome
            name="paperclip"
            style={styles.papeclip}
            color="#EC7955"
            size={26}
          /> */}
          <TextInput
            onChangeText={(value) => setMessageText(value)}
            placeholder={"Type a message"}
            value={messageText}
            style={[styles.input, globalStyles.mainTextBlack]}
          />
          <TouchableOpacity
            onPress={() => handleSendMessage()}
            style={styles.sendButton}
          >
            <FontAwesome name="send" color="#ffffff" size={16} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // header
  //----------------------------------------

  topHeader: {
    width: "100%",
  },

  header: {
    width: "100%",
    alignItems: "center",
    marginTop: 25,
  },

  topHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 25,
    paddingLeft: 25,
    alignItems: "center",
  },

  headerText: {
    color: "#ffffff",
    fontSize: 18,
    marginTop: 5,
  },

  headerBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#ffffff",
    width: "100%",
    height: 10,
  },

  // messages content
  //----------------------------------------

  scroll: {
    flex: 1,
  },

  scrollContentContainer: {
    flexGrow: 1,
    justifyContent: "flex-end",
    paddingBottom: 30,
  },

  // send messages container
  //----------------------------------------

  sendContainer: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },

  inputContainer: {
    width: 327,
    height: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    marginTop: "auto",
    background: "transparent",
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#ffffff",
    borderRadius: 32,
  },

  input: {
    width: "70%",
    borderRadius: 30,
    color: "#1D2635",
  },

  sendButton: {
    borderRadius: 50,
    backgroundColor: "#EC7955",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    width: 32,
    color: "#EC7955",
  },
});

export default ChatScreen;
