import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { signIn } from '../../services/authentication/auth.service'

class Login extends Component {
  logIn() {
    signIn({
      // Example body that use with api, change with your api's condition
      username: "tuananh123@gmail.com",
      password: "123456",
      partnerCode: "default"
    }).then(response => {
      console.log(response);
      // Your action to login
      if (response.data.httpStatusCode === 200) { // Login successfully => change this code with your condition
        // Data was responsed by api, was stored to sessionStorage
        // Console.log(response) if you want to see 'response'
        let user = {
          username: response['data']['result']['username'],
          userid: response['data']['result']['userId'],
          loginInTime: new Date().toTimeString(),
          token: response['data']['result']['token'],
          permissions: response['data']['result']['apiPaths']
        };
        sessionStorage.setItem("Auth", JSON.stringify(user));
        this.props.location.state ? this.props.history.push(this.props.location.state.from.pathname) : this.props.history.push("/");
      }
    })
  }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Đăng nhập</h1>
                      <p className="text-muted">Đăng nhập tài khoản Metech của bạn</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Tài khoản" autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Mật khẩu" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={() => this.logIn()}>Đăng nhập</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Quên mật khẩu?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Chưa có tài khoản?</h2>
                      <p>Đăng ký ngay để nhận nhiều phần quà hấp dẫn từ Tuấn Anh đẹp trai.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Đăng ký ngay!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;