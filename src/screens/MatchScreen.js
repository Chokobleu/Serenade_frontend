import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useState, useRef } from "react";
import globalStyles from "../../utils/globalStyles";
import { StyleSheet } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Chip} from "react-native-paper";
import { Ionicons } from '@expo/vector-icons'; 
import ConfettiCannon from 'react-native-confetti-cannon';

const MatchScreen = () => { 
  const [confettiActive, setConfettiActive] = useState(false);
  const confettiRef = useRef(null);

  const startConfetti = () => {
    setConfettiActive(true);
    confettiRef.current.start();
  };

  const stopConfetti = () => {
    setConfettiActive(false);
    confettiRef.current.stop();
  };
  return (
    <View style={globalStyles.screen}>
    <View style={globalStyles.container}>
      <Text style={[globalStyles.titleText, {alignItems: 'center',
        alignSelf: 'center', marginBottom: 50}]}>Congratulations</Text>
      <View style={styles.chips}>
      <Chip style={styles.chip1}></Chip>
      <Chip style={styles.chip2}>
          <Text style={styles.text}>
            It's a Match
          </Text>
      </Chip>
      </View>
      <View style={styles.images}>
        <Image
          style={styles.pics}
          source={require("../../assets/Match1.jpg")}
        />
        <Image
          style={styles.pics2}
          source={require("../../assets/Match2.jpg")}
        />
        <View style={styles.iconContainer}>
          <FontAwesome name="heart" size={24} style={styles.heart}/>
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.textMatch}>Noemy's match</Text>
          <Text style={styles.textMatch2}>Let’s ask her about something interesting
              or you can just start with “Hello”</Text>
          
          <TouchableOpacity>
          <Chip style={styles.button} mode="contained">
              <Text style={styles.text}>Say Hello <Ionicons name="hand-left" size={15} color="white" /> </Text>
          </Chip>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>startConfetti()}>
              <Text style={styles.textMatch3}>Not Now, I’ll Talk Later</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ConfettiCannon
        ref={confettiRef}
        count={200}
        origin={{ x: -10, y: 0 }}
        colors={['#FFC0CB', '#FFA500', '#FFFF00', '#00FF00', '#0000FF']}
        explosionSpeed={500}
        autoStart={false} // Disables automatic confetti start
      />
    </View>
  );
};

export default MatchScreen;

const styles = StyleSheet.create({
  chips: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  chip1: {
    position: 'absolute',
    height: 45,
    width: 200,
  },
  chip2: {
    backgroundColor: globalStyles.primaryColor,
    transform: [{ rotate: "-10deg" }], 
    height: 45,
    width: 200,
    alignItems: 'center', 
    justifyContent: 'center', 
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
  },
  images: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  pics: {
    width: '50%',
    height: 250,
    borderRadius: 50,
    transform: [{ skewX: "-7deg" }],
  },
  pics2: {
    width: '50%',
    height: 250,
    borderRadius: 50,
    transform: [{ skewX: "-7deg" }],
    marginTop: 80,
  },
    heart: {
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
        fontSize: 20,
        color: globalStyles.whiteColor,
        textAlign: "center",
        alignItems: "center",
        alignSelf: "center",
        marginBottom: 20,
    },
    textMatch2: {
        fontSize: 15,
        color: globalStyles.whiteColor,
        textAlign: "center",
        alignItems: "center",
        alignSelf: "center",
        marginBottom: 20,
    },
    button: {
        width: 360,
        height: 40,
        backgroundColor: globalStyles.primaryColor,
        alignItems: "center",
        alignSelf: "center",
        marginBottom: 10,
    },
    textMatch3: {
        fontSize: 15,
        color: globalStyles.primaryColor,
        textAlign: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    info: {
        marginTop: 50,
    },
});
