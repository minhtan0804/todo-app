import { Button, Form, Input } from 'antd';
import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    font-size: 20px;
    background-color: white;
`;

export const LoginForm = styled.div`
    width: 50%;
    height: 100%;
    min-width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.div`
    height: ${props => props.height};
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 12px;
`;

export const SubTitle = styled.div`
    height: ${props => props.height};
    color: #959BA2;
    font-size: 20px;
`;

export const InputForm = styled.div`
    width: ${props => props.width};
    padding: 20px 0px;
`;

export const InputTitle = styled.div`
    height: ${props => props.height};
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
    color: #656F7D;
`;

export const OutLoginForm = styled.div`
    width: 50%;
    height: 100%;
    background: no-repeat;
    background-image: url(${(props) => props.backgroundImage}) ;
    background-size: cover;
    display: flex;
    flex-direction: column-reverse;
`;

export const LoginButtonWrap = styled(Form.Item)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoginButton = styled(Button)`
    height: 40px;
    width: 100px;
    font-size: 20px
`;

export const Opacity = styled.div`
    width: 100%;
    height: 50%;
    background-color: #F3F3F3;
    opacity: 95%;
`;

export const InputCustoms = styled(Input)`
    height: 50px;
    font-size: 20px;
`


