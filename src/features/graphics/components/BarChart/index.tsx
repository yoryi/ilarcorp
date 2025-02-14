import React from 'react';
import { View, Text } from 'react-native';
import colors from '@theme/colors';
import Svg, { Rect, Text as TextSVG } from "react-native-svg";


const data = [50, 10, 40, 10, 85, 67, 35, 53, 24, 50];
export default function PieChart() {
  const barWidth = 20;
  const spacing = 10;
  const chartHeight = 100;
  const chartWidth = data.length * (barWidth + spacing);

  return (
    <View
      style={{
        backgroundColor: "#1C1C1E",
        height: 200,
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 15,
      }}
    >
      <View style={{paddingBottom: 20, paddingTop: 20}}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>BarChart</Text>
        <Text style={{color: 'white', fontSize: 10}}>Statistics</Text>
      </View>
      <Svg height="130" width={chartWidth}>
        {data.map((value, index) => {
          const barHeight = (value / 100) * chartHeight;
          return (
            <React.Fragment key={index}>
              <Rect
                x={index * (barWidth + spacing)}
                y={chartHeight - barHeight}
                width={barWidth}
                height={barHeight}
                fill={colors.yellow}
              />
              <TextSVG
                x={index * (barWidth + spacing) + barWidth / 2}
                y={chartHeight - barHeight - 5}
                fontSize="10"
                fill={colors.white}
                textAnchor="middle"
              >
                {value}
              </TextSVG>
            </React.Fragment>
          );
        })}
      </Svg>
    </View>
  );
}