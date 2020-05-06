import React from 'react';
import NavBar from './NavBar';


function Login (){
  return (
    <>
    <NavBar />
    <section>
      <div class="tarjeta">
        <header>
          <h3>Ingresar como Usuario</h3>
        </header>
        <form>
          <div>
            <label>Correo</label>
            <input />
          </div>
          <div>
            <label>Contrase&ntilde;a</label>
            <input type="password" />
          </div>
            <button>Ingresar</button>
        </form>
      </div>
    </section>
    <footer></footer>
    </>
  );
}

export default Login;
