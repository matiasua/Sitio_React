import React from 'react';
import NavBar from './NavBar';

function Register (){
  return (
    <>
    <NavBar />
    <section>
      <div class="tarjeta">
        <header>
          <h3>Registrarse</h3>
        </header>
        <form>
          <div>
            <label>Correo</label>
            <input type="email" placeholder="correo@ejemplo.cl"  required />
            </div>
            <div>
              <label>Contrase&ntilde;a</label>
              <input id="password" type="password" required />
            </div>
            <div>
              <label>Confirmar Contrase&ntilde;a</label>
              <input id="confirmacion" type="password" required />
            </div>
            <div>
              <label>Navegadores Preferidos</label>
              <select required >
                <option value="" disabled selected></option>
                <option value="google_chrome">Google Chrome</option>
                <option value="mozilla_firefox">Mozilla Firefox</option>
                <option value="opera">Opera</option>
                <option value="Microsoft_egde">Microsoft Egde</option>
              </select>
            </div>
            <div>
              <label>Edad</label>
              <input type="number" required />

            </div>
            <div>
              <label>Descripci&oacute;n</label>
              <textarea rows="8"></textarea>
            </div>
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
      </div>
    </section>
    <footer></footer>
    </>
  );
}

export default Register;
