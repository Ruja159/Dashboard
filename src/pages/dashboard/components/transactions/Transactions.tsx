import React, {useEffect, useState} from 'react';
import {Table, Radio, Divider, Card} from 'antd';
import jsonData from '../../../../jsonData/transactions.json'
import Search from "../../../../components/search/Search";
import CustomButton from "../../../../components/button/CustomButton";
import CustomDropdown from "../../../../components/dropdown/CustomDropdown";

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

const Transactions = () => {
    const [selectionType, setSelectionType] = useState<'checkbox'>('checkbox');
    let tempArray: number[] = [];
    let response: any = [];
    const [data, setData] = useState([{
        key: "",
        category: {
            title: "",
            subtitle: "",
            icon: ""
        },
        profile: {
            counter_party: "",
            image: ""
        },
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
              category: {
                  title: item.category.title,
                  subtitle: item.category.subtitle,
                  icon: item.category.image
              },
              profile: {
                  counter_party: item.profile.counter_party,
                  image: item.profile.image
              },
              date: new Date(item.date).toLocaleDateString(),
              time: new Date(item.date).toLocaleString('en-US', { hour: 'numeric',minute: 'numeric',  hour12: true }),
              payment_type: item.payment_type,
              amount: item.amount
          }
      })
        setData(updatedData)
    }, []);

   // const handleKeyUp = (e: any) => {
   //     const result: any[] = [];
   //    data.map((item: any) => {
   //        for (const prop in item) {
   //            if(typeof item[prop] !== "object"){
   //                console.log(item[prop], "PROPS")
   //                // console.log(item[prop].indexOf(e.target.value), "TARGET VALUE")
   //                if(item[prop].indexOf(e.target.value) !== -1 && !result.find(res => res.key == item.key)){
   //                    result.push(item)
   //                }
   //            }
   //            console.log(item[prop])
   //            if(typeof item[prop] === "object") {
   //                for (const obj_prop in item[prop]) {
   //                  if(item[prop][obj_prop].indexOf(e.target.value) !== -1 && !result.find(res => res.key == item.key)){
   //                      result.push(item)
   //                  }
   //                }
   //            }
   //        }
   //        setData(result)
   //    });
   // }

    let dataCopy = JSON.parse(JSON.stringify(data))

    const handleKeyUp = (e: any) => {
        data.map((item:any, index: number) => {
            recursive(item, index ,e)
        });
        setData(response);
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
                                <Search size="large" placeholder = "Search by user, card name ,payment type ,date, time" onKeyUp = {handleKeyUp}/>
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