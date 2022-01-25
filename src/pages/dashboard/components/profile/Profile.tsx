import React, { useState} from 'react';
import Notification from "../notifications/Notification";
import {Card} from "antd";
import ProfileScreen from "../../../../features/profile_slice/ProfileScreen";

const Profile = () => {

    const [data,setData] = useState({profile_name: "John Doe", img:"https://jejuhydrofarms.com/wp-content/uploads/2020/05/blank-profile-picture-973460_1280.png"})

    return (
        // <Card className="card-profile">
        //     <div className="card-profile-name">
        //         <div>
        //             {data.profile_name}
        //         </div>
        //     </div>
        //         <div className="notification">
        //             <Notification/>
        //         </div>
        //     <img src= {data.img} className="profile-img"/>
        // </Card>
        <ProfileScreen />
    )
}

export default Profile