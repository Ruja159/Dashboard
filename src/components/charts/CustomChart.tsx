import React,{useState,useEffect} from 'react'
import { Chart } from "react-google-charts";


const ChartComponent = (props: any) => {
    const {
        width,
        height,
        data,
        chartType,
        options} = props

    return (
        <div>
            <Chart
                width={width}
                height={height}
                chartType={chartType}
                data={data}
                options={options}
            />
        </div>
    )
}

export default ChartComponent