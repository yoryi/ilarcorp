import React from "react";
import { View, Text } from "react-native";
import Svg, { Circle, Text as TextSVG } from "react-native-svg";

const ReportScore = ({ score }: { score: number }) => {
  const size = 100;
  const strokeWidth = 5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 100) * circumference;

  const getColor = (score: number) => {
    if (score > 80) return "green";
    if (score > 50) return "orange";
    return "red";
  };

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
          ReportScore
        </Text>
        <Text style={{ color: "white", fontSize: 10 }}>Statistics</Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Svg height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#e0e0e0"
            strokeWidth={strokeWidth}
          />
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={getColor(score)}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
          <TextSVG
            x={size / 4.5}
            y={size / 1.7}
            fill="white"
            fontSize="20"
            fontWeight="bold"
          >
            {score}%
          </TextSVG>
        </Svg>
      </View>
    </View>
  );
};

export default ReportScore;
