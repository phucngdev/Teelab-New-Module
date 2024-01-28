import React, { useRef, useEffect, useState } from "react";
import logo from "/logo.png";
import { Button, Form, Input, message } from "antd";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  CheckCircleTwoTone,
  ExclamationCircleTwoTone,
} from "@ant-design/icons";

const Login = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [account, setAccount] = useState([]);

  const loadData = () => {
    axios
      .get(`http://localhost:8080/account`)
      .then((response) => setAccount(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    inputRef.current.focus();
    loadData();
  }, []);

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Đăng nhập thành công",
      icon: <CheckCircleTwoTone twoToneColor="#52c41a" />,
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Tên đăng nhập và mật khẩu không chính xác",
      icon: <ExclamationCircleTwoTone twoToneColor="#ff0000" />,
    });
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    const findUser = account.find(
      (user) => user.username === username && user.password === password
    );
    if (findUser) {
      localStorage.setItem("isLogin", JSON.stringify(findUser));
      success();
      setTimeout(() => {
        navigate("/admin");
      }, 1000);
    } else {
      error();
      navigate("/dang-nhap");
    }
  };

  return (
    <>
      <Helmet>
        <title>TEELAB - Đăng nhập</title>
      </Helmet>
      {contextHolder}
      <div className="flex justify-center items-center h-[100vh] bg-[url('https://www.mbbank.com.vn/images/hp_bg_special_product.png')]">
        <div className="flex w-[500] bg-white shadow-xl flex-col justify-center items-center gap-3 border p-3 rounded-md">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <h3 className="font-semibold text-xl py-2 border-b">
            Đăng nhập quản trị viên
          </h3>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            onFinish={handleSubmit}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                className="border"
                ref={inputRef}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                className="border"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                className="bg-blue-600 mt-3"
              >
                <span className="text-white">Đăng nhập</span>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
