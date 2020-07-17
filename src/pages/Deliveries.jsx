import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import DeliveriesInfo from '../containers/DeliveriesInfo';

const links = [
  {href: 'contact', title: 'Contacto'},
  {href: 'logout', title: 'Salir'},
];


function Deliveries (props){
  return (
    <>
    <NavBar links={links} />
    <Content title="Pedidos">
     <DeliveriesInfo {...props} />
    </Content>
    <Footer />
    </>
  );
}

export default Deliveries;