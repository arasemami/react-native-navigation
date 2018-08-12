import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native";


class Hard extends Component{


    render(){
        return(

            <View style={styles.wrapper}>
                <Text style={styles.H1}>It's Hard page</Text>
            </View>
        );
    }
}

export default Hard;




const styles = StyleSheet.create({

    wrapper:{
        backgroundColor: '#F8C471',
        padding: 5,
        flex:1,
        flexDirection:'row',
        height:900,
        textAlign: 'center',
    },
    H1:{
        fontSize: 30,
        color:'#333333',
        flex:1,
        textAlignVertical:'center',
        textAlign: 'center',


    }
})