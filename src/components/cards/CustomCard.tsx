import React, {useState} from 'react';
import {Card} from "antd";
import { AiFillCaretDown } from "react-icons/ai";

export const CustomCard = (props: any) => {

    const {
       custom
    } = props

    const [isCollapsed, setIsCollapsed] = useState(true)

    const collapse = () => {
       setIsCollapsed(!isCollapsed);
    }

    return (
   <Card className={`card ${!isCollapsed ? "collapsed" : ""}`}>
       <button onClick={collapse} className ="button">
          collapse
           <AiFillCaretDown />
       </button>
            <div className= "customComponents">{custom}
       </div>
   </Card>
    )
}
