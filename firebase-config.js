/*
  ============================================================
  CONFIGURACIÓN DE FIREBASE — MEGÁFONO
  ============================================================
  Aquí pegas las credenciales de TU proyecto de Firebase.
  Las encuentras en:
    Firebase Console > (ícono de engranaje) Configuración del proyecto
    > pestaña "General" > sección "Tus apps" > "SDK de Firebase"

  Sigue el archivo README.md paso a paso si no sabes cómo
  crear el proyecto todavía.

  IMPORTANTE: este proyecto solo usa Firestore (100% gratis, sin
  tarjeta). NO necesitas activar Cloud Storage para nada — de hecho,
  mejor no lo actives, porque Google ahora pide una tarjeta (plan
  Blaze) incluso para el uso gratuito de Storage. Pega los valores
  tal cual te los muestre Firebase, aunque incluyan "storageBucket";
  ese campo simplemente no se usa en este proyecto.

  No necesitas tocar ningún otro archivo del proyecto.
  ============================================================
*/

window.FIREBASE_CONFIG = {
  apiKey: "PEGA_AQUI_TU_API_KEY",
  authDomain: "PEGA_AQUI_TU_PROYECTO.firebaseapp.com",
  projectId: "PEGA_AQUI_TU_PROYECTO",
  storageBucket: "PEGA_AQUI_TU_PROYECTO.appspot.com",
  messagingSenderId: "PEGA_AQUI_TU_SENDER_ID",
  appId: "PEGA_AQUI_TU_APP_ID"
};

/*
  PIN del panel de control (opcional).
  Esto NO es seguridad real de la base de datos — solo evita que
  alguien que abra el link del panel por curiosidad cambie tu música
  sin querer. Cámbialo por el número que quieras (4 a 6 dígitos).
*/
window.CONTROL_PIN = "1234";
