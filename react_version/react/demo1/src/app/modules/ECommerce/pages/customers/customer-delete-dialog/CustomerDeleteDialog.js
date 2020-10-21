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
          Customer Delete
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Are you sure to permanently delete this customer?</span>
        )}
        {isLoading && <span>Customer is deleting...</span>}
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Email</th>
              <th>From FB</th>
              <th>From GPLUS</th>
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
              <th>Network Size</th>
              <th>Valideted Referrels</th>
              <th>Network Revenue</th>
              <th>Device Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>Android</td>
            </tr>
          </tbody>
        </Table>


        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Geo</th>
              <th>IP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Us</td>
              <td>45az4e5za4e5a</td>
            </tr>
          </tbody>
        </Table>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Action</th>
              <th>Amount</th>
              <th>Info</th>
              <th>CreditAfter</th>
              <th>BonusAfter</th>
              <th>CreatedAt</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>11</td>
              <td>bonus</td>
              <td>0.004</td>
              <td>dailybonus</td>
              <td>0348</td>
              <td>00000</td>
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
