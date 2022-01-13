import {CustomCard} from "../cards/CustomCard";
import Profile from "../../pages/dashboard/components/profile/Profile";

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <Profile name={"Aleksandar Rujevic"} profile_picture = {"PROFILNA SLIKA"}/>
                <CustomCard height = "300px"/>
                <CustomCard height = "200px"/>
                <CustomCard height = "200px"/>
            </div>
        </>
    )
}

export default Sidebar;