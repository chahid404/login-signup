/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React ,{useState} from "react";
import Table from 'react-bootstrap/Table';
import Ckeditor from './Ckeditor';
import { OverlayTrigger, Tooltip ,Button ,Modal  } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../../../../_metronic/_helpers";


function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      
      <a
          className="btn btn-icon btn-light btn-hover-primary btn-sm"
          onClick={handleShow}
        >
          <span className="svg-icon svg-icon-md svg-icon-primary">
            <SVG src={toAbsoluteUrl("/media/svg/icons/General/other1.svg")} />
          </span>
        </a>
      

      <Modal show={show} onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>Send Reward ...</Modal.Title>
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
        <Ckeditor/>

      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export const ActionsColumnFormatter = (
  cellContent,
  row,
  rowIndex,
  { openEditProductPage, openDeleteProductDialog }
) => (
    <>
      <OverlayTrigger
        overlay={<Tooltip id="products-edit-tooltip">Pay Reward</Tooltip>}
      >
        <a
          className="btn btn-icon btn-light btn-hover-success btn-sm"
          onClick={() => openEditProductPage(row.id)}
        >
          <span className="svg-icon svg-icon-md svg-icon-success">
            <SVG
              src={toAbsoluteUrl("/media/svg/icons/Navigation/Check.svg")}
            />
          </span>
        </a>
      </OverlayTrigger>

      <> </>
      <OverlayTrigger
        overlay={<Tooltip id="products-delete-tooltip">Cancel Reward Request</Tooltip>}
      >
        <a
          className="btn btn-icon btn-light btn-hover-danger btn-sm"
          onClick={() => openDeleteProductDialog(row.id)}
        >
          <span className="svg-icon svg-icon-md svg-icon-danger">
            <SVG src={toAbsoluteUrl("/media/svg/icons/Navigation/Close.svg")} />
          </span>
        </a>
      </OverlayTrigger>
      <> </>
      <OverlayTrigger
        overlay={<Tooltip id="products-details-tooltip">Details user</Tooltip>}
      >

      
        <Example />
      </OverlayTrigger>
    </>
  );
