import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ImageList from './ImageList';

const ImageGallery = () => {
  const [images] = useState([
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
  ]);

  return (
    <View style={styles.container}>
      <ImageList images={images} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ImageGallery;
