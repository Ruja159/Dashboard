import React, { useState } from 'react'
import { Menu, Button } from 'antd';
import {Link,useLocation} from 'react-router-dom'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
} from '@ant-design/icons';
import logo from '../../assets/images/sava.png'

const Navbar: React.FC = () => {
    const { SubMenu } = Menu;
    const [collapsed, setCollapsed] = useState(false);

    const itemKey = useLocation();

    if(itemKey.pathname == '/') {
        itemKey.pathname = '/dashboard'
    }
    return (
        <div style={{ background: '#0b0d18', textAlign: 'center'}}>
            <img src={logo} alt="logo"/>
            <Menu
                defaultSelectedKeys={[itemKey.pathname]}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
            >
                {/*<Button type="primary" onClick={() => setCollapsed(!collapsed)} style={{ marginBottom: 16 }}>*/}
                {/*    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}*/}
                {/*</Button>*/}
                <Menu.Item key="/dashboard" icon={<PieChartOutlined />}>
                    <Link to={{ pathname: "/dashboard",}}>Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="/account" icon={<DesktopOutlined />}>
                    <Link to={{ pathname: "/account",}}>Account</Link>
                </Menu.Item>
                <Menu.Item key="/payment" icon={<ContainerOutlined />}>
                    <Link to={{ pathname: "/payment",}}>Payment</Link>
                </Menu.Item>

            </Menu>
        </div>
    );
}
export default Navbar;