import {Input} from "antd";
import {BsSearch} from "react-icons/bs";

const Search = (props: any) => {

    const{size, placeholder} = props
    return (
        <>
            <Input size={size} placeholder={placeholder} prefix={<BsSearch />} />
        </>
    )
}

export default Search