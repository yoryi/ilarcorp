import React from "react";
import { InfoTable } from "../components";
import { SafeAreaView, Space, Title } from "@theme/container";

const Tables: React.FC = () => {
  return (
    <SafeAreaView>
      <Space $height={30} />
      <Title>Table</Title>
      <Space $height={30} />
      <InfoTable />
    </SafeAreaView>
  );
};

export default Tables;