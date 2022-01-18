import jsonData from '../../../../jsonData/paymentActions.json'
import {useEffect, useState} from "react";


const PaymentActions = () => {

    const [data, setData] = useState([{icon: '', text: ""}]);

    useEffect(() => {
       setData((jsonData))
    }, []);

    return (
            <div>
                <div style = {{padding: "8px 0" , fontWeight:"bold"}}>Actions</div>
                <div className = "payment-actions-container">
                    {data.map((item) => {
                        return (
                            <div className = "payment-action">
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