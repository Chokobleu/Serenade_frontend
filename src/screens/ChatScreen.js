import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";
import React from "react";
import globalStyles from "../../utils/globalStyles";
import ChatUserAvatar from "../components/ChatUserAvatar";
import ChatRecipientMessage from "../components/ChatRecipientMessage";
import ChatSenderMessage from "../components/ChatSenderMessage";

const ChatScreen = () => {

  const [messages, setMessages] = useState([
    {
      "firstname": "Alice",
      "message": "Salut Bob, comment vas-tu ?",
      "date": "2022-04-10T14:30:00Z"
    },
    {
      "firstname": "Bob",
      "message": "Salut Alice, ça va bien, merci ! Et toi ?",
      "date": "2022-04-10T14:32:00Z"
    },
    {
      "firstname": "Alice",
      "message": "Je vais bien aussi, merci. Quoi de neuf ?",
      "date": "2022-04-10T14:35:00Z"
    },
    {
      "firstname": "Bob",
      "message": "Pas grand-chose, et toi ?",
      "date": "2022-04-10T14:38:00Z"
    },
    {
      "firstname": "Alice",
      "message": "Rien de spécial non plus. Tu as des projets pour ce week-end ?",
      "date": "2022-04-10T14:40:00Z"
    },
    {
      "firstname": "Bob",
      "message": "Pas vraiment, je pense que je vais rester à la maison. Et toi ?",
      "date": "2022-04-11T14:42:00Z"
    },
    {
      "firstname": "Alice",
      "message": "Je vais probablement sortir avec des amis samedi soir. Tu veux te joindre à nous ?",
      "date": "2022-04-20T14:45:00Z"
    },
    {
      "firstname": "Bob",
      "message": "Je ne sais pas encore, je te tiendrai au courant. Tu vas où ?",
      "date": "2022-04-20T14:48:00Z"
    },
    {
      "firstname": "Alice",
      "message": "On va au restaurant italien près de chez moi, à 20h.",
      "date": "2022-04-20T14:50:00Z"
    },
    {
      "firstname": "Alice",
      "message": "On va au restaurant italien près de chez moi, à 20h.",
      "date": "2022-04-20T14:50:00Z"
    },
    {
      "firstname": "Bob",
      "message": "OK, je te tiens au courant. À plus tard !",
      "date": "2022-04-20T14:52:00Z"
    },
    {
      "firstname": "Alice",
      "message": "À plus tard !",
      "date": "2022-04-20T14:53:00Z"
    },
    {
      "firstname": "Bob",
      "message": "Salut Alice, finalement je ne pourrai pas venir ce soir. Désolé.",
      "date": "2022-04-21T10:00:00Z"
    },
    {
      "firstname": "Alice",
      "message": "Pas de soucis, une prochaine fois alors !",
      "date": "2022-04-21T10:02:00Z"
    },
    {
      "firstname": "Bob",
      "message": "Oui, absolument. Tu me raconteras comment c'était.",
      "date": "2022-04-21T10:15:00Z"}
    ]);

  const size = 60;
  const connected = "flex";
  // const image = ;
  const avatarImage = { img: require("../../assets/avatar.jpg")};
  const avatarDisplay = "flex";

  const text = "Coucou c'est moi !";
  const date = "01:23 am";
    console.log(messages);

  const allMessages = messages.map((data, i) => {
    console.log(data.date);
    const date = new Date(data.date);
    console.log(date);
    const hours = date.getHours()+":"+date.getMinutes()+" am"
    if(data.firstname == "Alice"){
    return <ChatRecipientMessage date={hours} text={data.message} connected={connected} size={size} avatarImage={avatarImage.img} avatarDisplay={avatarDisplay}  />;
  }
  else{
    return <ChatSenderMessage date={hours} text={data.message}/>
  }
  });


  console.log(avatarImage)

  return (
    <ScrollView style={globalStyles.screen2} className="p-6">
      {allMessages}
      <ChatRecipientMessage date={date} text={text} connected={connected} size={size} avatarImage={avatarImage.img} avatarDisplay={avatarDisplay}  />
      <ChatSenderMessage date={date} text={text}  />

    </ScrollView>
  );


};

  const styles = StyleSheet.create({
    screen2: {
      flex: 1,
      backgroundColor: "#1d2635",
    },
  })

export default ChatScreen;