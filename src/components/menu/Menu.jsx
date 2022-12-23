import React, { useState } from 'react';
import { AppstoreOutlined, CheckCircleOutlined, MailOutlined, SettingOutlined, } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { SideBarWrapper } from './menuStyle';
import AvatarCustom from '../avatar/AvatarCustom';
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}


const items = [
    getItem('Home', 'sub1', <MailOutlined />),
    getItem('My Tasks', 'sub2', <CheckCircleOutlined />),
    getItem('Project', 'sub3', <AppstoreOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
    ]),
    getItem('Navigation Three', 'sub4', <SettingOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),

];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const SideBar = () => {
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    return (
        <SideBarWrapper>

                <AvatarCustom />


            <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                items={items}
            />

            <Button type="primary">Logout</Button>
            {/* <div></div> */}
        </SideBarWrapper>
    );
};
export default SideBar;