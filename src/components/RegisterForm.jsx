import React from 'react';
import InputLine from './InputLine';
import SelectLine from './SelectLine';
import TextareaLine from './TextareaLine';
import OutputLine from './OutputLine';


const browsers = [
  {value: '', label: 'Seleccione...'},
  {value: 'google_chrome', label: 'Google Chrome'},
  {value: 'mozilla_firefox', label: 'Mozilla Firefox'},
  {value: 'opera', label: 'Opera'},
  {value: 'Microsoft_egde', label: 'Microsoft Egde'},
];



const languages = {
  id: 'lenguajes',
  options: ['Javascript', 'Python', 'Java']
};


export default class RegisterForm extends React.Component{
 state = {
    registerData: {
      email:'',
      password:'',
      confirmation:'',
      browser: '',
      age:'',
      description:'',
      language:'',
      currentDate:'04/06/2020'
    },
    errors: {
      email: false,
      password: false,
      confirmation: false,
      browser: false,
      age: false,
      description: false,
      language: false,
    }
 };

 isEmpty = (value) => {
   return value.trim() === '';
 }

  onChange = (name, event) => {
    const value = event.target.value;
    const registerData = Object.assign({}, this.state.registerData);
    registerData[name]=value
    this.setState({
       registerData
       });
  }

  doRegister = (event) => {
    const {
      email,
      password,
      confirmation,
      browser,
      age,
      description,
      language
    } = this.state.registerData;

    const emailError = this.isEmpty(email);
    const passwordError = this.isEmpty(password);
    const confirmationError = this.isEmpty(confirmation);
    const browserError = this.isEmpty(browser);
    const ageError = this.isEmpty(age);
    const descriptionError = this.isEmpty(description);
    const languageError = this.isEmpty(language);

/* Actualizamos el estado segun las validaciones */
    this.setState({
      errors: {
        email: emailError,
        password: passwordError,
        confirmation: confirmationError,
        browser: browserError,
        age: ageError,
        description:descriptionError,
        language:languageError,
      }
    });

     event.preventDefault();
  }

 render(){
    const {
      email,
      password,
      confirmation,
      browser,
      age,
      description,
      language,
      currentDate
    } = this.state.registerData;
    const { errors } = this.state;

   return (
     <form>
        <InputLine
           name="email"
           label="Correo"
           type="email"
           placeholder="correo@ejemplo.cl"
           required={true}
           onChange={this.onChange}
           error={errors.email} />

        <InputLine
           name="password"
           label="Contrase&ntilde;a"
           type="password"
           required={true}
           minLength="4"
           maxLength="8"
           onChange={this.onChange}
           error={errors.password} />

        <InputLine
           name="confirmation"
           label="Confirmar Contrase&ntilde;a"
           type="password"
           minlength="4"
           maxlength="8"
           required={true}
           onChange={this.onChange}
           error={errors.confirmation} />

        <SelectLine
           name="browser"
           label="Navegadores Preferidos"
           options={browsers}
           onChange={this.onChange}
           error={errors.browser} />

        <InputLine
           name="age"
           label="Edad"
           type="number"
           min="1"
           max="150"
           step="any"
           required={true}
           error={errors.age}
           onChange={this.onChange}  />

        <TextareaLine
           name="description"
           label="Descripci&oacute;n"
           rows="8"
           placeholder="Texto de Ejemplo"
           error={errors.description}
           onChange={this.onChange} />

        <InputLine
           name="language"
           label="Lenguaje de programaci&oacute;n Preferido"
           type="text"
           list={languages}
           required={true}
           error={errors.language}
           onChange={this.onChange} />

        <OutputLine
           name="currentDate"
           label="Fecha de Hoy"
           value={currentDate}  />

        <button onClick={this.doRegister}>Registrarse</button>
     </form>

  );
 }
}
