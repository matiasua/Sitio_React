import React from 'react';
import InputLine from './InputLine';


export default function LoginForm(){
  return (
    <form>
      <InputLine title="Correo" type="text" />
      <InputLine title="Contrase&ntilde;a" type="password" />
        <button>Ingresar</button>
    </form>

  );
}
