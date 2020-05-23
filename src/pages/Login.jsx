import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import LoginForm from '../components/LoginForm';

const links = [
  {href: 'Register', title: 'Registrarse'},
  {href: 'Contacto', title: 'Contacto'}
]


function Login (){
  return (
    <>
    <NavBar links={links} />
    <Content title="Ingresar">
     <LoginForm />
    </Content>
    <Footer />
    </>
  );
}

export default Login;
