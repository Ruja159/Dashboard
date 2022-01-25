import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {Card, Radio, Table} from "antd";
import Search from "../../components/search/Search";
import CustomButton from "../../components/button/CustomButton";
import CustomDropdown from "../../components/dropdown/CustomDropdown";
import React, {useEffect, useState} from "react";
import {getAsyncTransactions, reset, updateTransactionState} from "./TranslactionSlice";
import '../../pages/dashboard/components/transactions/transactions.scss'

const colorColumn = (title: string) => {
    if(title == "traveling"){
        return "red"
    }
    if(title == "uber"){
        return "green"
    }
    if(title == "adobe inc"){
        return "yellow"
    }
    if(title == "mpesa"){
        return "purple"
    }
}
const columns = [
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        width: "23%",
        render: (category: any) => (
            <div className = "category-container">
                <div className = "line" style = {{background: colorColumn(category.title)}} ></div>
                <img src={category.icon} alt="" className = "category-image"/>
                <div className = "title-subtitle">
                    <div className = "category-title">{category.title}</div>
                    <div className = "category-subtitle">{category.subtitle}</div>
                </div>
            </div>
        )
    },  {
        title: 'Counter Party',
        key: 'profile',
        dataIndex: 'profile',
        width: "17%",
        render: (profile: any )=> (
            <div className = "counter-party-container">
                <img src={profile.image} alt="" className = "counter-party-image"/>
                <div>
                    {profile.counter_party}
                </div>
            </div>
        ),
    },  {
        title: 'Date',
        dataIndex: 'date',
        key: 'date'
    },{
        title: 'Time',
        dataIndex: 'time',
        key: 'key'
    },  {
        title: 'Payment type',
        dataIndex: 'payment_type',
        key: 'payment_type'
    },  {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
        render: (amount: any) =>
            (
                <div style={{color: amount < 0 ? "red" : "green"}}> {amount}</div>
            )
    },
];

interface DataType {
    key: React.Key,
    category: {
        title: string,
        subtitle: string,
        icon: string
    },
    profile: {
        counter_party: string,
        image: string
    },
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
        disabled: record.profile.counter_party === 'Disabled User', // Column configuration not to be checked
        name: record.profile.counter_party,
    }),
};

let isFiltered = false;
const TransactionScreen = () => {

    const [selectionType, setSelectionType] = useState<'checkbox'>('checkbox');
    const data: any = useAppSelector((state) => state.transaction);

    const [searchArray, setSearchArray] = useState([])



    let tempArray: number[] = [];
    let response: any = [];

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAsyncTransactions())
    }, [dispatch]);


    const [isActiveClass, setIsActiveClass] = useState("allTransactions")

    const handleLink = (value: string) => {
        setIsActiveClass(value)
    }

    const handleKeyUp = (e: any) => {
        if(e.target.value){
           isFiltered = true;
        } else {
            isFiltered = false;
        }
        data.map((item:any, index: number) => {
            recursive(item, index ,e)
        });
        setSearchArray(response)
        tempArray = [];
        response = [];
    }

    const recursive = (item: any, index: number, e: any) => {
        const keys = Object.keys(item);
        keys.forEach((key: any) => {
            if (typeof item[key] == 'object') {
                recursive(item[key], index, e)
            } else {
                if(!tempArray.includes(index) && item[key].toString().includes(e.target.value)) {
                    response.push(data[index]);
                    tempArray.push(index);
                }
            }

        })
    }



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
                                <Search size="large" placeholder = "Search by user, card name ,payment type ,date, time" onKeyUp = {handleKeyUp} />
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
                                dataSource={isFiltered ? searchArray : data}
                                scroll={{ y: 400 }}

                            />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default TransactionScreen