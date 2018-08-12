import React, {Component} from "react";
import {StyleSheet} from "react-native";

import {Container, Header, Content, Footer, FooterTab, Button, Text, Icon} from 'native-base';

import SOFT from './Tabs/Soft';
import HARD from './Tabs/Hard';
import IT from './Tabs/It';

class Work extends Component {

    constructor(props) {
        super(props);
        this.state = {selectedTab: 'SOFT'};

    }

    renderSelectedTab() {
        switch (this.state.selectedTab) {
            case 'SOFT':
                return (<SOFT/>);
                break;
            case 'HARD':
                return (<HARD/>);
                break;
            case 'IT':
                return (<IT/>);
                break;
            default:
        }
    }

    render() {

        return (

            <Container style={styles.wrapper}>

                <Content>
                    {this.renderSelectedTab()}
                </Content>

                <Footer>
                    <FooterTab style={styles.Footer}>
                        <Button active={this.state.selectedTab === 'HARD'} onPress={() => this.setState({selectedTab: 'HARD'})}>
                            <Icon name="apps"/>
                            <Text>Hard</Text>
                        </Button>
                        <Button active={this.state.selectedTab === 'SOFT'} onPress={() => this.setState({selectedTab: 'SOFT'})}>
                            <Icon name="camera"/>
                            <Text>Soft</Text>
                        </Button>
                        <Button active={this.state.selectedTab === 'IT'} onPress={() => this.setState({selectedTab: 'IT'})}>
                            <Icon active name="navigate"/>
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

    wrapper: {
        backgroundColor: '#48C9B0',

    },
    H1: {
        fontSize: 30,
        textAlign: 'center',
        padding: 5,
        color: '#333333',
    },

    Footer: {
        backgroundColor: '#148F77',

    }


})