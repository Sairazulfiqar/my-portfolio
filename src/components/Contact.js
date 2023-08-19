import React from 'react'
import "../App.css";
// import {useForm} from 'react-hook-form';

export const Contact = () => {
  return (
    <div className="flex-child5" id="Contact">
      <form name="formulario" onsubmit="return validation()" action="confirmation.php"
        method="post">
        <div class="row">
          <label for="nombre">Nombre:</label>
          <input type="text" onkeyup="validarNombre()" id="nombre" class="nombre" name="nombre"/>
            <div class="error" id="errorNombre"></div>
        </div>
        <div class="row">
          <label for="email">Email:</label>
          <input type="email" onkeyup="validarEmail()" id="email" class="email" name="email"/>
            <div class="error" id="erroremail"></div>
        </div>
      </form>
      <div>
        <input type="submit" value="Enviar"/>
      </div>
    </div>

  )
}

export default Contact;