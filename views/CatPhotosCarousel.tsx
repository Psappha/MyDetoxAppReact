import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const { width: screenWidth } = Dimensions.get('window');

const CatPhotosCarousel = () => {
  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} showsButtons loop>
        <View style={styles.slide}>
          <Image source={require('../assets/photo1.webp')} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={require('../assets/photo2.webp')} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={require('../assets/photo3.webp')} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={require('../assets/photo4.webp')} style={styles.image} />
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    height: 300,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: screenWidth * 0.8,
    height: 300,
    borderRadius: 10,
  },
});

export default CatPhotosCarousel;
