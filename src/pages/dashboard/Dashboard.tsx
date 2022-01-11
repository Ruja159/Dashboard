import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "./components/header/Header";
import {IncomeSpentChart} from "./components/charts/IncomeSpentChart";
import {TotalBalanceChart} from "./components/charts/TotalBalanceChart";
import {SpendingByDepartment} from "./components/charts/SpendingByDepartment";
import {CustomCard} from "../../components/cards/CustomCard";
const Dashboard: React.FC = () =>{
    return (
        <>
            <div className="dashboard">
                <Header />
                <div className= "charts">
                    <CustomCard custom = { <TotalBalanceChart />} />
                    <CustomCard custom = { <IncomeSpentChart />} />
                    <CustomCard custom = { <SpendingByDepartment />} />
                </div>
            </div>
            <Sidebar />
        </>
    )
}

export default Dashboard
