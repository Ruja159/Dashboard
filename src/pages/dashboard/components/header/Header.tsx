import './header.scss';
import {BsSearch} from "react-icons/bs";
import { Input } from "antd";



const Header = () => {
    return (
        <div className='header'>
            <div className="title">
                <h2>Dashboard</h2>
                <h5>Overview</h5>
            </div>

            <div className="search">
                <Input size="large" placeholder="Search" prefix={<BsSearch />} />
            </div>
        </div>
    )
}

export default Header;