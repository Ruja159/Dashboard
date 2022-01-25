import jsonData from '../../../../../src/jsonData/paymentActions.json'
import {useEffect, useState} from "react";


const PaymentActions = () => {

    const [data, setData] = useState([{id: 0, icon: '', text: ""}]);

    useEffect(() => {
       setData((jsonData))
    }, []);

    return (
            <div>
                <div style = {{padding: "8px 0" , fontWeight:"bold"}}>Actions</div>
                <div className = "payment-actions-container">
                    {data.map((item) => {
                        return (
                            <div className = "payment-action" key ={item.id}>
                                <img src={item.icon} alt="" className = "payment-icons"/>
                                <div className = "payment-text">{item.text}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
    )
}
export default PaymentActions