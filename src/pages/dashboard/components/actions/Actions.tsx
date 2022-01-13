import {useEffect, useState} from "react";
import actionsData from '../../../../jsonData/actionsData.json'
import {Card} from "antd";
import {Button} from "react-bootstrap"
import CustomButton from "../../../../components/button/CustomButton";

const Actions = () => {
    const [podaci, setPodaci] = useState([{name:"", due: "", price:""}]);

    useEffect(() => {
        getDatas()
    }, []);

    const getDatas = () => {
        setPodaci(actionsData)
    }

    return (
        <Card>
            <div>
                <h5>Actions</h5>
                <h6>Approve payments</h6>
                <div>
                    {podaci.map((item: any) => {
                       return(
                           <div className ="action-list">
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

export default Actions