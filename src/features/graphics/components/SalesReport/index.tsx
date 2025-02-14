import React from "react";
import { View, Text } from "react-native";
import Svg, { Circle, Polyline } from "react-native-svg";

const salesData = [500, 700, 1200, 900, 1400, 1100];

const SalesReport = () => {
  const width = 300;
  const height = 150;
  const padding = 30;
  const maxValue = Math.max(...salesData);

  const points = salesData.map((value, index) => {
    const x = padding + (index / (salesData.length - 1)) * (width - 2 * padding);
    const y = height - padding - (value / maxValue) * (height - 2 * padding);
    return `${x},${y}`;
  });

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
    <View style={{ paddingBottom: 10, paddingTop: 20 }}>
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
      SalesReport
      </Text>
      <Text style={{ color: "white", fontSize: 10 }}>Statistics</Text>
    </View>
      <Svg width={width} height={height}>
        <Polyline points={points.join(" ")} fill="none" stroke="white" strokeWidth={2} />
        {points.map((point, index) => {
          const [x, y] = point.split(",").map(Number);
          return <Circle key={index} cx={x} cy={y} r={4} fill={'orange'} />;
        })}
      </Svg>
    </View>
  );
};

export default SalesReport;

