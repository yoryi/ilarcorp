import React from "react";
import colors from "@theme/colors";
import styled from "styled-components/native";
import Svg, { Path, Text as SvgText } from "react-native-svg";

const data = [
  { value: 35, color: colors.green90 },
  { value: 15, color: colors.green10 },
  { value: 25, color: colors.yellow },
  { value: 25, color: colors.yellow },
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

    const midAngle = startAngle - sliceAngle / 2;
    const textX = centerX + (radius / 2) * Math.cos(midAngle);
    const textY = centerY + (radius / 2) * Math.sin(midAngle);

    return (
      <React.Fragment key={index}>
        <Path
          d={pathData}
          strokeWidth={5}
          fill={item.color}
          stroke={colors.gray50}
        />
        <SvgText
          x={textX}
          y={textY}
          fill={colors.black}
          fontSize="8"
          fontWeight={'bold'}
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {item.value + "%"}
        </SvgText>
      </React.Fragment>
    );
  });

  return (
    <Container>
      <Header>
        <Title>PieChart</Title>
        <Subtitle>Statistics</Subtitle>
      </Header>
      <ChartContainer>
        <Svg height="100" width="100">
          {paths}
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

export default PieChartSVG;