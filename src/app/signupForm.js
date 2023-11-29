import { createUserWithEmailAndPassword } from  "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signUpForm["signup-email"].value;
  const password = signUpForm["signup-password"].value;

  //promesa con el await, necesita el async
  try {
    //firebase con mínimo de 6 caracteres.
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredential)

    // Close the signup modal
    const signupModal = document.querySelector('#signupModal');
    const modal = bootstrap.Modal.getInstance(signupModal);
    modal.hide();
    /*Toastify({
      text: "Bienvenido",
      duration: 4000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "botton ,
      position: "right", 
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: vino?,
      },
      onClick: function(){} // Callback after click
    }).showToast();*/



    // reset the form
    signUpForm.reset();

    // show welcome message
    showMessage("Bienvenido" + userCredentials.user.email);

  } catch (error) {
    //usuario ya existente
    if (error.code === 'auth/email-already-in-use') {
      showMessage("El correo ya existe", "error")
    } else if (error.code === 'auth/invalid-email') {
      showMessage("Correo incorrecto", "error")
    } else if (error.code === 'auth/weak-password') {
      showMessage("Contraseña debil", "error")
    } else if (error.code) {
      showMessage("Something went wrong", "error")
    }
  }

});