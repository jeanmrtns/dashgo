import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import { options, series } from "../utils/apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

function Dashboard() {
  return (
    <Layout>
      <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
        <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
          <Text fontSize="lg" mb="4">
            Inscritos da semana
          </Text>
          <Chart options={options} series={series} type="area" height={160} />
        </Box>

        <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
          <Text fontSize="lg" mb="4">
            Taxa de abertura
          </Text>
          <Chart options={options} series={series} type="area" height={160} />
        </Box>
      </SimpleGrid>
    </Layout>
  );
}

export default Dashboard;
