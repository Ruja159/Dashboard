import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";

const Payment: React.FC = () =>{
    return (
        <>
            <div className="payment">
                Payment
            </div>
            <Sidebar payment = {true}/>
        </>
    )
}

export default Payment
