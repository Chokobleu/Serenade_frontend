import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Modal,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
  Text,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import globalStyles from "../../utils/globalStyles";
import { Slider } from "@miblanchard/react-native-slider";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Divider, RadioButton } from "react-native-paper";
import RadioButtonItem from "../components/RadioButtonItem";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import ChooseYourCity from "../components/ChooseYourCity";

console.log("search settings")

const SearchSettings = ({ settingsOpen, closeSearchSettings }) => {
  const userToken = useSelector((state) => state.user.token);
  const [genderSearched, setGenderSearched] = useState("");
  const [partnerSexuality, setPartnerSexuality] = useState("");
  const [userCity, setUserCity] = useState({});


  const getCity = (value) => {
    setUserCity(value);
  };
  //Initial values for the sliders
  const [ageRange, setAgeRange] = useState([30, 55]);
  const [maxDistance, setMaxDistance] = useState(30);

  //Markers for the sliders
  const maxDistanceMarker = () => (
    <View
      style={{ backgroundColor: globalStyles.primaryColor }}
      className="items-center h-7 w-7 rounded-full justify-center"
    >
      <Text style={globalStyles.textSmall}>{maxDistance}</Text>
    </View>
  );

  const ageRangeMarker = ({ currentValue }) => (
    <View
      style={{ backgroundColor: globalStyles.primaryColor }}
      className="items-center h-7 w-7 rounded-full justify-center"
    >
      <Text style={globalStyles.textSmall}>{currentValue}</Text>
    </View>
  );

  //Handlers for the slider changes
  const handleChangeMaxDistance = (newValue) => {
    setMaxDistance(newValue);
  };
  const handleAgeRangeChange = (newValues) => {
    setAgeRange(newValues);
  };

  const handleSaveSearchSettings = () => {
    
    const userData = {
          search:{
                  maxDistance: maxDistance[0],
                  ageMin: ageRange[0],
                  ageMax: ageRange[1],
                  genderLiked: genderSearched,
                  sexualityLiked: partnerSexuality,
                  },
          location:userCity,
          token: userToken

    };

    console.log(userData)

    fetch('http://192.168.10.125:3000/users/saveSettings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userData: userData}),
      
    }).then(response => response.json())
      .then(data => {
        if (data.result) {
          console.log(data.result)
        }
      });
      

  };

  return (
    <Modal visible={settingsOpen} transparent={true} animationType="slide">
      <TouchableOpacity style={styles.container} activeOpacity={1}>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <ScrollView style={styles.modal}>
            <View style={styles.modalContent}>
              <View className="flex-row justify-between items-center mb-5">
                <TouchableOpacity
                  onPress={() => {
                    handleSaveSearchSettings();
                    closeSearchSettings();
                  }}
                  style={{ backgroundColor: globalStyles.primaryColor }}
                  className="rounded-full h-10 w-10 justify-center items-center"
                >
                  <MaterialCommunityIcons
                    name="content-save-all"
                    size={25}
                    color="white"
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={closeSearchSettings}>
                  <AntDesign
                    name="closecircle"
                    size={25}
                    color={globalStyles.whiteColor}
                  />
                </TouchableOpacity>
              </View>
              <View className="mb-7">
                <Text className="text-center" style={globalStyles.titleText}>
                  Search Settings
                </Text>
                <Text className="text-center" style={globalStyles.textSmall}>
                  Refine your search
                </Text>
              </View>
              <View className="mb-7">
                <ChooseYourCity getCity={getCity} />
              </View>

              {/* +++++++++++++MAX DISTANCE SLIDER  ++++++++++++ */}
              <View className="mb-7">
                <Text className="mb-2" style={globalStyles.titleText}>
                  Maximum distance
                </Text>
                <View className="flex-row justify-between">
                  <Text style={globalStyles.textSmall}>0km</Text>
                  <Ionicons name="md-infinite-sharp" size={24} color="white" />
                </View>
                <View className="flex-row justify-between">
                  <View className="mt-2">
                    <MaterialCommunityIcons
                      name="target"
                      size={24}
                      color={globalStyles.primaryColor}
                    />
                  </View>
                  <View className="w-10/12">
                    <Slider
                      value={maxDistance}
                      minimumValue={1}
                      maximumValue={300}
                      onValueChange={(value) => handleChangeMaxDistance(value)}
                      step={5}
                      thumbTintColor={globalStyles.primaryColor}
                      trackStyle={{
                        backgroundColor: globalStyles.whiteColor,
                      }}
                      minimumTrackStyle={{
                        backgroundColor: globalStyles.primaryColor,
                      }}
                      renderThumbComponent={maxDistanceMarker}
                    />
                  </View>
                  <View className="mt-2">
                    <MaterialCommunityIcons
                      name="target"
                      size={24}
                      color={globalStyles.primaryColor}
                    />
                  </View>
                </View>
              </View>
              {/* +++++++++++++++++++++++++++++++++++++++++++++++ */}

              {/* +++++++++++++AGE RANGE SLIDER ++++++++++++ */}
              <View className="mb-7">
                <Text className="mb-2" style={globalStyles.titleText}>
                  Age Range
                </Text>
                <View className="flex-row justify-between">
                  <Text style={globalStyles.textSmall}>18 years</Text>
                  <Ionicons name="md-infinite-sharp" size={24} color="white" />
                </View>
                <View className="flex-row justify-between">
                  <View className="mt-3">
                    <MaterialCommunityIcons
                      name="gauge-empty"
                      size={24}
                      color={globalStyles.primaryColor}
                    />
                  </View>
                  {/* ++++++++++++++++++++++++++++++multi slider here++++++++++++++++++++ */}
                  <View className="w-10/12">
                    <MultiSlider
                      values={[30, 55]}
                      sliderLength={300}
                      onValuesChange={handleAgeRangeChange}
                      min={18}
                      max={99}
                      step={1}
                      allowOverlap
                      snapped
                      customMarker={ageRangeMarker}
                      selectedStyle={{
                        backgroundColor: globalStyles.primaryColor,
                      }}
                    />
                  </View>

                  <View className="mt-3">
                    <MaterialCommunityIcons
                      name="gauge-full"
                      size={24}
                      color={globalStyles.primaryColor}
                    />
                  </View>
                </View>
              </View>
              {/* ++++++++++++++++++++++++++++++++++++++++++++ */}

              {/* +++++++++++++WHAT YOU'RE LOOKING FOR ++++++++++++ */}
              <View className="mb-7">
                <Text className="mb-5" style={globalStyles.titleText}>
                  What are you looking for?
                </Text>
                <RadioButton.Group
                  onValueChange={(value) => {
                    setGenderSearched(value);
                  }}
                  value={genderSearched}
                >
                  <RadioButtonItem label="Man" value="Man" />
                  <RadioButtonItem label="Woman" value="Woman" />
                  <RadioButtonItem label="Non-binary" value="Non-binary" />
                </RadioButton.Group>
              </View>
              {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

              {/* +++++++++++++your partner's sexual orientation ++++++++++++ */}
              <View className="mb-7">
                <Text className="mb-5" style={globalStyles.titleText}>
                  Your partner's sexuality
                </Text>
                <RadioButton.Group
                  onValueChange={(value) => setPartnerSexuality(value)}
                  value={partnerSexuality}
                >
                  <RadioButtonItem label="Straight" value="Straight" />
                  <RadioButtonItem label="Gay" value="Gay" />
                  <RadioButtonItem label="Lesbian" value="Lesbian" />
                  <RadioButtonItem label="Bisexual" value="Bisexual" />
                  <RadioButtonItem label="Pansexual" value="Pansexual" />
                  <RadioButtonItem label="Polysexual" value="Polysexual" />
                  <RadioButtonItem label="Queer" value="Queer" />
                </RadioButton.Group>
              </View>
              {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modal: {
    backgroundColor: "rgba(29, 38, 53, 0.85)",
  },
  modalContent: {
    flex: 1,
    padding: 16,

    // Additional styles for your modal content
  },
});

export default SearchSettings;
