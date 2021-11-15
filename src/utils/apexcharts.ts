import theme from "@chakra-ui/theme";
import { Props as ApexProps } from 'react-apexcharts'

export const options: ApexProps = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2021-03-24T00:00:00.000Z",
      "2021-03-26T00:00:00.000Z",
      "2021-03-27T00:00:00.000Z",
      "2021-03-28T00:00:00.000Z",
      "2021-03-29T00:00:00.000Z",
      "2021-03-30T00:00:00.000Z",
      "2021-04-01T00:00:00.000Z",
    ],
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

export const series = [
  {
    name: "series1",
    data: [31, 120, 10, 28, 61, 13, 103],
  },
];
