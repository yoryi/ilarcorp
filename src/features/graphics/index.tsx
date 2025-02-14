import GraphicsScreen from './screens';
import { StatusBar } from 'expo-status-bar';
import { Container } from '@theme/container';

const Graphics: React.FC = () => {
  return (
    <Container>
      <StatusBar style='light' />
      <GraphicsScreen />
    </Container>
  );
};

export default Graphics;