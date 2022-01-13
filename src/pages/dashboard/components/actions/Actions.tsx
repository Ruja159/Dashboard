import {useEffect, useState} from "react";
import actionsData from '../../../../jsonData/actionsData.json'
import {Card} from "antd";
import {Button} from "react-bootstrap"

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
                <h3>Actions</h3>
                <h4>Approve payments</h4>
                <div>
                    {podaci.map((item: any) => {
                       return(
                           <>
                               {item.name}
                               {item.due}
                               {item.price}
                           </>
                       )
                    })})
                </div>
            </div>
             <Button variant="link">View all</Button>
            </Card>
    )
}

export default Actions