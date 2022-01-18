import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Search from "../../components/search/Search";
import CustomButton from "../../components/button/CustomButton";
import Balance from "../dashboard/components/balance/Balance";
import PaymentActions from "../dashboard/components/payment_actions/PaymentActions";
import Transactions from "../dashboard/components/transactions/Transactions";

const Payment: React.FC = () =>{
    return (
        <>
            <div className='payment-container'>
                <div className = "payment-button-search">
                    <div className="title">
                        <h2 style ={{fontWeight: "bold"}}>Payment</h2>
                    </div>
                    <div className = "button-search-container">
                        <div className = 'custom-button-group'>
                            <CustomButton height="40px" onClick={()=> {console.log("RADI")}} radius="13px" width="120px"/>
                            <CustomButton height="40px" onClick={()=> {console.log("RADI")}} radius="13px" width="120px"/>
                        </div>
                        <div className="search">
                            <Search size="large" placeholder="Search"/>
                        </div>
                    </div>
                </div>
                <Balance />
                <PaymentActions />

                <Transactions />
            </div>
            <Sidebar payment = {true}/>
        </>
    )
}

export default Payment
