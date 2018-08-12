import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native";


class It extends Component{


    render(){
        return(

            <View style={styles.wrapper}>
                <Text style={styles.H1} >It's It page</Text>
            </View>
        );
    }
}

export default It;

const styles = StyleSheet.create({

    wrapper:{
        backgroundColor: '#D5F5E3',
        padding: 5,
        flex:1,
        flexDirection:'row',
        height:900,
    },
    H1:{
        fontSize: 30,
        color:'#333333',
        flex:1,
        textAlignVertical:'center',
        textAlign: 'center',


    }
})