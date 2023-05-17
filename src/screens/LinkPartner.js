import { View, Text, Modal, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useState, useRef, useEffect } from "react";
import globalStyles from "../../utils/globalStyles";
import { FontAwesome } from "@expo/vector-icons";
import { Feather} from "@expo/vector-icons";
import { TextInput, Button } from 'react-native-paper';
import LinkPartnersAdd from "../components/LinkPartnersAdd";
import LinkPartnersRemove from "../components/LinkPartnersRemove";


const LinkPartner = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = React.useState("");
  
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openModal}>
        <Text style={styles.font}>Link Partner</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
        style={styles.modal}
      >
        <View style={[globalStyles.screen, {marginTop: '50%' ,maxHeight: '100%',
            borderTopLeftRadius: 50, borderTopRightRadius: 50}]}>
          <View style={globalStyles.container}>
            <TouchableOpacity style={styles.element} onPress={closeModal}>
                <Feather name="x-circle" size={40} color="white" style={styles.font}/>
            </TouchableOpacity>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.search}>
            <TextInput
                mode='flat'
                right={
                <TextInput.Icon icon="magnify" size={30} iconColor="white"/>}
                style={styles.input}
                underlineColor="white"
                textColor="white"
                placeholder="Enter your partner’s imaginary name"
                placeholderTextColor="white"
                activeUnderlineColor= {globalStyles.primaryColor}
            />
            <Text style={[globalStyles.titleText, {marginBottom: 20}]}>1 Person found</Text>
          </View>
            <View>
                <LinkPartnersAdd />
            </View>
            <Text style={[globalStyles.titleText, {marginBottom: 20}]}>My relationships:</Text>
            <View>
                <LinkPartnersRemove />
                <LinkPartnersRemove />
                <LinkPartnersRemove />
                <LinkPartnersRemove />
                <LinkPartnersRemove />
            </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    
  font: {
    alignSelf: "flex-end",
    color: "white",
  },
    element: {
        flexDirection: "row",
        alignSelf: "flex-end",
        marginBottom: 40,
    },
    search: {
    },
    input: {
        width: "90%",
        backgroundColor: "transparent",
        marginBottom: 20,
        paddingHorizontal: 0,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
});

export default LinkPartner;
