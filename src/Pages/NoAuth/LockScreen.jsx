import React, { useContext } from 'react';
import {
    FormGroup,
    Form,
    Row,
    Col,
    Input,
    Button
} from 'reactstrap';
import img1 from '../../assets/images/users/7.jpg';
import img2 from '../../assets/images/background/background1.jpg';
import { AppContext } from '../../Context/App.Context';

const sidebarBackground = {
    backgroundImage: "url(" + img2 + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
};

const Lockscreen = () => {
    const {ChangeState,state}=useContext(AppContext)
    return <div className="">
        {/*--------------------------------------------------------------------------------*/}
        {/*Lockscreen Cards*/}
        {/*--------------------------------------------------------------------------------*/}
        <div className="auth-wrapper d-flex no-block justify-content-center align-items-center" style={sidebarBackground}>
            <div className="auth-box">
                <div id="loginform">
                    <div className="logo">
                        <span className="db"><img src={img1} alt="logo" className="rounded-circle" width="100" /></span>
                        <h5 className="font-medium mb-3">Pepe Garcia</h5>
                    </div>
                    <Row>
                        <Col xs="12">
                            <Form className="mt-3" id="loginform" action="/dashbaord">
                                <FormGroup>
                                    <Input type="password" name="password" bsSize="lg" id="examplePassword" placeholder="Password" required />
                                </FormGroup>
                                <Row className="mb-4">
                                    <Col xs="12">
                                        <Button color="primary" size="lg" type="submit" className="text-uppercase" block onClick={()=>ChangeState({statusApp:undefined})}>Iniciar sesión</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    </div>;
}

export default Lockscreen;
