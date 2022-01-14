import React from 'react'
import Profile from "../../pages/dashboard/components/profile/Profile";
import Actions from "../../pages/dashboard/components/actions/Actions";
import OutstandingReceipt from "../../pages/dashboard/components/outstanding_receipt/OutstandingReceipt";
import NewsFeeds from "../../pages/dashboard/components/newsfeeds/NewsFeeds";
import CustomButton from "../button/CustomButton";
import SuggestedTopUp from "../../pages/dashboard/components/suggested_top_up/SuggestedTopUp";
import Utility from "../../pages/dashboard/components/utility/Utility";

interface Props {
    dashboard?: boolean
    payment?: boolean
}

const Sidebar: React.FC<Props> = ({
                                        dashboard,
                                        payment
                                  }) => {


    return (
        <>{dashboard ?
            <div className="sidebar">
                <div className="card-sidebar">
                    <Profile/>
                </div>
                <div className="card-sidebar">
                    <Actions title="Actions" subtitle="Approve payments"/>
                </div>
                <div className="card-sidebar">
                    <OutstandingReceipt/>
                </div>
                <div className="card-sidebar">
                    <NewsFeeds/>
                </div>
            </div>
         : "" }

            {payment ?
            <div className="sidebar payment">
                <Profile />
                <div className="sidebar-top-up">
                    <h6>Top up</h6>
                    <div className ="top-up">
                        <CustomButton height="50px" onClick={()=>{}} radius="10px" width="50%" children="Mobile Wallet"/>
                        <CustomButton height="50px" onClick={()=>{}} radius="10px" width="50%" children="Virtual Card"/>
                    </div>
                </div>
               <div>
                   <SuggestedTopUp />
               </div>
                <div>
                    <Actions title = "Pending Actions"/>

                </div>
                <div>
                    <Utility />
                </div>
            </div>
            : "" }
        </>
    );
}

export default Sidebar;