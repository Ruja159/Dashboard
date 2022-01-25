import React from "react";
import { Chart } from "react-google-charts";
import data from '../../../../../src/jsonData/incomeSpentData.json'

export const options = {
    chart: {
        title: "Income VS Spent",
    },
};

export function IncomeSpentChart() {
    return (
        <Chart
            chartType="Bar"
            width="100%"
            height="200px"
            data={data}
            options={options}
        />
    );
}
