import { View, Text, StyleSheet } from "react-native";
import React from "react";
import globalStyles from "../../utils/globalStyles";

const ChatSenderMessage = (props) => {

  return (
    <View style={styles.message2Container}> 

        <View style={styles.message2}>
            <View style={styles.date2}>
                <Text style={styles.dateText}>{props.date}</Text>
            </View>
            <View style={styles.textContainer2}>
                <Text style={styles.text} >{props.text}</Text>
            </View>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({

date2: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft:15,
    paddingBottom:5,
    },

dateText: {
    color:"#F0D3C9",
    fontSize:14,
    },
    
message2:{
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"stretch",
    maxWidth:"70%",
    },

message2Container: {
    marginTop:20,
    flexDirection:"row",
    justifyContent: "flex-end",
    width:"100%"
    },

text:{
    fontSize:16,
    lineHeight:22,
    color:"#ffffff"
    },

textContainer2:{
    backgroundColor:"#EC7955",
    color:"#ffffff",
    minHeight:38,
    // justifyContent:"center",
    padding:15,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:0,
    },


})

export default ChatSenderMessage;