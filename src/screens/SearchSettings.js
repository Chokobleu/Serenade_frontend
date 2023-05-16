import { View, Text, StyleSheet, Image, FlatList, Modal, TouchableOpacity } from "react-native";
import React from "react";
import globalStyles from "../../utils/globalStyles";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { useState } from "react";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SearchSettingsScreen = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
  
    const menuItems = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
      { id: 3, name: 'Option 3' },
      // ... Add more options as needed
    ];
  
    const handleMenuItemPress = (option) => {
      setSelectedOption(option);
      setIsModalVisible(false);
    };
  
    const renderMenuItem = ({ item }) => (
      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress(item)}>
        <Text style={styles.menuItemText}>{item.name}</Text>
      </TouchableOpacity>
    );

// Settings of multi slider - age
//-----------------------------------------
    
    const [values, setValues] = useState([0, 50, 100]);

    const CustomMarker = ({ currentValue }) => (
        <View style={styles.markerContainer}>      
        <Image source={require('../../assets/circle.png')} style={styles.sticker} />
    
        <View style={styles.markerValue}><Text style={styles.markerTextValue}>{currentValue}</Text></View>
        </View>
    );


// Save values of multi slider - age
//------------------------------------------

    const handleValuesChange = (newValues) => {
        setValues(newValues);
        console.log(values)
    };

// Settings of multi slider - distance
//------------------------------------------

const [values2, setValues2] = useState([0, 50, 100]);


const CustomMarker2 = ({ currentValue }) => (
    <View style={styles.markerContainer}>      
    <Image source={require('../../assets/circle.png')} style={styles.sticker} />
      <View style={styles.markerValue}><Text style={styles.markerTextValue}>{currentValue}</Text></View>
    </View>
  );
  

  // Save values of multi slider - distance
//------------------------------------------

  const handleValues2Change = (newValues) => {
    setValues2(newValues);
    console.log(values2)
};

    // const [selectedItem, setSelectedItem] = useState(null);
    // const dropdownItems = ['Opuuution 1', 'Option 2', 'Option 3', 'Option 4'];
  
    // const handleDropdownSelect = (index, option) => {
    //   setSelectedItem(option);
    // };
  


  return (
    <View style={[globalStyles.screen, globalStyles.container, styles.content, {backgroundColor:"white"}]}>

        <Text style={[globalStyles.titleText, styles.title]}>Maximum distance</Text>


{/* Display of multi slider - distance 
------------------------------------------ */}

            <View style={styles.multiSliderContainer}>

                <View style={styles.iconContainer}>
                    <FontAwesome name="bullseye"  size={26}  style={styles.icon1} />
                </View>

                <View style={styles.multiSlider}>
                <View style={styles.headerSlider} >
                    <View style={styles.min} ><Text style={styles.minMaxText}>0 km</Text></View>
                    <View style={styles.max} ><Text style={styles.minMaxText}>max</Text></View>
                </View>
                <MultiSlider
                    values={[30]}
                    sliderLength={250}
                    onValuesChange={handleValues2Change}
                    min={0}
                    max={250}
                    step={5}
                    allowOverlap
                    snapped
                    customMarker={CustomMarker2}
                    selectedStyle={{backgroundColor: "#EC7955"}}
                />
                </View>

                <View style={styles.iconContainer}>
                    <FontAwesome name="plus-circle" size={26}  style={styles.icon2} />
                </View>

            </View>


            <Text style={[globalStyles.titleText, styles.title]}>Age range</Text>


{/* Display of multi slider - age 
------------------------------------------ */}

            <View style={styles.multiSliderContainer}>


            <View style={styles.iconContainer}>
                <FontAwesome name="bullseye" size={26}  style={styles.icon1} />
            </View>

            <View style={styles.multiSlider}>

            <View style={styles.headerSlider} >
                    <View style={styles.min} ><Text style={styles.minMaxText}>18 years</Text></View>
                    <View style={styles.max} ><Text style={styles.minMaxText}>max</Text></View>
                </View>


            <MultiSlider
                values={[30, 55]}
                sliderLength={250}
                onValuesChange={handleValuesChange}
                min={18}
                max={99}
                step={1}
                allowOverlap
                snapped
                customMarker={CustomMarker}
                selectedStyle={{backgroundColor: "#EC7955"}}
            />
                </View>

                <View style={styles.iconContainer}>
                    <FontAwesome name="plus-circle" size={26}  style={styles.icon2} />
                </View>

            </View>

        

    {/* Display drop down menu 
    ------------------------------------------ */}
<View style={styles.container}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => setIsModalVisible(true)}
      >
        <Text style={styles.menuButtonText}>{selectedOption ? selectedOption.name : 'Select an option'}</Text>
        <FontAwesome name='heart' color="black" size={20} />
      </TouchableOpacity>

      <Modal visible={isModalVisible} animationType="fade" transparent>
        <View style={styles.modalContainer}>
          <FlatList
            data={menuItems}
            renderItem={renderMenuItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.menuList}
          />

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>

    </View>
  );

};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:"100%"
      },
      menuButton: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flexDirection:"row",
        justifyContent: "space-between",
        width: "100%",

      },
      menuButtonText: {
        fontSize: 16,
      },
      modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        width:"100%",
        height:"100%",
      },
      menuList: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 4,
        marginTop:100,
        width:300,
      },
      menuItem: {
        paddingVertical: 8,
      },
      menuItemText: {
        fontSize: 16,
      },
      closeButton: {
        marginTop: 20,
      },
      closeButtonText: {
        fontSize: 20,
        color: 'grey',
      },


//-----------------------------------------------------------
    markerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:5,
    },

    markerValue: {
      width:40,
      height:22,
      backgroundColor:"#666666",
      borderRadius:20,
      marginTop:5,
      
    },

    markerTextValue: {
        color: 'white',
        alignSelf:"center",
        fontSize:13,
      },

    sticker: {
      width: 18,
      height: 18,
      marginTop: 18,
    },

    sliderWidth: {
        width:"100%",
      },

    multiSliderContainer: {
        flexDirection:"row",
    },

    iconContainer: {
        width:"10%",
        justifyContent:"center",
    },

    multiSlider: {
        width:"80%",
        paddingLeft:12,
    },

    icon1:{
        alignSelf:"flex-start",
        color:"#EC7955",
    },

    icon2:{
        alignSelf:"flex-end",
        color:"#EC7955"
    },

    content: {
        alignItems: "flex-start",
    },

    title: {
        marginTop:20,
        marginBottom: 10,
    },

    headerSlider: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    min: {
        height: 20,
        alignItems: "flex-start",
    },

    max: {
        height: 20,
        alignItems: "flex-end",
    },

    minMaxText: {
        color: "white",
    }
    });

export default SearchSettingsScreen;