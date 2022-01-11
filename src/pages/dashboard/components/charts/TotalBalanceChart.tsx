import React from "react";
import { Chart } from "react-google-charts";
import data from '../../../../jsonData/totalBalanceData.json'

export const options = {
    title: "Total Balance",
    curveType: "function",
    legend: { position: "bottom" },
};

export function TotalBalanceChart() {
    return (
        <Chart
            chartType="LineChart"
            width="100%"
            height="200px"
            data={data}
            options={options}
        />
    );
}
