import React, { Component } from "react";
import {  StyleSheet  } from "react-native";

import { Container, Header, Content, Footer, FooterTab, Button, Text , Icon } from 'native-base';


class Work extends Component{


    render(){
        return(

            <Container style={styles.warpper}>
               
                <Content />
                <Footer>
                    <FooterTab style={styles.Footer}>
                        <Button>
                            <Icon name="apps" />
                            <Text>Hard</Text>
                        </Button>
                        <Button>
                            <Icon name="camera" />
                            <Text>Soft</Text>
                        </Button>
                        <Button active>
                            <Icon active name="navigate" />
                            <Text>IT</Text>
                        </Button>
                    </FooterTab>
                </Footer>
          </Container>
        );
    }
}

export default Work;



const styles = StyleSheet.create({

    warpper:{
        backgroundColor: '#48C9B0',
      
    },
    H1:{
        fontSize: 30,
        textAlign: 'center',
        padding:5,
        color:'#333333',
    },

    Footer:{
        backgroundColor:'#148F77',

    }


})