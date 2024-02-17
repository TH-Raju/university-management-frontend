"use client";

import { Button, Col, Row } from "antd";
import loginImage from "../../assets/login.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/Forminput";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  id: string;
  password: string;
};

const onSubmit: SubmitHandler<FormValues> = (data) => {
  try {
    console.log(data);
  } catch (e) {}
};

const LoginPage = () => {
  return (
    <Row>
      <Col sm={12} md={16} lg={16}>
        <Image src={loginImage} width={500} alt="login" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1>First login your account</h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput
                name="id"
                type="text"
                size="large"
                label="User ID"
              ></FormInput>
            </div>
            <div>
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
              ></FormInput>
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
