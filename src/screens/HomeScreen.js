import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = props => {

  return (
  <View>
    <Text style={styles.header}> Getting started with React Native! </Text>
    <Text style = {styles.text}> My name is {name} ! </Text>
    <Button 
    onPress={() => props.navigation.navigate('Components')}
    title="Go to Components Demo" 
    />
    <Button 
    title="Go to List Demo"
    onPress={() => props.navigation.navigate('List')}
    />
    {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
      <Text> Go to List Demo!</Text>
    </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15
  },
  header: {
    fontSize: 45
  }
});

export default HomeScreen;
