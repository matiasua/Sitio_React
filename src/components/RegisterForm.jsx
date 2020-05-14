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


export default function RegisterForm (){
  return (
    <form>

        <InputLine
           label="Correo"
           type="email"
           placeholder="correo@ejemplo.cl"
           required={true} />

        <InputLine
           label="Contrase&ntilde;a"
           type="password"
           required={true}
           minLength="4"
           maxLength="8" />

        <InputLine
           label="Confirmar Contrase&ntilde;a"
           type="password"
           minlength="4"
           maxlength="8"
           required={true} />

        <SelectLine
           Label="Navegadores Preferidos"
           options={browsers} />

        <InputLine
           label="Edad"
           type="number"
           min="1"
           max="150"
           step="any"
           required={true}  />

        <TextareaLine
           label="Descripci&oacute;n"
           rows="8"
           placeholder="Texto de Ejemplo" />

        <InputLine
           label="Lenguaje de programaci&oacute;n Preferido"
           type="text"
           list={languages}
           required={true} />

        <OutputLine
           label="Fecha de Hoy"
           value="23/04/2020"  />


        <button id="register">Registrarse</button>
    </form>

  );
}
