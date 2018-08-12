
import React from "react";
import { createStackNavigator } from "react-navigation";

import HomeScreen from './Home';
import WorkScreen from './Work';
import AboutScreen from './About';


const RootStack = createStackNavigator({
    Home: {      screen: HomeScreen    },
    Work: {      screen: WorkScreen    },
    About: {      screen: AboutScreen    },

  },
  {
    initialRouteName: 'Home',
  }

);
  
  export default class App extends React.Component {
    render() {
      return <RootStack />;
    }
  }