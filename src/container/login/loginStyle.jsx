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

export const LoginWrapper = styled.div`
    height: 60%;
    width: 50%;
    min-width: 400px;
    /* background-color: #2cccff; */
    display: flex;
    flex-direction: column;
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
    /* height: 32px; */
    padding: 20px 0px;
`;

export const InputTitle = styled.div`
    height: ${props => props.height};
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
    color: #656F7D;
`;

export const InputText = styled.input`
    height: 50px;
    width: calc(100% - 10px);
    border: 1px solid #959BA2;
    outline: none;
    border-radius: 8px;
    padding: 0;
    padding-left: 10px;
    margin-right: -10px;
    font-size: 20px;
`;

export const RememberWrapper = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: center;
`;

export const RememberContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    /* justify-content: center; */
`;

export const RememberRadio = styled.input`
    height: 100%;
    width: 16px;
`;

export const RememberNote = styled.div`
    margin-left: 4px;
    color: #656F7D;
    font-weight: 500;
`;

export const Forgot = styled.div`
    color: #7F56DA;
    font-weight: 500;
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

export const SiginButton = styled.button`
    width: 100%;
    height: 50px;
    background-color: #7F56DA;
    color: #FFFFFF;
    border-radius: 8px;
    border: none;
    margin-top: 32px;
    font-size: 20px;
`;

export const Opacity = styled.div`
    width: 100%;
    height: 50%;
    background-color: #F3F3F3;
    opacity: 95%;
`;


