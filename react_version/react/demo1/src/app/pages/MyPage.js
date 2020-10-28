import React from "react";
import { useSubheader } from "../../_metronic/layout";
import { Card } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Upload from './Upload';

import {
  Input,

} from "../../../src/_metronic/_partials/controls";
//import { Card, Row, Container, Col, Form, Button } from "react-bootstrap";

const CustomerEditSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Firstname is required"),
  lastName: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Lastname is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  userName: Yup.string().required("Username is required"),
  dateOfBbirth: Yup.mixed()
    .nullable(false)
    .required("Date of Birth is required"),
  ipAddress: Yup.string().required("IP Address is required"),
});

export const MyPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("My Custom title");

  return (<>

    <>
      <Card>
        <Formik
          validationSchema={CustomerEditSchema}>

          <>
            <Card.Header className="bg-primary" ><h3 style={{
              color: "white"
            }}>Identity</h3></Card.Header>
            <Card.Body className="overlay overlay-block">
              <Form className="form form-label-right ">
                <div className="form-group row">
                  {/* Product Name */}
                  <div className="col-lg-5">
                    <Field
                      name="firstName"
                      component={Input}
                      placeholder="Product Name"
                      label="Product Name"
                    />
                  </div>
                  {/* Moto Name */}
                  <div className="col-lg-5">
                    <Field
                      name="firstName"
                      component={Input}
                      placeholder="Ex : Discover Apps & Get Paid."
                      label="Moto"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  {/* Domain Name */}
                  <div className="col-lg-5">
                    <Field
                      name="firstName"
                      component={Input}
                      placeholder="Ex : app.com"
                      label="Domain Name"
                    />
                  </div>
                  {/* Domain Shortcut */}
                  <div className="col-lg-5">
                    <Field
                      name="firstName"
                      component={Input}
                      placeholder="Ex : app.com"
                      label="Domain Shortcut For Sharing"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  {/* Endpoint Name */}
                  <div className="col-lg-10">
                    <Field
                      name="firstName"
                      component={Input}
                      placeholder="Ex : https:\\app.com.appspot.com\."
                      label="Endpoint"
                    />
                  </div>
                </div>



                <div className="form-group row">
                  {/* Endpoint Name */}
                  <div className="col-lg-4">
                    <Upload />

                  </div>
                  <div className="col-lg-4">
                    <Upload />
                  </div>
                </div>

                <div className="form-group row">
                  {/* Endpoint Name */}
                  <div className="col-lg-6">
                    <Upload />

                  </div>
                </div>

              </Form>
            </Card.Body>
            <Card.Footer>
              <button
                type="button"
                className="btn btn-light btn-elevate"
              >
                Cancel
              </button>
              <> </>
              <button
                type="submit"
                className="btn btn-primary btn-elevate"
              >
                Save
              </button>
            </Card.Footer>
          </>

        </Formik>
      </Card>
    </>
  </>);
};
