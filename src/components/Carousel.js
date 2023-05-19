import { View, Text, StyleSheet, Image,Dimensions } from "react-native";
import React from "react";
import Carousel from 'react-native-snap-carousel';



export default function ImageCarousel({ images }) {
    const renderItem = ({ item, index }) => {
      const { width } = Dimensions.get('window');
      const itemWidth = width - 40; // Largeur de l'image principale
      const itemHeight = itemWidth * 1.5; // Hauteur de l'image principale
  
      const imageStyle = [
        styles.image,
        index === 0 ? styles.mainImage : styles.secondaryImage,
      ];
  
      return (
        <View style={styles.carouselItem}>
          <Image source={{ uri: item }} style={imageStyle} />
        </View>
      );
    };
  
    return (
      <Carousel
        data={images}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width - 100}
        layout='stack'
        loop
        decelerationRate={0.0005}
        layoutCardOffset={40}
      />
    );
  }
 

  const styles = StyleSheet.create({
    carouselItem: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      aspectRatio: 1.2,
      width: '80%',
      // height: '50%',
      borderRadius: 30,
    },
    mainImage: {
      transform: [{ scale: 1}], // Taille de l'image principale
    },
    secondaryImage: {
      transform: [{ scale: 1 }],
       // Taille des images secondaires
    },
  });
  
  
  
  
  
  
  
  
  
  