import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Feather } from "@expo/vector-icons";
import { Divider } from "react-native-paper";
import globalStyles from '../../utils/globalStyles'
import { truncateCityname } from "../../utils/truncateText";
import { age } from "../../utils/transformDate";
import UserPartner from "../components/UserPartner";
import ProfileCarousel from "../components/ProfileCarousel";
import { useRoute } from '@react-navigation/native';
import Header from '../components/Header';
import { createALike, createADislike, removeMatch } from '../../utils/authenticateUser';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';


const DisplayProfileInfo = () => {
    const route = useRoute();
    const { user } = route.params;
    const userToken = useSelector((state) => state.user.token);
    const navigation = useNavigation();
    const [WhoLikesMe, setWhoLikesMe] = useState([]);
    const [dislikedUsers, setDislikedUsers] = useState([]);

    const handleLike = async () => {
        const likedUserToken = user.token;
        const data = await createALike(userToken, likedUserToken);
        setWhoLikesMe([...WhoLikesMe, likedUserToken])
        // if (data.result === true) {
        //   if (data.match === true) {
        //       navigation.navigate("MatchScreen", { user: user });
        //   }
        // }
        navigation.goBack();
    };

    const handleDislike = async () => {
      try {
        const dislikedUserToken = user.token;
        await createADislike(userToken, dislikedUserToken);
        await handleDismatch(matchId);
        setDislikedUsers([...dislikedUsers, dislikedUserToken]);
        navigation.goBack();
      } catch (error) {
        console.log(error);
      }
    };

    const handleDismatch = async (matchId) => {
      try {
        const dismatchedUserToken = user.token;
        await removeMatch(userToken, dismatchedUserToken, matchId);
        navigation.goBack();
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <View style={globalStyles.screen}>
      <View style={globalStyles.container}>
        <Header/>
        <ScrollView>
                  {/* User Pictures */}
                  <ProfileCarousel userPictures={user.pictures} />

                  <View className="flex-1 items-center">
                    <View
                      className="w-full h-40 rounded-xl p-4 flex-row justify-between mb-4"
                      style={{ backgroundColor: globalStyles.cardColor }}
                    >
                      <View>
                        <View className="flex-row mb-2 items-center">
                          <FontAwesome
                            name="user"
                            size={20}
                            color={globalStyles.lightPink}
                          />
                          <Text
                            style={[globalStyles.mainText, { marginLeft: 10 }]}
                          >
                            {user.name}
                          </Text>
                        </View>
                        {user.location && (
                          <View className="flex-row mb-2 items-center">
                            <FontAwesome
                              name="map-marker"
                              size={20}
                              color={globalStyles.lightPink}
                            />
                            <Text
                              style={[
                                globalStyles.mainText,
                                { marginLeft: 10 },
                              ]}
                            >
                              {truncateCityname(user.location.city)}
                            </Text>
                          </View>
                        )}
                        <View className="flex-row mb-2 items-center">
                          <FontAwesome
                            name="id-card"
                            size={20}
                            color={globalStyles.lightPink}
                          />
                          <Text
                            style={[globalStyles.mainText, { marginLeft: 10 }]}
                          >
                            {`${age(user.birthdate)}yo`} {user.gender}
                          </Text>
                        </View>
                        {user.occupation && (
                          <View className="flex-row mb-2 items-center">
                            <FontAwesome
                              name="briefcase"
                              size={20}
                              color="#F0D3C9"
                            />
                            <Text
                              style={[
                                globalStyles.mainText,
                                { marginLeft: 10 },
                              ]}
                            >
                              {user.occupation}
                            </Text>
                          </View>
                        )}
                      </View>
                      <View>
                        <View>
                          <TouchableOpacity
                            onPress={() => handleLike()}
                            className="w-10 h-10 mb-2 bg-white rounded-full justify-center items-center"
                          >
                            <MaterialCommunityIcons
                              name="heart"
                              size={30}
                              color={globalStyles.primaryColor}
                            />
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => handleDislike()}
                            className="w-10 h-10 mb-2 bg-white rounded-full justify-center items-center"
                          >
                            <Feather
                              name="x"
                              size={30}
                              color={globalStyles.primaryColor}
                            />
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => handleDismatch()}
                            className="w-10 h-10 bg-white rounded-full justify-center items-center"
                          >
                            <MaterialCommunityIcons
                              name="heart-broken"
                              size={30}
                              color={globalStyles.primaryColor}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    {user.description && (
                      <View
                        className="w-full h-40 rounded-xl p-4 mb-4"
                        style={{ backgroundColor: globalStyles.cardColor }}
                      >
                        <Text
                          className="mb-2"
                          style={globalStyles.titleTextPink}
                        >
                          What you need to know about {user.name}
                        </Text>
                        <Text style={globalStyles.mainText}>
                          {user.description}
                        </Text>
                      </View>
                    )}

                    {/* User RelationShips */}
                    <View className="self-start">
                        
                      {(user.myRelationships?.length === 0 &&
                        user.relationshipStatus === "Single" && (
                          <>
                            <Text
                              className="mb-2"
                              style={globalStyles.titleTextPink}
                            >
                              Relationship Status:
                            </Text>
                            <Text
                              className="italic mb-2"
                              style={globalStyles.titleTextPrimary}
                            >
                              Single
                            </Text>
                          </>
                        )) ||
                        (user.myRelationships?.length === 0 &&
                          user.relationshipStatus === "In a relationship" && (
                            <>
                              <Text
                                className="mb-2"
                                style={globalStyles.titleTextPink}
                              >
                                Relationship Status:
                              </Text>
                              <Text
                                className="italic mb-2"
                                style={globalStyles.titleTextPrimary}
                              >
                                In a relationship
                              </Text>
                            </>
                          )) ||
                        (user.myRelationships?.length > 0 && (
                          <>
                            <Text
                              className="mb-2"
                              style={globalStyles.titleTextPink}
                            >
                              In relationship with:
                            </Text>
                            {user.myRelationships.map((item, index) => (
                              <UserPartner
                                key={index}
                                name={item.name}
                                picture={item.pictures[0]}
                              />
                            ))}
                          </>
                        ))}
                    </View>

                    <Divider
                      className="mb-3"
                      style={{
                        color: "white",
                        height: 0.5,
                        width: "100%",
                      }}
                    />

                    <TouchableOpacity
                      className="flex-row justiy-center items-center"
                      onPress={() => console.log("contact us")}
                    >
                      <FontAwesome
                        name="flag"
                        size={20}
                        color={globalStyles.primaryColor}
                      />
                      <Text style={[globalStyles.mainText, { marginLeft: 10 }]}>
                        Report this profile
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
        </View>
    </View>
  )
}
export default DisplayProfileInfo