import colors from "@theme/colors";
import React from "react";
import { View, Text } from "react-native";
import Svg, { Line } from "react-native-svg";

const BankLineChart = () => {
  const width = 280;
  const height = 70;
  const percentage = 35;

  const x1 = 0;
  const y1 = height / 2;
  const x2 = (width * percentage) / 100;
  const y2 = height / 2;

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
      <View style={{ paddingTop: 20 }}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
        BankLineChart
        </Text>
        <Text style={{ color: "white", fontSize: 10 }}>Statistics</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Svg height={height} width={width}>
        <Line
          x1={0}
          y1={y1}
          x2={width}
          y2={y1}
          stroke="lightgray"
          strokeWidth="4"
        />
        <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={colors.yellow}strokeWidth="4" />
      </Svg>
      </View>
    </View>
  );
};

export default BankLineChart;
