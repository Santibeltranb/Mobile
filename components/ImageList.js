import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';

const ImageList = ({ images }) => {
  const renderItem = ({ item }) => (
    <Image source={{ uri: item }} style={styles.image} />
  );

  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={3} 
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 5,
  },
});

export default ImageList;
