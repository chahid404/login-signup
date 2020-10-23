/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */

import { useSubheader } from "../../../../../../_metronic/layout";
import React from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import Ckeditor from '../products-table/column-formatters/Ckeditor';

export const ProductEdit = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Pay");


  return (<><Card>
    <Card.Body>
      <Card.Title>Send reward 5 $ gift Card</Card.Title>
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="formBasicCheckbox ml-3">
              <Form.Check type="checkbox" label="Use Code From stock(0 available)" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group >
              <Form.Label>Code</Form.Label>
              <Form.Control type="text" placeholder="aze1-ezre5-zeze-gggr" />
              <Form.Text className="text-muted">
                Gift Card Code
    </Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group >
              <Form.Label>Reward</Form.Label>
              <Form.Control type="text" placeholder="10$ amazon gift card" />
              <Form.Text className="text-muted">
                Reward Name
    </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label><h5>Extra Info</h5></Form.Label>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formBasicCheckbox ml-3">
            <Form.Label className="text-muted">loving every minute of it </Form.Label>
              <Form.Check type="checkbox" label="Send email with Card" />
            </Form.Group>
          </Col>

        </Row>

        <Row>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="aze1-ezre5-zeze-gggr" value ="chahid404@gmail.com" />
              <Form.Text className="text-muted">
                Email recever
    </Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group >
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Reward title" value= "Your Reward Is Here !" />
              <Form.Text className="text-muted">
                Reward Name
    </Form.Text>
            </Form.Group>
          </Col>
        </Row>
      <Row>
        <Col>
          <Ckeditor/>
        </Col>
      </Row>

        <Button variant="primary" type="submit">
          Pay Reawrd
  </Button>
        <Button variant="secondry">Cancel</Button>
      </Form>

    </Card.Body>
  </Card></>);
};
