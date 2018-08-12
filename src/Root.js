import React from "react";
import {createStackNavigator} from "react-navigation";

import HomeScreen from './Home';
import WorkScreen from './Work';
import AboutScreen from './About';
import FormScreen from './Form';


const RootStack = createStackNavigator({
        Home: {screen: HomeScreen},
        Work: {screen: WorkScreen},
        About: {screen: AboutScreen},
        Forms: {screen: FormScreen},

    },
    {
        initialRouteName: 'Home',
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack/>;
    }
}