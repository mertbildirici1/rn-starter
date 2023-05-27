import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        {namee: 'Friend #1', age: 20},
        {namee: 'Friend #2', age: 21},
        {namee: 'Friend #3', age: 22},
        {namee: 'Friend #4', age: 23},
        {namee: 'Friend #5', age: 24},
        {namee: 'Friend #6', age: 25},
        {namee: 'Friend #7', age: 26},
    ]
    return (
    <FlatList 
    keyExtractor={(friend) => friend.age}
    data={friends} 
    renderItem={({item})=> {
        return <Text style = {styles.textStyle}> 
        {item.namee} - Age {item.age}
        </Text>;
    } }
    />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }


});

export default ListScreen;