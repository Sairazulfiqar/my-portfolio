import React from 'react';
import "../App.css";

const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
const nameRegexp =  new RegExp(/^[a-zA-Z\s]+$/);

function Contact() {
  const [nameField, setNameField] = React.useState({
    value: "",
    hasError: false,
  });

  const [emailField, setEmailField] = React.useState({
    value: "",
    hasError: false,
  });

  function handleChange(evt) {}
  function handleBlur() {
    /*
      1. Evaluamos de manera síncrona
      si el valor del campo no es un correo valido.
    */
    const hasError = !nameRegexp.test(nameField.value) && !!emailRegexp.test(emailField.value);
    setNameField((prevState) => ({ ...prevState, hasError })) && setEmailField((prevState) => ({ ...prevState, hasError }));;
  };
  
    return (
    <div className='Contacts-main'>
      <div className="flex-child5" id="Contact">
        <form>
          <div className='row'>
            <label htmlFor="Name"></label>
            <input id="name" type="text" name="Name" placeholder='Name' value={nameField.value} onChange={handleChange} onBlur={handleBlur} aria-errormessage="NameErrorID" aria-invalid={nameField.hasError}/>
            <p id="msgID" style={{ visibility: nameField.hasError ? "visible" : "hidden" }}> Please enter a valid Name</p>
          </div>
          <div className='row'>
          <label htmlFor="email"></label>
            <input type="email" id="email" name="email" placeholder='Email' value={emailField.value} onChange={handleChange} onBlur={handleBlur} aria-errormessage="emailErrorID" aria-invalid={emailField.hasError}/>
            <p id="msgID" style={{ visibility: emailField.hasError ? "visible" : "hidden" }}> Please enter a valid email</p>
          </div>
          <div className='row'>
          <input id="submit" type="submit" value="Let's Talk"/>
          </div>
            


          </form>
      </div>
    </div>
  );
};


// export const Contact = () => {

//   const LETRAS = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

//   let NombreError = true;

//   function mostrarError(id, txt) {
//     document.getElementById(id).innerHTML = txt;
//   }

//   function validarNombre() {
//     var nombre = document.formulario.nombre.value;
//     if (nombre === "") {
//       mostrarError("errorNombre", "ERROR: Campo vacio");
//     }
//     else {
//       mostrarError("errorNombre", "");

//       var regex = /^[a-zA-Z\s]+$/;
//       if (regex.test(nombre) === false) {
//         mostrarError("errorNombre", "ERROR: Formato inválido");
//       }
//       else {
//         mostrarError("errorNombre", "");
//         NombreError = false;
//       }

//     }
//   }

//   function validarEmail() {
//     var email = document.formulario.email.value;
//     if (email === "") {
//       document.getElementById("errorEmail").innerHTML = "ERROR: email  vacio"
//     }
//     else {
//       document.getElementById("errorEmail").innerHTML = "";
//       var regex = /^[\w-\.]+@([\w-]+\.)+[\w]{2,4}$/;
//       if (regex.test(email) === false) {
//         mostrarError("errorEmail", "ERROR: Formato email inválido");
//       }
//       else {
//         mostrarError("errorEmail", "");
      
//       }

//     }
//   }

//   function validation() {

//     if (!NombreError) return true;
//     else {
//       validarNombre();
//       validarEmail();
//       return false;
//     }
//   }


//   return (
//     <div className='Contacts-main'>
//       <h1> <strong>Let's Connect</strong></h1>
//       <div className="flex-child5" id="Contact">
//        <form name="formulario" onsubmit={validation()} action="confirmation.php"
//         method="post" className='form'>
//         <div class="row">
//           <label for="nombre"></label>
//           <input type="text" placeholder='Name' onkeyup={validarNombre()} id="nombre" class="nombre" name="nombre"/>
//             <div class="error" id="errorNombre"></div>
//         </div>
//         <div class="row">
//           <label for="email">Email:</label>
//           <input type="email" placeholder='Email' onkeyup={validarEmail()} id="email" class="email" name="email"/>
//             <div class="error" id="erroremail"></div> <br/>
//         </div>
//         <div class="row">
//           <label for="nombre">Message</label>
//           <input type="text" placeholder='Leave your message' id="msg" class="msg" name="msg"/>
//         </div>
//         <div>  <input id="submit" type="submit" value="Let's Talk"/></div>
//       </form>
//       <div>
//       </div>
//     </div>

//     </div>
 
//   )
// }

export default Contact;