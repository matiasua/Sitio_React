import React from 'react';
import InputLine from '../components/InputLine';
import { validatePassword, validateEmail } from '../utils/validations';

export default class LoginForm extends React.Component{
  state = {
    loginData: {
      email: '',
      password: ''
    },
    errors:{
      email: false,
      password: false
    }
  };

  onChange = (name, event) => {
    const value = event.target.value;
    const loginData = Object.assign({}, this.state.loginData);
    loginData[name]=value
    this.setState({
       loginData
       });
  }

  doLogin = (event) => {
    const { email, password } = this.state.loginData;
    const emailError = !validateEmail(email);
    const passwordError = !validatePassword(password, email);

/* Actualizamos el estado segun las validaciones */
    this.setState({
      errors: {
        email: emailError,
        password: passwordError
      }
    });

     event.preventDefault();
  }


  render (){
    const { email, password } = this.state.loginData;
    const { errors } = this.state;
    return (
      <form>
        <InputLine
           name="email"
           label="Correo"
           title="Correo"
           type="text"
           onChange={this.onChange}
           error={errors.email}
           value={email}
           />

        <InputLine
           name="password"
           label="Contrase&ntilde;a"
           title="Contrase&ntilde;a"
           type="password"
           onChange={this.onChange}
           error={errors.password}
           value={password}
           />
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
