import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Ckeditor from './Ckeditor';
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../../../../_metronic/_helpers";

function AproveReward() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button
                className="btn btn-icon btn-light btn-hover-success btn-sm"
                onClick={handleShow}
            >
                <span className="svg-icon svg-icon-md svg-icon-success">
                    <SVG
                        src={toAbsoluteUrl("/media/svg/icons/Navigation/Check.svg")}
                    />
                </span>
            </button>

            <Modal show={show} onHide={handleClose} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Pay Reward</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <input type="checkbox" aria-label="Checkbox for following text input" />
                <Ckeditor /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Pay
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default AproveReward
