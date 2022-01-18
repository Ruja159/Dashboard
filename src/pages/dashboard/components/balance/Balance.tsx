import jsonData from '../../../../jsonData/balanceData.json'
import React, {useEffect} from 'react'
import {useState} from "react";

const Balance: React.FC = () => {

    const [data, setData] = useState([{bank: "", mobile_wallet: "", virtual_card: ""}]);

    useEffect(() => {
       setData(jsonData);
    }, []);


    return (
        <>
            <div>
                <div style={{padding: "5px 0"}}>My Balance</div>
                <div>
                    {data.map(item => {
                        return (
                            <div className="balance-containcer">

                                    <div className ={`bank-wallet-card color ${item.virtual_card ? "bank-color" : "neutral-color"}`}>Bank</div>
                                    <div className = "cash">
                                        {item.bank}
                                    </div>


                                    <div className ={`bank-wallet-card color ${item.virtual_card ? "wallet-color" : "neutral-color"}`}>Mobile Wallet</div>
                                    <div className = "cash">
                                        {item.mobile_wallet}
                                    </div>


                                    <div className ={`bank-wallet-card color ${item.virtual_card ? "card-color" : "neutral-color"}`}>Virtual Card</div>
                                    <div className = "cash">
                                        {item.virtual_card}
                                    </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Balance