/*
  ============================================================
  CONFIGURACIÓN DE FIREBASE — MEGÁFONO
  ============================================================
  Este archivo SOLO contiene la configuración de Firebase.
  NO inicializa Firebase. Esa tarea la realiza
  megafono-firebase.js
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
  PIN del panel de control
*/
window.CONTROL_PIN = "1234";

/*
  Clave de la YouTube Data API v3 — necesaria SOLO para importar
  playlists completas de YouTube de un solo link (no para videos sueltos).

  Cómo conseguirla (gratis):
  1. Entra a https://console.cloud.google.com/
  2. Crea un proyecto (o usa uno existente)
  3. Ve a "APIs y servicios" → "Biblioteca", busca "YouTube Data API v3" y actívala
  4. Ve a "Credenciales" → "Crear credenciales" → "Clave de API"
  5. Pega esa clave abajo. Es buena práctica restringirla a tu dominio
     (jordaniainv1-dot.github.io) en "Restricciones de la API" → "Referentes HTTP"
*/
window.YOUTUBE_API_KEY = "";
