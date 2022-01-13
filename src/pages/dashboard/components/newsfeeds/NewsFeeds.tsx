import jsonData from '../../../../jsonData/newsFeeds.json'
import {useEffect, useState} from "react";
import {Card} from "antd";
import {IoNotificationsCircle} from "react-icons/io5";

const NewsFeeds = () => {

    const [data, setData] = useState([{feed: ""}])

    useEffect(() => {
        getDatas()
    }, []);

    const getDatas = () => {
        setData(jsonData)
    }

    return (
       <Card>
           <div>
               <h6>What's New</h6>
               {data.map((item: any)=> {
                   return(
                       <div className="feeds-container">
                           <div>
                               <IoNotificationsCircle />
                           </div>
                           <div>
                               {item.feed}
                           </div>
                       </div>
                   )
               })}
           </div>
       </Card>
    )
}

export default NewsFeeds