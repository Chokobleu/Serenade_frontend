import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import globalStyles from "../../utils/globalStyles";
import { Button, Card } from "react-native-paper";
import { StyleSheet } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

const MatchScreen = () => { 
  return (
    <View style={globalStyles.screen}>
    <View style={globalStyles.container}>
      <Text style={[globalStyles.titleText, {alignItems: 'center',
        alignSelf: 'center'}]}>Congratulations</Text>
      <Card style={{ top: 50, width: 200, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
        <Card.Content>
          <Text>
          </Text>
        </Card.Content>
      </Card>
      <Card
        style={{
          backgroundColor: globalStyles.primaryColor,
          transform: [{ rotate: "-10deg" }],
          width: 200,alignItems: 'center', justifyContent: 'center', alignSelf: 'center'
        }}
      >
        <Card.Content>
          <Text style={{ textAlign: "center", color: "white", fontSize: 17 }}>
            It's a Match
          </Text>
        </Card.Content>
      </Card>
      <View style={styles.images}>
        <Image
          style={styles.pics}
          source={require("../../assets/Match1.jpg")}
        />
        
        <Image
          style={styles.pics2}
          source={require("../../assets/Match2.jpg")}
        />
      </View>
      <Text style={styles.textMatch}>Noemy's match</Text>
        <Text style={styles.textMatch2}>Let’s ask her about something interesting
            or you can just start with “Hello”</Text>
        <Button style={styles.button} icon="hand-back-left" mode="contained">
            <TouchableOpacity>
                <Text style={styles.text}>Say Hello </Text>
            </TouchableOpacity>
        </Button>
        {/* <TouchableOpacity> */}
            <Text style={styles.textMatch3}>Not Now, I’ll Talk Later</Text>
        {/* </TouchableOpacity> */}
      <View style={styles.iconContainer}>
        <FontAwesome name="heart" size={24} style={styles.heart}/>
      </View>
      </View>
    </View>
  );
};

export default MatchScreen;

const styles = StyleSheet.create({
  images: {
    flex: 1,
    flexDirection: "row",
    // padding: 50,
  },
  pics: {
    top: 60,
    width: "50%",
    height: "40%",
    alignSelf: "flex-start",
    borderRadius: 50,
    transform: [{ skewX: "-7deg" }],
  },
  pics2: {
    top: 120,
    width: "50%",
    height: "40%",
    borderRadius: 50,
    transform: [{ skewX: "-7deg" }],
  },
    heart: {
    top: 360,
    fontSize: 60,
    color: globalStyles.primaryColor,
    },
    iconContainer: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    shadowColor: "#FFFFFF",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    },
    textMatch: {
        position: "absolute",
        top: 560,
        fontSize: 20,
        color: globalStyles.whiteColor,
        textAlign: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    textMatch2: {
        position: "absolute",
        top: 610,
        fontSize: 15,
        color: globalStyles.whiteColor,
        textAlign: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    button: {
        position: "absolute",
        top: 680,
        width: 360,
        height: 40,
        backgroundColor: globalStyles.primaryColor,
        alignItems: "center",
        alignSelf: "center",
    },
    textMatch3: {
        position: "absolute",
        top: 750,
        fontSize: 15,
        color: globalStyles.primaryColor,
        textAlign: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    text: {
        fontSize: 15,
        color: globalStyles.whiteColor,
        textAlign: "center",
        alignItems: "center",
        alignSelf: "center",
    },
});
