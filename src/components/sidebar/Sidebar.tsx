import {CustomCard} from "../cards/CustomCard";
import Profile from "../../pages/dashboard/components/profile/Profile";
import Actions from "../../pages/dashboard/components/actions/Actions";
import OutstandingReceipt from "../../pages/dashboard/components/outstanding_receipt/OutstandingReceipt";

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <Profile name={"Aleksandar Rujevic"} profile_picture={"PROFILNA SLIKA"}/>
                <Actions/>
                <OutstandingReceipt />
                <CustomCard height="200px"/>
            </div>
        </>
    );
}

export default Sidebar;