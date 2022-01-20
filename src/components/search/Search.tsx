import {Input} from "antd";
import {BsSearch} from "react-icons/bs";

const Search = (props: any) => {

    const{size, placeholder,onKeyUp} = props
    return (
        <>
            <Input size={size} placeholder={placeholder} prefix={<BsSearch />} onKeyUp = {onKeyUp} className = "custom-search" />
        </>
    )
}

export default Search