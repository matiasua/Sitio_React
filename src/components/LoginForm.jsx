import React from 'react';
import InputLine from './InputLine';

export default class LoginForm extends React.Component{
  state = {
    loginData: {
      email: '',
      password: ''
    }
  };

  isEmpty = (value) => {
    if (value === '') {
      return true;
    } else {
      return false;
    }
  }

  doLogin = (event) => {
    const { email, password } = this.state.loginData;
    const emailError = this.isEmpty(email);
    const passwordError = this.isEmpty(password);

    console.log('Email error:' +emailError);
    console.log('Password error :' +passwordError);

     event.preventDefault();
  }

  onChange = (name, event) => {
    const value = event.target.value;
    const loginData = Object.assign({}, this.state.loginData);
    loginData[name]=value
    this.setState({
       loginData
       });
  }

  render (){
    return (
      <form>
        <InputLine name="email" label="Correo" title="Correo" type="text" onChange={this.onChange} />
        <InputLine name="password" label="Contrase&ntilde;a" title="Contrase&ntilde;a" type="password" onChange={this.onChange} />
        <button onClick={this.doLogin}>Ingresar</button>
      </form>
    );
  }

}

/*
export default function LoginForm(){
  return (
    <form>
      <InputLine label="Correo" title="Correo" type="text" />
      <InputLine label="Contrase&ntilde;a" title="Contrase&ntilde;a" type="password" />
        <button>Ingresar</button>
    </form>

  );
}
*/
