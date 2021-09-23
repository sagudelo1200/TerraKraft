import React from 'react';

// reactstrap components
import {
  Button,
  Modal,
  ModalBody,
  NavItem,
  NavLink
} from 'reactstrap';
import RangesTable from './RangesTable.js';

// core components

function ShopModal() {
  const [modal, setModal] = React.useState(false);
  return (
    <>
      <NavItem>
        <NavLink
          href='#terra'
          onClick={(e) => {
            e.preventDefault();
            setModal(true);
          }}
        >
          <i className='fas fa-shopping-cart'></i>
          <p>Tienda</p>
        </NavLink>
      </NavItem>
      <Modal isOpen={modal} toggle={() => setModal(false)} size='lg'>
        <div className='modal-header justify-content-center'>
          <button
            className='close'
            type='button'
            onClick={() => setModal(false)}
          >
            <i className='now-ui-icons ui-1_simple-remove'></i>
          </button>
          <h4 className='title title-up text-warning'>Tienda</h4>
        </div>
        <ModalBody>
          <RangesTable />
        </ModalBody>
        <div className='modal-footer'>
          <Button
            href='https://terrakraft.tebex.io'
            target='_blank'
            color='warning'
            type='button'
            onClick={() => setModal(false)}
          >
            <i className='fas fa-dollar-sign'></i>{' '}
            Comprar
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default ShopModal;
