import React, {useEffect, useState} from 'react';
import {Card} from "antd";
import jsonData from '../../../../../src/jsonData/pendingActions.json'
import {RiArrowUpSLine} from "react-icons/ri";

const SuggestedTopUp: React.FC = () => {

    const [data, setData] = useState([{id:0 ,name:"" , salary: ""}]);

    useEffect(() => {
        getData()
    }, []);


    const getData = () => {
        setData(jsonData)
    }

    return (
        <>
            <Card>
                <h6>Suggested Top up</h6>
                <div className="container-list">
                    {data.map((item: any) => {
                      const bool = item.salary.includes("-") ? true : false
                        return (
                            <div key ={item.id} className = "suggested-top">
                                <div className= "arrow-button-container">
                                    <div>
                                        <RiArrowUpSLine className={` ${bool ? "negative-value": "positive-value"} ri-arrow`}/>
                                    </div>
                                    <div>
                                        {item.name}
                                    </div>
                                </div>
                                <div style={bool ? {color: "red"} : {color: "#1cc91c"}}>
                                    {item.salary}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Card>
        </>
    )
}

export default SuggestedTopUp