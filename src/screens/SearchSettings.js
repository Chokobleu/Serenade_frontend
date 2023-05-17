import { View, Text, StyleSheet, Image, FlatList, Modal, TouchableOpacity, Animated, TouchableWithoutFeedback } from "react-native";
import React from "react";
import globalStyles from "../../utils/globalStyles";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { useState, useRef, useEffect } from "react";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DropDownMenu from '../components/DropDownMenu';

const SearchSettingsScreen = () => {



    const menuGender = ['Man', 'Woman', 'No Binary', 'Man', 'Woman', 'No Binary', 'Man', 'Woman', 'No Binary'];
    const menuLocation = ['Paris', 'Marseille', 'Bordeaux', 'Toulouse', 'Colombes', 'Taverny', 'Creil', 'Créteil'];
    const menuSexuality = ['heterosexual', 'bisexual', 'pansexual'];

    const placeHolderGender = "Gender";
    const placeHolderLocation = "City";
    const placeHolderSexuality = "Sexuality";

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


    return (
        <View style={[globalStyles.screen, globalStyles.container, styles.content]}>

            <Text style={[globalStyles.titleText, {alignSelf:"center"}]}>Search setting</Text>
            <Text style={[globalStyles.mainText, {alignSelf:"center", fontSize:14}]}>Refine your search</Text>




            {/* Display drop down menu location
    ------------------------------------------ */}
            <View style={{ width: "100%" }}>

                <Text style={[globalStyles.titleText, styles.title]}>Your current location</Text>

                <DropDownMenu menuOptions={menuLocation} placeHolder={placeHolderLocation} />

            </View>

            {/* Display of multi slider - distance 
------------------------------------------ */}
            <View style={styles.section}>

                <Text style={[globalStyles.titleText, styles.title]}>Maximum distance</Text>

                <View style={styles.multiSliderContainer}>

                    <View style={styles.iconContainer}>
                        <FontAwesome name="bullseye" size={26} style={styles.icon1} />
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
                            selectedStyle={{ backgroundColor: "#EC7955" }}
                        />
                    </View>

                    <View style={styles.iconContainer}>
                        <FontAwesome name="plus-circle" size={26} style={styles.icon2} />
                    </View>

                </View>

            </View>


            {/* Display of multi slider - age 
------------------------------------------ */}
            <View style={styles.section}>

                <Text style={[globalStyles.titleText, styles.title]}>Age range</Text>

                <View style={styles.multiSliderContainer}>


                    <View style={styles.iconContainer}>
                        <FontAwesome name="bullseye" size={26} style={styles.icon1} />
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
                            selectedStyle={{ backgroundColor: "#EC7955" }}
                        />
                    </View>

                    <View style={styles.iconContainer}>
                        <FontAwesome name="plus-circle" size={26} style={styles.icon2} />
                    </View>

                </View>



            </View>


            {/* Display drop down menu gender
    ------------------------------------------ */}
            <View style={styles.section}>

                <Text style={[globalStyles.titleText, styles.title]}>What you are looking for</Text>

                <DropDownMenu menuOptions={menuGender} placeHolder={placeHolderGender} />

            </View>


            {/* Display drop down menu location
    ------------------------------------------ */}
            <View style={styles.section}>

                <Text style={[globalStyles.titleText, styles.title]}>You consider yourself to be</Text>

                <DropDownMenu menuOptions={menuSexuality} placeHolder={placeHolderSexuality} />

            </View>

            {/* Valid setting button
    ------------------------------------------ */}
            <TouchableOpacity style={styles.validButton}><Text style={styles.textButton}>Save my preferences</Text></TouchableOpacity>

        </View>
    );

};

const styles = StyleSheet.create({

//    à supprimer quand bouton implanté
// ---------------------------------------
   
    validButton : {
        marginTop:30,
        backgroundColor: "#EC7955",
        borderRadius:10,
        height:48,
        width:"90%",
        justifyContent:"center",
        alignItems:"center",

    },

    textButton: {
        alignSelf: "center"
    },
    
 // ---------------------------------------
   
    section: {
        paddingTop: 20,
        width: "100%",
    },

    // Multi sliders - age & distance
    //-----------------------------------------------------------
    markerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },

    markerValue: {
        width: 40,
        height: 22,
        backgroundColor: "#666666",
        borderRadius: 20,
        marginTop: 5,

    },

    markerTextValue: {
        color: 'white',
        alignSelf: "center",
        fontSize: 13,
    },

    sticker: {
        width: 18,
        height: 18,
        marginTop: 18,
    },

    sliderWidth: {
        width: "100%",
    },

    multiSliderContainer: {
        flexDirection: "row",
    },

    iconContainer: {
        width: "10%",
        justifyContent: "flex-start",
    },

    multiSlider: {
        width: "80%",
        paddingLeft: 12,
    },

    icon1: {
        alignSelf: "flex-start",
        color: "#EC7955",
        paddingTop:32,
    },

    icon2: {
        alignSelf: "flex-end",
        color: "#EC7955",
        paddingTop:32,

    },

    content: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },

    title: {
        marginTop: 15,
        // marginBottom: 10,
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
