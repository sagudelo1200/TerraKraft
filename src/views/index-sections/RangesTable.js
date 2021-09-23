import React from 'react';
import { Table } from 'reactstrap';

const RangesTable = (props) => {
  return (
    <Table striped className='text-center'>
      <thead>
        <tr>
          <th></th>
          <th className='text-secondary'> <i className='fas fa-wind' /> Aer</th>
          <th className='text-info'><i className='fas fa-water' /> Aqua</th>
          <th className='text-danger'><i className='fas fa-fire' /> Ignis</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Ausentarse (AFK)</th>
          <td><i className='text-success fas fa-check-circle' /></td>
          <td><i className='text-success fas fa-check-circle' /></td>
          <td><i className='text-success fas fa-check-circle' /></td>
        </tr>
        <tr>
          <th scope="row">Autorellenar inventario al construir</th>
          <td><i className='text-success fas fa-check-circle' /></td>
          <td><i className='text-success fas fa-check-circle' /></td>
          <td><i className='text-success fas fa-check-circle' /></td>
        </tr>
        <tr>
          <th scope="row">Ordenar inventario (click rueda ratón)</th>
          <td><i className='text-success fas fa-check-circle' /></td>
          <td><i className='text-success fas fa-check-circle' /></td>
          <td><i className='text-success fas fa-check-circle' /></td>
        </tr>
        <tr>
          <th scope="row">Detener crecimiento de las enredaderas con un mechero</th>
          <td><i className='text-success fas fa-check-circle' /></td>
          <td><i className='text-success fas fa-check-circle' /></td>
          <td><i className='text-success fas fa-check-circle' /></td>
        </tr>
        <tr>
          <th scope="row">Usar cubos de agua con infinidad</th>
          <td><i className='text-success fas fa-check-circle' /></td>
          <td><i className='text-success fas fa-check-circle' /></td>
          <td><i className='text-success fas fa-check-circle' /></td>
        </tr>
        <tr>
          <th scope="row">Abrir enderchest con shift+click izquierdo en el aire</th>
          <td><i className='text-danger fas fa-times-circle' /></td>
          <td><i className='text-success fas fa-check-circle' /></td>
          <td><i className='text-success fas fa-check-circle' /></td>
        </tr>
        <tr>
          <th scope="row">Edición de carteles con shift+click derecho con la mano vacia</th>
          <td><i className='text-danger fas fa-times-circle' /></td>
          <td><i className='text-success fas fa-check-circle' /></td>
          <td><i className='text-success fas fa-check-circle' /></td>
        </tr>
        <tr>
          <th scope="row">Craftear(encantar) cubos de agua con infinidad</th>
          <td><i className='text-danger fas fa-times-circle' /></td>
          <td><i className='text-danger fas fa-times-circle' /></td>
          <td><i className='text-success fas fa-check-circle' /></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default RangesTable;