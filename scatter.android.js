//Code for Scatter plot
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
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

import d3 from 'd3';

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
      let w = width - margin.left - margin.right;
      let h = height - margin.top - margin.bottom;

      var data = [
        [5, 3],
        [10, 17],
        [2, 2],
        [2, 3],
        [7, 7],
        [15, 4],
        [2, 8],
        [10, 2],
        [2, 10],
        [11, 10],
        [4, 4],
        [5, 5]
      ];
  
      let x = d3.scale.linear()
              .domain([0, d3.max(data, function(d) { return d[0]; })])
              .range([ 0, width ]);
    
      let y = d3.scale.linear()
    	      .domain([0, d3.max(data, function(d) { return d[1]; })])
    	      .range([ height, 0 ]);

        return (
            <Svg width={w + margin.left + margin.right} height={h + margin.top + margin.bottom}>
                <G translate={`${margin.left}, ${margin.top}`}>
                  {data.map(function(d, i) {
                    return <Circle  key={i} fill="orange"  cx={x(d[0])} cy={y(d[1])} r="5"/>
                  })}
                </G>
            </Svg>
        );
    }
}

AppRegistry.registerComponent('Awesome', () => Awesome);
