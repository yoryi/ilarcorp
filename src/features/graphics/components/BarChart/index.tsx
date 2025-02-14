import React from 'react';
import styled from 'styled-components/native';
import Svg, { Rect, Text as TextSVG } from "react-native-svg";
import colors from '@theme/colors';

const data = [50, 10, 40, 10, 85, 67, 35, 53, 24, 50];
export default function PieChart() {
  const barWidth = 20;
  const spacing = 10;
  const chartHeight = 100;
  const chartWidth = data.length * (barWidth + spacing);

  return (
    <Container>
      <Header>
        <Title>BarChart</Title>
        <Subtitle>Statistics</Subtitle>
      </Header>
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
    </Container>
  );
}

const Container = styled.View`
  background-color: #1c1c1e;
  height: 200px;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 15px;
`;

const Header = styled.View`
  padding-bottom: 20px;
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