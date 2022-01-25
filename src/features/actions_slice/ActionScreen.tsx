import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {Card} from "antd";
import React, {useEffect} from "react";
import {getActionsAsync} from "./ActionsSlice";
import CustomButton from "../../components/button/CustomButton";
import {Button} from "react-bootstrap";
import '../../../src/pages/dashboard/components/actions/actions.scss'



const ActionsScreen = (props: any) => {
    const value: any = useAppSelector((state) => state.actions);
    const dispatch = useAppDispatch();

    const {title,subtitle} = props


    useEffect(() => {
        dispatch(getActionsAsync())
    }, [dispatch]);


    return (
        <Card>
            <div>
                <h5>{title}</h5>
                <h6>{subtitle}</h6>
                <div>
                    {value.map((item: any) => {
                        return(
                            <div className ="action-list" key = {item.id}>
                                <div>
                                    <div className="action-list-name">
                                        {item.name}
                                    </div>
                                    <div className="action-list-price">
                                       <span>
                                            {item.due}
                                       </span>
                                        <span>
                                            {item.price}
                                       </span>
                                    </div>
                                </div>
                                <div>
                                    <CustomButton
                                        children = "Approve"
                                        height="30px"
                                        width="auto"
                                        onClick={()=>{console.log("ADSFDGH")}}
                                        radius= "10px"
                                        padding = "10px"
                                        margin = "auto"
                                    />
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
            <div className="button-container">
                <Button variant="link" className="link-button">View all</Button>
            </div>
        </Card>
    )
}

export default ActionsScreen