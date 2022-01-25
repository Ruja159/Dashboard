import jsonData from '../../../../../src/jsonData/outstandingReceipt.json'
import {useEffect, useState} from "react";
import {Card} from "antd";
import {Button} from "react-bootstrap";

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
                <h6 style={{marginBottom: "16px"}}>Outstanding Receipt</h6>
                <div className="container-list">
                    {data.map((item: any) => {
                        return (
                            <div>
                                <div className="profile-name">
                                    <div className="profile-name-container">
                                        <img src={item.img} className="img"/>
                                        <div style={{fontWeight: 600}}>
                                            {item.profile_name}
                                        </div>
                                    </div>
                                    <div style={{color: "orange" , fontSize: "10px"}}>
                                        {item.status}
                                    </div>
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

export default OutstandingReceipt