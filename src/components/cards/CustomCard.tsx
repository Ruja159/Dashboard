import React, {useState} from 'react';
import {Card} from "antd";
import { AiFillCaretDown } from "react-icons/ai";

export const CustomCard = (props: any) => {

    const {
       custom,width,isCollapsable,height
    } = props

    const [isCollapsed, setIsCollapsed] = useState(true)

    const collapse = () => {
       setIsCollapsed(!isCollapsed);
    }

    return (
        isCollapsable ?
               <Card className={`card ${!isCollapsed ? "collapsed" : ""}`} style={{width: width, borderRadius:"20px"}}>
                   <button onClick={collapse} className ="button">
                      collapse
                       <AiFillCaretDown />
                   </button>
                        <div className= "customComponents">{custom}
                   </div>
               </Card> :
            <div>
               <Card  style={{width: width, borderRadius:"20px", height: height}}/>
            </div>


    )
}
