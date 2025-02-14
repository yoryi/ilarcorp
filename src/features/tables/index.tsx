import TablesScreen from './screens';
import { Container } from '@theme/container';
import { StatusBar } from 'expo-status-bar';

const Tables: React.FC = () => {
  return (
    <Container>
      <StatusBar style="light" />
      <TablesScreen />
    </Container>
  );
};

export default Tables;