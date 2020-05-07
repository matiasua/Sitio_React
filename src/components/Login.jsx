import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Content from './Content';
import LoginForm from './LoginForm';

const links = [
  {href: 'register.html', title: 'Registrarse'},
  {href: 'contact.html', title: 'Contacto'}
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
