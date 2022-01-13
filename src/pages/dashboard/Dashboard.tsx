import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "./components/header/Header";
import {IncomeSpentChart} from "./components/charts/IncomeSpentChart";
import {TotalBalanceChart} from "./components/charts/TotalBalanceChart";
import {SpendingByDepartment} from "./components/charts/SpendingByDepartment";
import {CustomCard} from "../../components/cards/CustomCard";
import Button from "../../components/button/CustomButton";
import DropDown from "../../components/dropdown/CustomDropdown";
import {CustomDatePicker} from "../../components/pickers/DatePicker";
const Dashboard: React.FC = () =>{
    return (
        <>
            <div className="dashboard">
                <Header />
                <div className = "button-group">
                    <DropDown title = "Mpesa Acc" height="45px" width="200px" item={["item1", "item2", "item3"]} />
                    <CustomDatePicker />
                </div>
                <div>
                    <Button
                        height = "45px"
                        onClick={()=> {console.log("RADI")}}
                        radius = "50px"
                        width="200px"
                        children="Quick Transfer"
                        rightLeftArrow ={true}
                    />
                </div>

                <div className= "charts">
                    <CustomCard custom = { <TotalBalanceChart />} isCollapsable = {true}/>
                    <CustomCard custom = { <IncomeSpentChart />}  isCollapsable = {true}/>
                    <CustomCard custom = { <SpendingByDepartment />}  isCollapsable = {true}/>
                    <CustomCard custom = { <TotalBalanceChart />}  isCollapsable = {true}/>
                    <CustomCard custom = { <TotalBalanceChart />} isCollapsable = {true}/>
                </div>
            </div>
            <Sidebar />
        </>
    )
}

export default Dashboard
