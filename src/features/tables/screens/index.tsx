import { InfoTable } from "../components";
import { SafeAreaView, Space, Title } from "@theme/container";

export default function Tables() {
  return (
    <SafeAreaView>
      <Space $height={30} />
      <Title>Table</Title>
      <Space $height={30} />
      <InfoTable />
    </SafeAreaView>
  );
}
