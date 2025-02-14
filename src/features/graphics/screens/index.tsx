import { ScrollView } from "react-native";
import { SafeArea, Space, Title } from "../theme";
import { BarChart, PieChart, ReportScore, SalesReport } from "../components";

const Graphics: React.FC = () => {
  return (
    <SafeArea>
      <Space $height={30} />
      <Title>Dashboard</Title>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 40 }}>
        <BarChart />
        <Space $height={20} />
        <PieChart />
        <Space $height={20} />
        <ReportScore score={60} />
        <Space $height={20} />
        <SalesReport />
        <Space $height={20} />
      </ScrollView>
    </SafeArea>
  );
};

export default Graphics;
