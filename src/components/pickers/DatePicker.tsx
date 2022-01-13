import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

export const CustomDatePicker = () => {
    return (
        <>
            <RangePicker picker="month" className="custom-date-picker" format = "MMM YYYY"/>
        </>
    )

}
