import styled from 'styled-components/native';
import colors from '@theme/colors';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
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