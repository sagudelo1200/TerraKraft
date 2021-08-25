/*eslint-disable*/
import React from 'react';

// reactstrap components
import { Container } from 'reactstrap';
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          'translate3d(0,' + windowScrollTop + 'px,0)';
      };
      window.addEventListener('scroll', updateScroll);
      return function cleanup() {
        window.removeEventListener('scroll', updateScroll);
      };
    }
  });

  return (
    <>
      <div className='page-header clear-filter' filter-color='blue'>
        <div
          className='page-header-image'
          style={{
            backgroundImage:
              'url(' + require('../../assets/img/header.jpg').default + ')',
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className='content-center brand'>
            <img
              alt='...'
              className='n-logo'
              src={require('../../assets/img/terra-logo.png').default}
            ></img>
            <h1 className='h1-seo'>TerraKraft</h1>
            <h3>Survival Avanzado en Español - Vanilla Mejorado</h3>
          </div>
          <h6 className='category category-absolute'>
            Creado por{' '}
            <a href='https://minecraftuuid.com/?search=_Thebe_' target='_blank'>
              _Thebe_
            </a>
              , Apoyado por{' '}
            <a
              href='https://minecraftuuid.com/?search=Nibek'
              target='_blank'
            >
              Nibek
            </a>
            .
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
