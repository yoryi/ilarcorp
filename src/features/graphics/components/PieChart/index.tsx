import React from "react";
import colors from "@theme/colors";
import { View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

const data = [
  { value: 30, color: colors.blue50 },
  { value: 20, color: colors.gray },
  { value: 25, color: colors.yellow },
  { value: 25, color: "orange" },
];

const PieChartSVG = () => {
  const radius = 45;
  const centerX = 50;
  const centerY = 50;
  const total = data.reduce((sum, item) => sum + item.value, 0);

  let startAngle = 0;

  const paths = data.map((item, index) => {
    const sliceAngle = (item.value / total) * 2 * Math.PI;
    const endAngle = startAngle + sliceAngle;

    const x1 = centerX + radius * Math.cos(startAngle);
    const y1 = centerY + radius * Math.sin(startAngle);
    const x2 = centerX + radius * Math.cos(endAngle);
    const y2 = centerY + radius * Math.sin(endAngle);

    const largeArcFlag = sliceAngle > Math.PI ? 1 : 0;

    const pathData = `
      M ${centerX} ${centerY}
      L ${x1} ${y1}
      A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
      Z
    `;

    startAngle = endAngle;
    
    return (
      <Path
        key={index}
        d={pathData}
        strokeWidth={2}
        fill={item.color}
        stroke={colors.gray50}
      />
    );
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
          PieChart
        </Text>
        <Text style={{ color: "white", fontSize: 10 }}>Statistics</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Svg height="100" width="100">
        {paths}
      </Svg>
      </View>
    </View>
  );
};

export default PieChartSVG;
