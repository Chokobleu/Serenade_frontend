import { View, Text, StyleSheet, Image, FlatList, Modal, TouchableOpacity, Animated, TouchableWithoutFeedback  } from "react-native";
import React from "react";
import globalStyles from "../../utils/globalStyles";
import { useState, useRef, useEffect } from "react";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DropDownMenu = (props) => {

    const { menuOptions, placeHolder } = props;
    const [selectedOption, setSelectedOption] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleMenuPress = () => {
        setModalVisible(true);
      };
    
      const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setModalVisible(false);
      };
    
  return (
    <View style={styles.container}>
    
        <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
            <Text style={styles.menuButtonText}>
            {selectedOption !== '' ? selectedOption : placeHolder}
            </Text>        
            <FontAwesome name='heart' color="#ffffff" size={20} />
        </TouchableOpacity>
    
      <Modal visible={modalVisible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              {menuOptions.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={styles.optionButton}
                  onPress={() => handleOptionSelect(option)}
                >
                  <Text style={styles.optionButtonText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>

  );

};

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#1d2635',
        borderBottomColor: "white",
        borderBottomWidth:1,
        width:"100%",
      },

      menuButton: {
        flexDirection: "row",
        justifyContent:"space-between",

      },
      menuButtonText: {
        color: '#888888',
        fontSize: 16,
        marginBottom: 5,
        alignSelf:"flex-start",
      },

      // Transparent container in modal
      modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(29,38,53, 1)',
      },

      // Container with options in modal
      modalContainer: {
        width: '70%',
        backgroundColor: '#1D2635',
        borderRadius: 5,
        paddingTop: 20,
        paddingBottom: 20,
      },
      optionButton: {
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#888888',
      },
      optionButtonText: {
        color: '#EC7955',
        fontSize: 16,
      },

})

export default DropDownMenu;