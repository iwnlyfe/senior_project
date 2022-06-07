import React from 'react'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

// Router
import { Link, useNavigate } from 'react-router-dom'
// Redux
import { useDispatch } from 'react-redux';

export default function Header() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logout = () => {
        dispatch({
            type: 'LOGOUT',
            payload: null
        })
        navigate('/')
    }
  return (
    <Menu mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined/>}>
            <Link to="/login">Login</Link>
        </Menu.Item>

        <Menu.Item key="app" icon={<AppstoreOutlined/>}>
            <Link to="/Register">Register</Link>
        </Menu.Item>

        <Menu.Item key="app" icon={<AppstoreOutlined/>} onClick={logout}>
            Logout
        </Menu.Item>
        {/* <SubMenu
            key="SubMenu"
            icon={<SettingOutlined/>}
            title="Navigation Three Submenu">

            <Menu.ItemGroup title="Item-1">
                <Menu.Item key="setting:1">Option1</Menu.Item>
                <Menu.Item key="setting:2">Option2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item-2">
                <Menu.Item key="setting:3">Option3</Menu.Item>
                <Menu.Item key="setting:4">Option4</Menu.Item>
            </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four-Link
            </a>
        </Menu.Item> */}
    </Menu>
  )
}
