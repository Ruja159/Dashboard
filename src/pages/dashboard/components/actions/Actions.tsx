import {useEffect, useState} from "react";
import actionsData from '../../../../jsonData/actionsData.json'
import {Card} from "antd";
import {Button} from "react-bootstrap"
import CustomButton from "../../../../components/button/CustomButton";
import ActionsScreen from "../../../../features/actions_slice/ActionScreen";

const Actions = (props: any) => {
    // const [podaci, setPodaci] = useState([{name:"", due: "", price:""}]);
    //
    // useEffect(() => {
    //     getDatas()
    // }, []);
    //
    // const getDatas = () => {
    //     setPodaci(actionsData)
    // }

    return (
       <ActionsScreen props = {props}/>
    )
}

export default Actions