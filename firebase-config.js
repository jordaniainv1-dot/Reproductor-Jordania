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
  apiKey: "AIzaSyD_txrS3JN_heKGUB7kxwNXexoWYlE0R6k",
  authDomain: "reproductor-de-jordania.firebaseapp.com",
  projectId: "reproductor-de-jordania",
  storageBucket: "reproductor-de-jordania.firebasestorage.app",
  messagingSenderId: "798069373236",
  appId: "1:798069373236:web:c3d7e743165e53e1764d61"
};

/*
  PIN del panel de control (opcional).
  Esto NO es seguridad real de la base de datos — solo evita que
  alguien que abra el link del panel por curiosidad cambie tu música
  sin querer. Cámbialo por el número que quieras (4 a 6 dígitos).
*/
window.CONTROL_PIN = "1234";

/*
  Clave de YouTube Data API v3 (gratis, sin tarjeta).
  Se usa para traer el TÍTULO real de los videos y para importar
  playlists completas de una sola vez. Sigue el README, Parte 1.5,
  para obtenerla en 5 minutos. Si la dejas como está, seguirás
  pudiendo agregar videos de YouTube, pero no vas a poder importar
  playlists ni ver el título real (solo "Video de YouTube").
*/
window.YOUTUBE_API_KEY = "AIzaSyAGGfa1wTVHDj7Hg6BMzuv244mkGSuuc8M";
