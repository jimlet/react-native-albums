import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
  // Example of renaming while destructuring.
  const { 
    title, 
    artist, 
    thumbnail_image: thumbnailImage, 
    image, 
    url,
  } = props.album;

  const { 
    headerContentStyle, 
    thumbnailStyle, 
    thumbnailContainerStyle,
    headerTextStyle, 
    imageStyle,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          {/* 
          Images MUST be styled.
          React Native does NOT expand images to fill space - you must say how big 
          they should be or they won't show up. 
          */}
          <Image source={{ uri: thumbnailImage }} style={thumbnailStyle} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image source={{ uri: image }} style={imageStyle} />
      </CardSection>
      <CardSection>
        <Button onPress={() => { Linking.openURL(url); }}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    width: 50, 
    height: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    // These 2 properties make the image as wide as the container.
    // Why?
    flex: 1,
    width: null,
  }
};

export default AlbumDetail;
