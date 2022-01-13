import jsonData from '../../../../jsonData/outstandingReceipt.json'
import {useEffect, useState} from "react";
import {Card} from "antd";

const OutstandingReceipt = () => {

    const [data, setData] = useState([{img:"" , profile_name: "", status: ""}])

    useEffect(()=>{
        getData();
    },[])

    const getData = () => {
        setData(jsonData)
    }

    return (
        <Card>
            <div>
                <div>
                    {data.map((item: any) => {
                        return (
                            <div>
                                <div>{item.img}</div>
                                <div>{item.profile_name}</div>
                                    <div>
                                        <div>
                                            {item.status}
                                        </div>
                                    </div>
                            </div>
                    )
                    })}
                </div>
            </div>
        </Card>
    )
}

export default OutstandingReceipt