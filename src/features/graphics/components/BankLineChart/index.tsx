import colors from "@theme/colors";
import React from "react";
import styled from "styled-components/native";
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
    <Container>
      <Header>
        <Title>BankLineChart</Title>
        <Subtitle>Statistics</Subtitle>
      </Header>
      <ChartContainer>
        <Svg height={height} width={width}>
          <Line
            x1={0}
            y1={y1}
            x2={width}
            y2={y1}
            stroke="lightgray"
            strokeWidth="4"
          />
          <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={colors.yellow} strokeWidth="4" />
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
  flex: 1;
`;

export default BankLineChart;