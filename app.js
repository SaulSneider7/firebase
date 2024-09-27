// Importa los métodos necesarios desde Firebase
import './firebase.js';
import { auth } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

// Registro de usuario con correo y contraseña
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    // Usa createUserWithEmailAndPassword para crear una cuenta
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Cuenta creada exitosamente');
            console.log(userCredential.user);
        })
        .catch((error) => {
            console.error(error.message);
            alert('Error: ' + error.message);
        });
});

// Iniciar sesión con correo y contraseña
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Usa signInWithEmailAndPassword para iniciar sesión
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Inicio de sesión exitoso');
            console.log(userCredential.user);
        })
        .catch((error) => {
            console.error(error.message);
            alert('Error: ' + error.message);
        });
});

// Iniciar sesión con Google
document.getElementById('google-login').addEventListener('click', () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            alert('Inicio de sesión con Google exitoso');
            console.log(result.user);
        })
        .catch((error) => {
            console.error(error.message);
            alert('Error: ' + error.message);
        });
});