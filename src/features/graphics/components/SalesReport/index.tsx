import React from "react";
import styled from "styled-components/native";
import Svg, { Circle, Polyline, Line, Text as SvgText } from "react-native-svg";

const salesData = [500, 700, 1200, 900, 1900, 1100];

const SalesReport = () => {
  const width = 300;
  const height = 150;
  const padding = 40;
  const maxValue = Math.max(...salesData);
  const minValue = Math.min(...salesData);

  const points = salesData.map((value, index) => {
    const x =
      padding + (index / (salesData.length - 1)) * (width - 2 * padding);
    const y =
      height -
      padding -
      ((value - minValue) / (maxValue - minValue)) * (height - 2 * padding);
    return { x, y, value };
  });

  return (
    <Container>
      <Header>
        <Title>Sales Report</Title>
        <Subtitle>Statistics</Subtitle>
      </Header>
      <Svg width={width} height={height}>
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => {
          const y = height - padding - ratio * (height - 2 * padding);
          const value = Math.round(minValue + ratio * (maxValue - minValue));
          return (
            <React.Fragment key={index}>
              <SvgText
                x={padding - 10}
                y={y + 1}
                fill="white"
                fontSize={10}
                textAnchor="end"
              >
                {value + '$'}
              </SvgText>
              <Line
                y1={y}
                y2={y}
                x1={padding}
                stroke="gray"
                strokeWidth={1}
                x2={width - padding}
              />
            </React.Fragment>
          );
        })}
        <Polyline
          points={points.map((p) => `${p.x},${p.y}`).join(" ")}
          fill="none"
          stroke="white"
          strokeWidth={2}
        />
        {points.map((point, index) => (
          <React.Fragment key={index}>
            <Circle cx={point.x} cy={point.y} r={4} fill="orange" />
            <SvgText
              x={point.x}
              y={point.y - 10}
              fill="white"
              fontSize={8}
              textAnchor="middle"
            >
              {point.value}
            </SvgText>
          </React.Fragment>
        ))}
      </Svg>
    </Container>
  );
};

const Container = styled.View`
  background-color: #1c1c1e;
  height: 200px;
  padding-left: 30px;
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

export default SalesReport;