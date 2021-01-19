import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';

export default class tab2 extends Component{
    render(){
        return (
        <View style={styles.container}>
            <Text>tab2</Text>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})