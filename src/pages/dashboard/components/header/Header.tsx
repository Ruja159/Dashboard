import './header.scss';
import {BsSearch} from "react-icons/bs";
import { Input } from "antd";
import Search from "../../../../components/search/Search";



const Header = (props: any) => {
    const{title, subtitle} = props
    return (
        <div className='header'>
            <div className="title">
                <h2>{title}</h2>
                <h5 style={{color: "#adadad", fontSize: "18px"}}>{subtitle}</h5>
            </div>

            <div className="search">
               <Search size="large" placeholder="Search"/>
            </div>
        </div>
    )
}

export default Header;