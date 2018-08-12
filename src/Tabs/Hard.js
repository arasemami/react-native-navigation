import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native";


class Hard extends Component{


    render(){
        return(

            <View style={styles.wrapper}>
                <Text>Hello Hard page</Text>
            </View>
        );
    }
}

export default Hard;




const styles = StyleSheet.create({

    wrapper:{
        backgroundColor: '#F7DC6F',
        padding: 5,
        flex:1,
    }
})