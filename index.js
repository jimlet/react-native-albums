// Import  a library to help create a component.
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component.
const App = () => (
  // flex: 1 must be included here to have scrolling work.
  // Means fill all the available space in your container.
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device.
AppRegistry.registerComponent('albums', () => App);
