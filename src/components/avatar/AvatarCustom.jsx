import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import styled from "styled-components";

const AvatarCus = styled(Avatar)`
    border: 1px solid #000;
    display: block;
    margin-bottom: 20px;
`;

const Profile = styled.div`
margin-top: 20px;
    align-self: center;
    /* margin-bottom: -380px; */
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const AvatarCustom = () => {
    const user = {
        username: 'Minh Tân',
    }

    return (
        <Profile>
            <AvatarCus size={100} icon={<UserOutlined />} />

            <span style={{
                alignSelf: 'center',
            }}>{user.username}</span>

        </Profile>
    );
}

export default AvatarCustom;