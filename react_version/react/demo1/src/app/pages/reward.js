import React from "react";
import { useSubheader } from "../../_metronic/layout";
import { Card, Row, Container, Col, Form, Button } from "react-bootstrap";
import instal from './install.svg';
import sign from './sign.svg';
import survey from './survey.svg';
import watch from './watch.svg';
import './switch.scss';



export const MyPage = () => {
    const suhbeader = useSubheader();
    suhbeader.setTitle("My Custom title");

    return (<>
        <Card className="mb-10">
            <Card.Body>
                <Card>
                    <Card.Header className="bg-primary" style={{
                        padding: "10px 0px 0px 0px"
                    }}><Container>
                            <Row className="align-items-center">

                                <Col><h3 style={{
                                    color: "white"
                                }}>Giveaway</h3></Col>
                                <Col md="auto">  <div className="switch">
                                    <label>

                                        <input type="checkbox" />
                                        <span className="lever" />
                                    </label>
                                </div></Col>
                            </Row>
                        </Container>
                    </Card.Header>
                    <Card.Body style={{
                        padding: "10px 10px 10px 10px"
                    }}>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Giveaway Title" />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Giveaway Description" />
                            </Form.Group>
                        </Form>
                    </Card.Body>


                    <Card.Footer className="bg-primary" style={{
                        padding: "10px 0px 0px 0px"
                    }}><Container>
                            <Row className="align-items-center">

                                <Col><h3 style={{
                                    color: "white"
                                }}>We Have Winners</h3></Col>
                                <Col md="auto">
                                    <div className="switch">
                                        <label>
                                            <input type="checkbox" />
                                            <span className="lever" />
                                        </label>
                                    </div></Col>
                            </Row>
                        </Container>
                    </Card.Footer>


                </Card>

                <div className="d-flex align-items-end flex-column mt-15">

                    <div className="p-2"><Button variant="success">Save</Button>{' '}</div>
                </div>




                <Card className="mt-15">
                    <Card.Header className="bg-primary" style={{
                        padding: "10px 10px 10px 10px"
                    }}>
                        <h3 style={{
                            color: "white"
                        }}>Instal Tab</h3>
                    </Card.Header>
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col>
                                    <Card style={{ width: 'auto' }} className="bg-success">
                                        <Card.Img variant="top" src={instal} className="img-fluid. max-width: 40%" style={{ height: '100px' }} />
                                        <Card.Body className="bg-light">
                                            <Card.Title>Instal Tap</Card.Title>
                                            <div className="form-group">
                                                <span className="switch switch-sm">
                                                    <input type="checkbox" className="switch" id="switch-sm1" />
                                                    <label htmlFor="switch-sm1"><i class="fab fa-2x fa-android"></i></label>
                                                </span>
                                            </div>

                                            <div className="form-group">
                                                <span className="switch switch-sm">
                                                    <input type="checkbox" className="switch" id="switch-sm2" />
                                                    <label htmlFor="switch-sm2"><i class="fab fa-2x fa-apple"></i></label>
                                                </span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>


                                <Col>
                                    <Card style={{ width: 'auto' }} className="bg-success">
                                        <Card.Img variant="top" src={survey} className="img-fluid. max-width: 40%" style={{ height: '100px' }} />
                                        <Card.Body className="bg-light">
                                            <Card.Title>Surey Tab</Card.Title>
                                            <div className="form-group">
                                                <span className="switch switch-sm">
                                                    <input type="checkbox" className="switch" id="switch-sm3" />
                                                    <label htmlFor="switch-sm3"><i class="fab fa-2x fa-android"></i></label>
                                                </span>
                                            </div>

                                            <div className="form-group">
                                                <span className="switch switch-sm">
                                                    <input type="checkbox" className="switch" id="switch-sm4" />
                                                    <label htmlFor="switch-sm4"><i class="fab fa-2x fa-apple"></i></label>
                                                </span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>



                                <Col>
                                    <Card style={{ width: 'auto' }} className="bg-success">
                                        <Card.Img variant="top" src={sign} className="img-fluid. max-width: 40%" style={{ height: '100px' }} />
                                        <Card.Body className="bg-light">
                                            <Card.Title>Sign Tab</Card.Title>
                                            <div className="form-group">
                                                <span className="switch switch-sm">
                                                    <input type="checkbox" className="switch" id="switch-sm5" />
                                                    <label htmlFor="switch-sm5"><i class="fab fa-2x fa-android"></i></label>
                                                </span>
                                            </div>

                                            <div className="form-group">
                                                <span className="switch switch-sm">
                                                    <input type="checkbox" className="switch" id="switch-sm6" />
                                                    <label htmlFor="switch-sm6"><i class="fab fa-2x fa-apple"></i></label>
                                                </span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>



                                <Col>
                                    <Card style={{ width: 'auto' }} className="bg-success">
                                        <Card.Img variant="top" src={watch} className="img-fluid. max-width: 40%" style={{ height: '100px' }} />
                                        <Card.Body className="bg-light">
                                            <Card.Title>Whatch Tab</Card.Title>
                                            <div className="form-group">
                                                <span className="switch switch-sm">
                                                    <input type="checkbox" className="switch" id="switch-sm7" />
                                                    <label htmlFor="switch-sm7"><i class="fab fa-2x fa-android"></i></label>
                                                </span>
                                            </div>

                                            <div className="form-group">
                                                <span className="switch switch-sm">
                                                    <input type="checkbox" className="switch" id="switch-sm8" />
                                                    <label htmlFor="switch-sm8"><i class="fab fa-2x fa-apple"></i></label>
                                                </span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>


                            </Row>
                        </Container>



                    </Card.Body>
                </Card>



            </Card.Body>
        </Card>
    </>);
};
