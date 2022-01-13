import Profile from "../../pages/dashboard/components/profile/Profile";
import Actions from "../../pages/dashboard/components/actions/Actions";
import OutstandingReceipt from "../../pages/dashboard/components/outstanding_receipt/OutstandingReceipt";
import NewsFeeds from "../../pages/dashboard/components/newsfeeds/NewsFeeds";

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="card-sidebar">
                    <Profile />
                </div>
                <div className="card-sidebar">
                    <Actions/>
                </div>
                <div className="card-sidebar">
                    <OutstandingReceipt />
                </div>
                <div className="card-sidebar">
                    <NewsFeeds />
                </div>
            </div>
        </>
    );
}

export default Sidebar;