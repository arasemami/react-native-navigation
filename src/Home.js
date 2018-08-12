import React, { Component } from "react";
import { View, Text , TouchableOpacity , StyleSheet  } from "react-native";


class Home extends Component{


    render(){
        const { navigate } = this.props.navigation;
        return(

            <View style={styles.wrapper}>
                <Text style={styles.H1}>Hello Home page</Text>
 

                <TouchableOpacity  onPress={() => navigate('Work') }  style={styles.ButtonContainer} >
                    <Text style={styles.buttonText }>Go to Tab's Page (Work)</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigate('About') }  style={styles.ButtonContainer} >
                    <Text style={styles.buttonText }>Go to About Page</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigate('Forms') }  style={styles.ButtonContainer} >
                    <Text style={styles.buttonText }>Go to Form Page</Text>
                </TouchableOpacity>






            </View>
        );
    }
}

export default Home;



const styles = StyleSheet.create({

    wrapper:{
        backgroundColor: '#F7DC6F',
        padding: 5,
        flex:1,
    },
    H1:{
        fontSize: 30,
        textAlign: 'center',
        padding:5,
        color:'#333333',
    },
    ButtonContainer:{
        margin: 10,
        backgroundColor:'#DC7633',
        padding:20,
        borderRadius: 10,
    },
    buttonText:{
        textAlign:'center',
        fontSize:20,

    }

})