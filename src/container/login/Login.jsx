import images from "../../assets/images";
import { Forgot, InputForm, InputText, InputTitle, LoginForm, LoginWrapper, Opacity, OutLoginForm, RememberContainer, RememberNote, RememberRadio, RememberWrapper, SiginButton, SubTitle, Title, Wrapper } from "./loginStyle";

const Login = (props) => {

    const user = {
        
    }

    return (
        <Wrapper>
            <LoginForm>
                <LoginWrapper>
                    <Title height={"42px"}>Welcome back</Title>
                    <SubTitle height={"32px"}>Welcome back! Please enter your details</SubTitle>
                    
                    <InputForm with={"100%"} height={"50px"}>
                        <InputTitle height={"20px"}>Email</InputTitle>
                        <InputText type="text" placeholder="Enter your email" ></InputText>
                    </InputForm>

                    <InputForm with={"100%"} height={"50px"}>
                        <InputTitle height={"20px"}>Password</InputTitle>
                        <InputText type="text" placeholder="Enter your password" ></InputText>
                    </InputForm>

                    <RememberWrapper>
                        <RememberContainer>
                            <RememberRadio type="checkbox" />
                            <RememberNote>Remember me</RememberNote>
                        </RememberContainer>

                        <Forgot>Forgot password</Forgot>
                    </RememberWrapper>

                    <SiginButton>Sign in</SiginButton>
                </LoginWrapper>
            </LoginForm>

            <OutLoginForm backgroundImage={images.login.backLogin}>
                <Opacity />
            </OutLoginForm>
        </Wrapper>
    );
}

export default Login;