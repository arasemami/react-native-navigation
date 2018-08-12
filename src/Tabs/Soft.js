import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native";


class Soft extends Component{


    render(){
        return(

            <View style={styles.wrapper}>
                <Text style={styles.H1} >It's Soft page</Text>
            </View>
        );
    }
}

export default Soft;

const styles = StyleSheet.create({

    wrapper:{
        backgroundColor: '#A9CCE3',
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