import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Dimensions
} from 'react-native';

import Svg,{
    Circle,
    Ellipse,
    G,
    Text,
    Rect
} from 'react-native-svg';

import Barchart from './components/barchart';

export default class Awesome extends Component {
  constructor (props) {
    super(props);
  }

   render() {
      let {width, height} = Dimensions.get('window');
      let margin = {
        top: 10,
        left: 10,
        bottom: 50,
        right: 10
      };
     
      let data = [{name: "sandeep", value: 45}, {name: "swapna", value: 15}, {name: "muthu", value: 7}, {name: "roopa", value: 17}, {name: "vijaya", value:35}, {name: "sijo", value:25}];
      
        return (
            <View>
                <Barchart margin = {margin} data = {data} width = {width} height = {height}/>
            </View>
        );
    }
}

AppRegistry.registerComponent('Awesome', () => Awesome);
