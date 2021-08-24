import React from "react";

import RulesTabs from "./RulesTabs.js";

// reactstrap components
import {
  Button,
  Modal,
  ModalBody,
  NavItem,
  NavLink
} from "reactstrap";

// core components

function Rules() {
  const [modal, setModal] = React.useState(false);
  return (
    <>
      <NavItem>
        <NavLink
          href="#terra"
          onClick={(e) => {
            e.preventDefault();
            setModal(true);
          }}
        >
          <i className="fas fa-file-contract"></i>
          <p>Reglas</p>
        </NavLink>
      </NavItem>
      <Modal isOpen={modal} toggle={() => setModal(false)} size='lg'>
        <div className="modal-header justify-content-center">
          <button
            className="close"
            type="button"
            onClick={() => setModal(false)}
          >
            <i className="now-ui-icons ui-1_simple-remove"></i>
          </button>
          <h4 className="title title-up">Reglas del servidor</h4>
        </div>
        <ModalBody>
          <RulesTabs />
        </ModalBody>
        <div className="modal-footer">
          <Button
            color="success"
            type="button"
            onClick={() => setModal(false)}
          >
            Aceptar
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default Rules;
