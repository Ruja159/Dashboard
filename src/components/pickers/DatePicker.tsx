import { DatePicker, Space } from 'antd';
import {AiOutlineLine} from "react-icons/ai";

const { RangePicker } = DatePicker;

export const CustomDatePicker = () => {
    return (
        <>
            <RangePicker picker="month" className="custom-date-picker" format = "MMM YYYY" superNextIcon={<AiOutlineLine />}/>
        </>
    )

}
