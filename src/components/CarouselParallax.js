import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image
} from 'react-native';


export default function MyCarousel({ images }) {
    const [entries, setEntries] = useState([]);
    const carouselRef = useRef(null);
    const {width: screenWidth} = Dimensions.get('window');
  
    useEffect(() => {
      setEntries(images);
    }, []);
  
    const renderItem = ({ item, index }, parallaxProps) => {
      return (
        <View style={styles.carouselItem}>
          <ParallaxImage
            source={{ uri: item }}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={0.4}
            {...parallaxProps}
          />
        </View>
      );
    };
  
    return (
      <View style={styles.carouselContainer}>
        <Carousel
          ref={carouselRef}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 70}
          data={entries}
          renderItem={renderItem}
          hasParallaxImages={true}
        />
      </View>
    );
  }
  
  



  const styles = StyleSheet.create({
    carouselItem: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      aspectRatio: 1,
      width: '50%',
      // height: '50%',
      borderRadius: 10,
    },
    mainImage: {
      transform: [{ scale: 1 }], // Taille de l'image principale
    },
    secondaryImage: {
      transform: [{ scale: 1 }], // Taille des images secondaires
    },
  });