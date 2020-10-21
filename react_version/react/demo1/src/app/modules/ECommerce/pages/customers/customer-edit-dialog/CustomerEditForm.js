// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React from "react";
import { Modal } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Input
} from "../../../../../../_metronic/_partials/controls";

// Validation schema
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

export function CustomerEditForm({
  saveCustomer,
  customer,
  actionsLoading,
  onHide,
}) {
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={customer}
        validationSchema={CustomerEditSchema}
        onSubmit={(values) => {
          saveCustomer(values);
        }}
      >
        {({ handleSubmit }) => (
          <>
            <Modal.Body className="overlay overlay-block">
              {actionsLoading && (
                <div className="overlay-layer bg-transparent">
                  <div className="spinner spinner-lg spinner-success" />
                </div>
              )}
              <Form className="form form-label-right">
                <div className="form-group row">
                {/* Shared Key */}
                <div className="col-lg-4">
                    <Field
                      name="lastName"
                      component={Input}
                      placeholder="Last Name"
                      label="Shared Key"
                    />
                  </div>

                  {/* network */}
                  <div className="col-lg-4">
                    <Field
                      name="network"
                      component={Input}
                      placeholder="25"
                      label="network"
                      type="number"
                    />
                  </div>
                  {/* add to credit */}
                  <div className="col-lg-4">
                    <Field
                      name="credit"
                      component={Input}
                      placeholder="0.01"
                      label="Add to credit"
                      type="number"
                    />
                  </div>
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <button
                type="button"
                onClick={onHide}
                className="btn btn-light btn-elevate"
              >
                Cancel
              </button>
              <> </>
              <button
                type="submit"
                onClick={() => handleSubmit()}
                className="btn btn-primary btn-elevate"
              >
                Save
              </button>
            </Modal.Footer>
          </>
        )}
      </Formik>
    </>
  );
}
