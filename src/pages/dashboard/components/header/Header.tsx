import './header.scss';
import {BsSearch} from "react-icons/bs";
import { Input } from "antd";
import Search from "../../../../components/search/Search";



const Header = () => {
    return (
        <div className='header'>
            <div className="title">
                <h2>Dashboard</h2>
                <h5>Overview</h5>
            </div>

            <div className="search">
               <Search size="large" placeholder="Search"/>
            </div>
        </div>
    )
}

export default Header;