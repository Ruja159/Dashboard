import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {useEffect} from "react";
import {getPaymentActionsAsync} from "./paymentActionsSlice";

const PaymentActionsFeatures = () => {

    const data: any = useAppSelector((state) => state.paymentAction)
    const dispatch = useAppDispatch()

    useEffect(() => {
       dispatch(getPaymentActionsAsync())
    }, []);
console.log(data, "PAYMENT ACTIONS DATA")
    
    return (
        <div>
            <div style = {{padding: "8px 0" , fontWeight:"bold"}}>Actions</div>
            <div className = "payment-actions-container">
                {data.map((item: any) => {
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

export default PaymentActionsFeatures