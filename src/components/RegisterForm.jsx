import React from 'react';
import InputLine from './InputLine';
import SelectLine from './SelectLine';
import TextareaLine from './TextareaLine';


const browsers = [
  {value: '', label: 'Seleccione...'},
  {value: 'google_chrome', label: 'Google Chrome'},
  {value: 'mozilla_firefox', label: 'Mozilla Firefox'},
  {value: 'opera', label: 'Opera'},
  {value: 'Microsoft_egde', label: 'Microsoft Egde'},
];


export default function RegisterForm (){
  return (
    <form>
        <InputLine label="Correo" type="email" placeholder="correo@ejemplo.cl" required={true}/>
        <InputLine label="Contrase&ntilde;a" type="password" required={true} minlength="4" maxlength="8" />
        <InputLine label="Confirmar Contrase&ntilde;a" type="password" required={true} minlength="4" maxlength="8" />
        <SelectLine Label="Navegadores Preferidos" options={browsers} />
        <InputLine label="Edad" type="number" min="1" max="150" step="any" required={true}  />
        <TextareaLine label="Descripci&oacute;n" rows="8" placeholder="Texto de Ejemplo" />
        <div>
          <label>Lenguaje de programaci&oacute;n Preferido</label>
          <input list="lenguajes" />
          <datalist id="lenguajes">
            <option>Javascript</option>
            <option>Python</option>
            <option>Java</option>
          </datalist>
        </div>
        <div>
          <output>23/04/2020</output>
        </div>
        <button id="register">Registrarse</button>
    </form>

  );
}
