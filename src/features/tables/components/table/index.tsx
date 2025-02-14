import React from "react";
import colors from "@theme/colors";
import { FlatList } from "react-native";
import styled from "styled-components/native";

interface DataItem {
  id: string;
  title: string;
  spend: string;
  sales: string;
  acos: string;
}

const data: DataItem[] = [
  { id: "1", title: "BITCOIN", spend: "$30.25", sales: "$149.85", acos: "$149.85" },
  { id: "2", title: "LTC", spend: "$40.00", sales: "$134.00", acos: "$134.50" },
  { id: "3", title: "DAI", spend: "$43.55", sales: "$129.75", acos: "$125.00" },
  { id: "4", title: "SOLANA", spend: "$45.85", sales: "$113.00", acos: "$119.45" },
  { id: "5", title: "TRON", spend: "$54.00", sales: "$99.55", acos: "$85.00" }
];

const Table: React.FC = () => {
  return (
    <Card>
      <Row>
        <ColumnHeader>Title</ColumnHeader>
        <ColumnHeader>Spend</ColumnHeader>
        <ColumnHeader>Price</ColumnHeader>
        <ColumnHeader>Total</ColumnHeader>
      </Row>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Row>
            <Cell>{item.title}</Cell>
            <Cell>{item.spend}</Cell>
            <Cell>{item.sales}</Cell>
            <AcosCell>{item.acos}</AcosCell>
          </Row>
        )}
      />
    </Card>
  );
};

const Card = styled.View`
  padding: 20px;
  border-radius: 10px;
  background-color: ${colors.gray50};
  width: 100%;
`;

const Row = styled.View`
  gap: 20px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
  width: 100%;
`;

const ColumnHeader = styled.Text`
  flex: 1;
  font-size: 15px;
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 15px;
  color: ${colors.white};
`;

const Cell = styled.Text`
  flex: 1;
  padding-top: 10px;
  font-size: 12px;
  padding-bottom: 10px;
  color: ${colors.gray80};
`;

const AcosCell = styled(Cell)`
  font-weight: bold;
  font-size: 12px;
  color: ${colors.yellow};
`;

export default Table;