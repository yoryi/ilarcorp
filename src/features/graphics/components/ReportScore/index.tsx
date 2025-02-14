import React from "react";
import styled from "styled-components/native";
import Svg, { Circle, Text as TextSVG } from "react-native-svg";

const ReportScore = ({ score }: { score: number }) => {
  const size = 100;
  const strokeWidth = 9;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 100) * circumference;

  const getColor = (score: number) => {
    if (score > 80) return "green";
    if (score > 50) return "orange";
    return "red";
  };

  return (
    <Container>
      <Header>
        <Title>ReportScore</Title>
        <Subtitle>Statistics</Subtitle>
      </Header>
      <ChartContainer>
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
            x={size / 3.5}
            y={size / 1.7}
            fill="white"
            fontSize="20"
            fontWeight="bold"
          >
            {score}%
          </TextSVG>
        </Svg>
      </ChartContainer>
    </Container>
  );
};

const Container = styled.View`
  background-color: #1c1c1e;
  height: 200px;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 15px;
`;

const Header = styled.View`
  padding-bottom: 10px;
  padding-top: 20px;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

const Subtitle = styled.Text`
  color: white;
  font-size: 10px;
`;

const ChartContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export default ReportScore;