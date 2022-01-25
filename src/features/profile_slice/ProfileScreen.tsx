import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {Card} from "antd";
import Notification from "../../pages/dashboard/components/notifications/Notification";
import React, {useEffect} from "react";
import {getProfileAsync} from "./profileSlice";

const ProfileScreen = () => {
    const {name, lastName, profilePicture} = useAppSelector((state) => state.profile);
    const dispatch = useAppDispatch();

    useEffect(() => {
            dispatch(getProfileAsync())
    }, []);


 return (
     <Card className="card-profile">
         <div className="card-profile-name">
             <div>
                 {name} {lastName}
             </div>
         </div>
         <div className="notification">
             <Notification/>
         </div>
         <img src= {profilePicture} className="profile-img"/>
     </Card>
 )
}

export default ProfileScreen