import React, {useEffect, useState} from 'react';
import {Table, Radio, Divider, Card} from 'antd';
import jsonData from '../../../../jsonData/transactions.json'
import Search from "../../../../components/search/Search";
import CustomButton from "../../../../components/button/CustomButton";
import CustomDropdown from "../../../../components/dropdown/CustomDropdown";

const columns = [
    {
        title: 'Category',
        dataIndex: 'category',
    },  {
        title: 'Counter Party',
        dataIndex: 'counter_party',
    },  {
        title: 'Date',
        dataIndex: 'date',
    },{
        title: 'Time',
        dataIndex: 'time'
    },  {
        title: 'Payment type',
        dataIndex: 'payment_type',
    },  {
        title: 'Amount',
        dataIndex: 'amount',
    },
];

interface DataType {
    key: React.Key,
    category: string,
    counter_party: string,
    date: string,
    payment_type: string,
    amount: number
}


// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
        disabled: record.counter_party === 'Disabled User', // Column configuration not to be checked
        name: record.counter_party,
    }),
};

const Transactions = () => {
    const [selectionType, setSelectionType] = useState<'checkbox'>('checkbox');

    const [data, setData] = useState([{
        key: "",
        category: "",
        counter_party: "",
        date: "",
        time: "",
        payment_type: "",
        amount: 0
    }]);

    const [isActiveClass, setIsActiveClass] = useState("allTransactions")

    const handleLink = (value: string) => {
        setIsActiveClass(value)
    }

    useEffect(() => {
      const updatedData = jsonData.map((item) => {
          return {
              key: item.key,
              category: item.category,
              counter_party: item.counter_party,
              date: new Date(item.date).toLocaleDateString(),
              time: new Date(item.date).toLocaleString('en-US', { hour: 'numeric',minute: 'numeric',  hour12: true }),
              payment_type: item.payment_type,
              amount: item.amount
          }
      })
        setData(updatedData)
    }, []);


    return (
        <div className="transactions">
            <div className ="links-table">
                <a
                    className={`link ${isActiveClass == "allTransactions" ? 'active' : ''}`}
                    onClick ={()=> handleLink("allTransactions")}
                >All Transactions</a>
                <a
                    className={`link ${isActiveClass == 'pendingPayments' ? 'active' : ''}`}
                    onClick ={()=> handleLink("pendingPayments")}
                >Pending Payments</a>
                <a
                    className={`link ${isActiveClass == "paymentsReceived" ? 'active' : ''}`}
                    onClick ={()=> handleLink("paymentsReceived")}
                >Payments Received</a>
                <a
                    className={`link ${isActiveClass == "sendPayments" ? 'active' : ''}`}
                    onClick ={()=> handleLink("sendPayments")}
                >Send Payments</a>
            </div>
            <div>
                <Card>
                    <div className="transactions-container">
                        <div>
                            <h6>All Transactions</h6>
                        </div>
                        <div className="button-search-container-transactions">
                            <div className="search-transaction">
                                <Search size="large" placeholder = "Search by user, card name ,payment type ,date, time"/>
                            </div>
                            <div className="buttons-group">
                                <CustomButton height="40px" onClick={()=> {}} radius="10px" width="100px" children = "Pay All"/>
                                <div className = "transaction-dropdown">
                                    <CustomDropdown title="Exsport As" item={["item1", "item2", "item3"]} width="100px" height="40px" font_size = "13px"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Radio.Group
                                onChange={({ target: { value } }) => {
                                    setSelectionType(value);
                                }}
                                value={selectionType}
                            >
                            </Radio.Group>


                            <Table
                                rowSelection={{
                                    type: selectionType,
                                    ...rowSelection,
                                }}
                                columns={columns}
                                dataSource={data}
                                scroll={{ y: 400 }}

                            />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Transactions