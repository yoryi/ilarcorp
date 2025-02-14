import { ScrollView } from "react-native";
import { SafeAreaView, Space, Title } from "@theme/container";
import { BarChart, PieChart, ReportScore, SalesReport, BankLineChart } from "../components";

const Graphics: React.FC = () => {
  return (
    <SafeAreaView>
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
        <BankLineChart />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Graphics;
