import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Content from './Content';
import RegisterForm from './RegisterForm';

const links = [
  {href: 'register.html', title: 'Ingresar'},
  {href: 'contact.html', title: 'Contacto'}
]

function Register (){
  return (
    <>
    <NavBar links={links} />
    {/* <Content title="Registrar" content={<RegisterForm />} /> */}
    <Content title="Registro">
      <RegisterForm />
    </Content>
    <Footer />
    </>
  );
}

export default Register;
