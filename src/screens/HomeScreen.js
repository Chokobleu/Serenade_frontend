import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React , { useState }from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import globalStyles from "../../utils/globalStyles";
import ImageCarousel from '../components/Carousel';
import MyCarousel from '../components/CarouselParallax';

const HomeScreen = () => {
  const [currentProfile, setCurrentProfile] = useState(0);

  const profilsData = [
    {
      imageUrl:
        ['https://static.lacapsule.academy/faceup/picture1.jpg',
          'https://static.lacapsule.academy/faceup/picture1.jpg',
          'https://static.lacapsule.academy/faceup/picture1.jpg',
          'https://static.lacapsule.academy/faceup/picture1.jpg',
          'https://static.lacapsule.academy/faceup/picture1.jpg',
          'https://static.lacapsule.academy/faceup/picture1.jpg'],
      name: 'John',
      city: 'New York',
      age: 25,
      gender: 'Male',
      job: 'Software Engineer',
      message: "I love hiking and exploring new places. Looking for a partner who enjoys outdoor activities.",
      partner: {
        name: 'Jane',
        photo: 'https://static.lacapsule.academy/faceup/picture2.jpg'
      }
    },
    {
      imageUrl:
        ['https://static.lacapsule.academy/faceup/picture2.jpg',
          'https://static.lacapsule.academy/faceup/picture2.jpg',
          'https://static.lacapsule.academy/faceup/picture2.jpg',
          'https://static.lacapsule.academy/faceup/picture2.jpg',
          'https://static.lacapsule.academy/faceup/picture2.jpg',
          'https://static.lacapsule.academy/faceup/picture2.jpg'],
      name: 'Emily',
      city: 'Los Angeles',
      age: 28,
      gender: 'Female',
      job: 'Graphic Designer',
      message: "I'm passionate about art and photography. Hoping to find someone who appreciates creativity.",
      partner: {
        name: 'Alex',
        photo: 'https://static.lacapsule.academy/faceup/picture3.jpg'
      }
    },
    {
      imageUrl:
        ['https://static.lacapsule.academy/faceup/picture3.jpg',
          'https://static.lacapsule.academy/faceup/picture3.jpg',
          'https://static.lacapsule.academy/faceup/picture3.jpg'],
      name: 'Michael',
      city: 'Chicago',
      age: 32,
      gender: 'Male',
      job: 'Teacher',
      message: "I enjoy reading books and playing guitar in my free time. Looking for a partner who shares similar interests.",
      partner: {
        name: 'Sarah',
        photo: 'https://static.lacapsule.academy/faceup/picture4.jpg'
      }
    },

  ];



  // const profil = profilsData.map((data, i) => {
  //   return (
  //     <CardProfilContainer key={i}
  //       image={data.imageUrl}
  //       name={data.name}
  //       city={data.city}
  //       age={data.age}
  //       sex={data.sex}
  //       job={data.job}
  //       message={data.message}
  //       partnerName={data[0].partner.name}
  //       partnerPhoto={data[0].partner.photo} />
  //   );
  // });

  const handleRemoveProfile = () => {
    const nextProfile = currentProfile + 1;
    if (nextProfile < profilsData.length) {
      setCurrentProfile(nextProfile);
    } else {
      setCurrentProfile(0);
    }
  };
  const profile = profilsData[currentProfile];

  return (
    <View style={globalStyles.screen}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => console.log('go to my profile')} >
        <View style={styles.imageContainer}>
        <Image
          source={{
            uri: profilsData[1].imageUrl[0],
          }}
          style={styles.profileImage}
        />
        </View>
        </TouchableOpacity>
        <Text style={[globalStyles.titleText, { marginLeft: 10 }]}>Serenade</Text>
        <TouchableOpacity onPress={() => console.log('go to my settings')} >
        <FontAwesome name="sliders" size={25} color="#ffffff" />
        </TouchableOpacity>

      </View>
      <View style={globalStyles.container} className=''>
        <View style={styles.photos}>
          <MyCarousel images={profile.imageUrl} />
        </View>
        <View style={styles.profil}>
          <View style={styles.cardContainer}>
            <View style={styles.cardText}>
              <View>
              <View style={styles.iconContainer}>
                <FontAwesome name="user" size={20} color="#F0D3C9" />
                <Text style={[globalStyles.mainText, { marginLeft: 10 }]}>
                  {profile.name}
                </Text>
              </View>
              <View style={styles.iconContainer}>
                <FontAwesome name="map-marker" size={20} color="#F0D3C9" />
                <Text style={[globalStyles.mainText, { marginLeft: 10 }]}>
                  {profile.city}
                </Text>
              </View>
              <View style={styles.iconContainer}>
                <FontAwesome name="id-card" size={20} color="#F0D3C9" />
                <Text style={[globalStyles.mainText, { marginLeft: 10 }]}>
                  {profile.age} {profile.gender}
                </Text>
              </View>
              <View style={styles.iconContainer}>
                <FontAwesome name="briefcase" size={20} color="#F0D3C9" />
                <Text style={[globalStyles.mainText, { marginLeft: 10 }]}>
                  {profile.job}
                </Text>
              </View>
              </View>
              <View style={styles.likeDislikeContainer}>
              <TouchableOpacity onPress={() => console.log('add to my like list')} style={styles.iconWrapper}>
                <FontAwesome name="heart" size={25} color="#EC7955" style={styles.likeDislike}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleRemoveProfile} style={styles.iconWrapper}>
                <FontAwesome name="remove" size={30} color="#EC7955" style={styles.likeDislike}/>
                </TouchableOpacity>
              
              </View>
            </View>

          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.subtitle}>What you need to know about?</Text>
          <Text style={globalStyles.mainText}>{profile.message}</Text>
        </View>
        <View style={styles.relationship}>
          <Text style={styles.subtitle}>In relationship with:</Text>
          <View style={styles.partner}>
            <Image
              source={{
                uri: profile.partner.photo,
              }}
              style={styles.image}
            />
            <Text style={[globalStyles.mainText, { marginLeft: 10 }]}>{profile.partner.name}</Text>
          </View>
        </View>
        <View style={styles.horizontalLine}></View>
        
        <TouchableOpacity onPress={() => console.log('contact us')} style={styles.report}>
          <FontAwesome name="flag" size={20} color="#EC7955" />
          <Text style={[globalStyles.mainText, { marginLeft: 10 }]}>Report this profile</Text>
          </TouchableOpacity>
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  header: {
    //  backgroundColor:'red',
    width: '90%',
    justifyContent: "space-between",
    margin: 10,
    alignItems: 'center',
    flexDirection: "row",
    paddingTop: 0

  },
  profil: {

  },

  cardContainer: {
    marginBottom: 10,
  },
  imageContainer: {
    width: 40,
    height: 40,
  },
  profileImage:{
    aspectRatio: 1,
    borderRadius: 20,
  },

  image: {
    aspectRatio: 1,
    width: "12%",
    // height:'50%',
    borderRadius: 20,

  },
  cardText: {
    backgroundColor: "#3B485E",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  
  likeDislikeContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
   
    
    
  },
  iconWrapper: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },


  description: {
    backgroundColor: "#3B485E",
    padding: 10,
    borderRadius: 10,
    marginLeft: 0
  },
  relationship: {
    marginTop: 10,
    marginLeft: 0
  },

  subtitle: {
    fontSize: 17,
    lineHeight: 25,
    fontFamily: "LabGrostesque-Regular",
    color: "#F0D3C9",
  },

  iconContainer: {
    flexDirection: "row",

  },

  partner: {
    flexDirection: "row",
    alignItems: 'center',
    padding: 10,
  },

  horizontalLine: {
    width: '100%',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    // marginVertical: 20,
    paddingBottom: 10,
    marginBottom: 0,
  },
  report: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
    padding: 10,
  }
});
export default HomeScreen;
