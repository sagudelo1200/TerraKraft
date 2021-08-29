import React from 'react';

// reactstrap components
import {
  Button,
  Modal,
  ModalBody,
  NavItem,
  NavLink
} from 'reactstrap';

function ShopModal() {
  const [modal2, setModal2] = React.useState(false);
  return (
    <>
      <NavItem>
        <NavLink
          href='#terra'
          onClick={(e) => {
            e.preventDefault();
            setModal2(true);
          }}
        >
          <i className='fas fa-shopping-cart'></i>
          <p>Tienda</p>
        </NavLink>
      </NavItem>
      <Modal
        modalClassName='modal-mini modal-warning'
        toggle={() => setModal2(false)}
        isOpen={modal2}
      >
        <div className='modal-header justify-content-center'>
          <div className='modal-profile'>
            <i className='fas fa-dollar-sign text-warning'></i>
          </div>
        </div>
        <ModalBody>
          <p className='text-dark'>Adquiere ahora tu rango</p>
        </ModalBody>
        <div className='modal-footer'>
          <a
            href='https://terrakraft.tebex.io'
            target='_blank'
            rel='noreferrer'
            className='btn btn-neutral'
            onClick={() => setModal2(false)}
          >
            <i className='fas fa-shopping-cart pr-1'></i> Tienda
          </a>
          <Button
            className='btn-neutral'
            color='link'
            type='button'
            onClick={() => setModal2(false)}
          >
            Cerrar
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default ShopModal;
