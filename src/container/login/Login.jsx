import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Checkbox, Form } from "antd";
import { useNavigate } from "react-router-dom";
import images from "../../assets/images";
import { InputCustoms, InputTitle, LoginButton, LoginButtonWrap, LoginForm, Opacity, OutLoginForm, SubTitle, Title, Wrapper } from "./loginStyle";
import users from "../../data/usersData";

const Login = (props) => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    users.forEach((user) => {
      if (
        user.username === values.username
        && user.password === values.password) {
        navigate("/home")
      }
    })
  };

  return (

    <Wrapper>
      <LoginForm>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Title height={"42px"}>Welcome back</Title>
          <SubTitle height={"32px"}>
            Welcome back! Please enter your details
          </SubTitle>
          <InputTitle Title height={"20px"}>Email</InputTitle>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <InputCustoms
              prefix={
                <UserOutlined
                  className="site-form-item-icon"

                />}
              placeholder="Enter your email" />
          </Form.Item>
          <InputTitle height={"20px"}>Password</InputTitle>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <InputCustoms
              prefix={
                <LockOutlined
                  className="site-form-item-icon" />
              }
              type="password"
              placeholder="Enter your password"
            />
          </Form.Item>
          <Form.Item
          // style={{
          //   fontSize: 16
          // }}
          >
            <Form.Item
              name="remember"
              valuePropName="checked"
              noStyle
            >
              <Checkbox
                style={{
                  fontSize: 16
                }}
              >Remember me</Checkbox>
            </Form.Item>

            {/* <a className="login-form-forgot" href="">
              Forgot password
            </a> */}
          </Form.Item>

          <LoginButtonWrap>
            <LoginButton
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </LoginButton>
          </LoginButtonWrap>
        </Form>
      </LoginForm>

      <OutLoginForm backgroundImage={images.login.backLogin}>
        <Opacity />
      </OutLoginForm>
    </Wrapper>
  );
}

export default Login;