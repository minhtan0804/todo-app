import React, { useState } from 'react';
import { AppstoreOutlined, CheckCircleOutlined, MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { SideBarWrapper } from './menuStyle';
import AvatarCustom from '../avatar/AvatarCustom';
import { useNavigate } from 'react-router-dom';
function getItem(label, key, icon, children, link, type) {
    return {
        key,
        icon,
        children,
        link,
        label,
        type,
    };
}


const items = [
    getItem('Home', 'sub1', <MailOutlined />, undefined, "/home"),
    getItem('My Tasks', 'sub2', <CheckCircleOutlined />, undefined, "/my-tasks"),
    getItem('Project', 'sub3', <AppstoreOutlined />, [
        getItem('Todo App', '1', undefined, undefined, "/project/todo-app"),
        getItem('Quiz App', '2', undefined, undefined, "/project/quiz-app"),
    ]),
    // getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    //     getItem('Option 9', '9'),
    //     getItem('Option 10', '10'),
    //     getItem('Option 11', '11'),
    //     getItem('Option 12', '12'),
    // ]),

];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];
const SideBar = () => {
    const navigate = useNavigate("/login")
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    const handleOnClick = (keys) => {
        // console.log(keys);
        const item = items.find(element => element.key === keys.key);

        if (item === undefined) {
            const subItem = items[2].children.find(element => element.key === keys.key);
            console.log(subItem);
            navigate(subItem.link);
        } else {
            navigate(item.link);
        }
        // console.log(items);
        // navigate(item.link)
    }

    return (
        <SideBarWrapper>

            <AvatarCustom />

            <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                items={items}
                onClick={handleOnClick}
            />

            {/* <Button type="primary">Logout</Button> */}
            <div>

            </div>
        </SideBarWrapper>
    );
};
export default SideBar;