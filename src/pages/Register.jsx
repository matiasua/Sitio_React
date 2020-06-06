import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import RegisterForm from '../containers/RegisterForm';

const links = [
  {href: 'Login', title: 'Ingresar'},
  {href: 'contact', title: 'Contacto'},
  {href: 'Terminos', title: 'Terminos y Condiciones' }
]

function Register (){
  return (
    <>
    <NavBar links={links} />
    {/* {<Content title="Registrar" content={<RegisterForm />} /> */}
    <Content title="Registro">
      <RegisterForm />
    </Content>
    <Footer />
    </>
  );
}

export default Register;
