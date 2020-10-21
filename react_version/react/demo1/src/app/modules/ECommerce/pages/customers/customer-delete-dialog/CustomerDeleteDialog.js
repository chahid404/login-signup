import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import Table from 'react-bootstrap/Table'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";

export function CustomerDeleteDialog({ id, show, onHide }) {
  // Customers UI Context

  // Customers Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.customers.actionsLoading }),
    shallowEqual
  );

  // if !id we should close modal
  useEffect(() => {
    if (!id) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // looking for loading/dispatch
  useEffect(() => { }, [isLoading, dispatch]);


  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {/*begin::Loading*/}
      {isLoading && <ModalProgressBar />}
      {/*end::Loading*/}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Balonce
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>
          User Details
  </h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Email </th>
              <th>From GPLUS</th>
              <th>From FB</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Xxxxx@gmail.com</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>



        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Device Class</th>
              <th>Network Size</th>
              <th>Network Revenue</th>
              <th>Valideted Referrels</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Android</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>

            </tr>
          </tbody>
        </Table>


        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>IP</th>
              <th>Geo</th>
            </tr>
          </thead>
          <tbody>
            <tr>

              <td>45az4e5za4e5a</td>
              <td>Us</td>
            </tr>
          </tbody>
        </Table>


        <h1>User Amount Details</h1>


        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Action</th>
              <th>Amount</th>
              <th>CreditAfter</th>
              <th>BonusAfter</th>
              <th>Info</th>
              <th>CreatedAt</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>11</td>
              <td>bonus</td>
              <td>0.004</td>
              <td>0348</td>
              <td>00000</td>
              <td>dailybonus</td>

              <td>22/22/15151</td>

            </tr>
          </tbody>
        </Table>


      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate"
          >
            Cancel
          </button>
          <> </>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
