import React from 'react';
import Notification from "../notifications/Notification";
import {Card} from "antd";

interface Props {
    name: string,
    profile_picture: any
}

const Profile: React.FC<Props> = ({name, profile_picture}) => {


    return (
        <Card>
            <div>
                {name}
                <Notification />
            </div>
            <div>
                {profile_picture}
            </div>
        </Card>
    )
}

export default Profile