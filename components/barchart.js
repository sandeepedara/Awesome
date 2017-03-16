import React, { Component } from 'react';
import Svg,{
    Circle,
    Ellipse,
    G,
    Text,
    Rect
} from 'react-native-svg';
import d3 from 'd3';

export default class Barchart extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let data = this.props.data;
        let width = this.props.width;
        let height = this.props.height;
        let {
            left,
            right,
            top,
            bottom
        } = this.props.margin;

        let w = width - left - right;
        let h = height - top - bottom;

        let names = data.map(function (d) {
            return d.name;
        });
        let marks = data.map(function (d) {
            return +d.value;
        });
        let xScale = d3.scale.ordinal().domain(names).rangeBands([0, w], 0.1);
        let yScale = d3.scale.linear().domain([0, d3.max(marks) + 5]).range([h, 0]);
        let clr = d3.scale.category10();

        return (
            <Svg width = {w + left + right} height = {h + top + bottom}>
                <G translate={`${left}, ${top}`}>
                    {data.map(function(d, i) {
                    return <Rect  key={i} fill={clr(d.name)} width={xScale.rangeBand()} y={yScale(d.value)} x={xScale(d.name)} height={h - yScale(d.value)} onPressIn={() => alert('Press on Circle')}
                    />
                    })}
                
                    {data.map(function(d, i) {
                    return <Text  key={i} fill="black" textAnchor="middle" y={h} x={xScale(d.name) + xScale.rangeBand()/2}>{d.name}</Text>
                    })}

                    {data.map(function(d, i) {
                    return <Text  key={i} fill="black" textAnchor="middle" y={yScale(d.value) - 15} x={xScale(d.name) + xScale.rangeBand()/2}>{d.value}</Text>
                    })}
                </G>
            </Svg>
        )
    }
}