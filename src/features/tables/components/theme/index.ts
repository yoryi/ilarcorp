import styled from 'styled-components/native';
import colors from '@theme/colors';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  width: 90%;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.black};
  align-items: center;
  justify-content: center;
`;

export const Space = styled.View<{ $height?: number }>`
  height: ${(props: { $height: number; }) => `${props.$height ?? 30}px`};
  background-color: ${colors.black};
`;

export const Title = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;