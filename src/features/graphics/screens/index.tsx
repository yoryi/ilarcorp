import { ScrollView } from "react-native";
import { BarChart, PieChart } from "../components";
import { SafeArea, Space, Title } from "../theme";

const Graphics: React.FC = () => {
  return (
    <SafeArea>
      <Space $height={30} />
      <Title>Dashboard</Title>
      <ScrollView contentContainerStyle={{ paddingVertical: 40 }}>
        <BarChart />
        <Space $height={20} />
        <PieChart />
      </ScrollView>
    </SafeArea>
  );
};

export default Graphics;
