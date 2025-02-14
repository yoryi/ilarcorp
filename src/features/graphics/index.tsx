import { Container } from './theme';
import GraphicsScreen from './screens';
import { StatusBar } from 'expo-status-bar';

const Graphics: React.FC = () => {
  return (
    <Container>
      <StatusBar style='light' />
      <GraphicsScreen />
    </Container>
  );
};

export default Graphics;