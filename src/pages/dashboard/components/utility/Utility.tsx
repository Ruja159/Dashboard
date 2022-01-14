import Search from "../../../../components/search/Search";
import {GiElectric, GiWaterDrop} from "react-icons/gi";
import {FaInternetExplorer} from "react-icons/fa";
import {Card} from "antd";

const Utility = () => {
    return (
        <Card>
            <h6>
                Utility Expanse
            </h6>
            <div className="search-utility">
                <Search size = "small" placeholder = "Search Organisation name" />
            </div>
            <div className ="icons">
                <div className="icon">
                    <GiElectric/>
                    <span>Electricity</span>
                </div>
                <div className="icon">
                    <GiWaterDrop/>
                    <span>Water</span>
                </div>
                <div className="icon">
                    <FaInternetExplorer/>
                    <span>Internet</span>
                </div>
            </div>
        </Card>
    )
}

export default Utility