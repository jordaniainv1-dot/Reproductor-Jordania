// ============================================================
// MEGÁFONO — capa de datos compartida (Firestore + Storage)
// Este archivo lo usan reproductor.html y control.html.
// No necesitas editar nada aquí; las claves van en firebase-config.js
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore, doc, setDoc, onSnapshot, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Nota: este proyecto NO usa Firebase Storage a propósito, porque Google
// ahora exige activar el plan de pago (Blaze, con tarjeta) para usarlo,
// incluso si el uso real es gratuito. Los audios propios se enlazan por
// URL (ver uploadAudioFile más abajo, que ya no se usa) y se hospedan
// gratis en el propio repositorio de GitHub. Solo Firestore, que sigue
// siendo 100% gratis sin tarjeta.

const app = initializeApp(window.FIREBASE_CONFIG);
export const db = getFirestore(app);

// Todo vive dentro de la colección "megafono" en 4 documentos:
//   library  -> { music:[Track], ads:[Track] }
//   settings -> { adFrequency, shuffle, volume }
//   playback -> estado real de lo que suena, lo escribe el reproductor
//   commands -> últimas órdenes remotas, las escribe el panel de control
const libraryRef  = doc(db, "megafono", "library");
const settingsRef = doc(db, "megafono", "settings");
const playbackRef = doc(db, "megafono", "playback");
const commandsRef = doc(db, "megafono", "commands");

export function genId(){
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

// ---------- Lectura en vivo ----------
export function subscribeLibrary(cb){
  return onSnapshot(libraryRef, snap=>{
    const d = snap.data() || {};
    cb({ music: d.music || [], ads: d.ads || [] });
  }, err=> console.error("Error leyendo library:", err));
}
export function subscribeSettings(cb){
  return onSnapshot(settingsRef, snap=>{
    cb(snap.data() || { adFrequency: 3, shuffle: false, volume: 0.8 });
  }, err=> console.error("Error leyendo settings:", err));
}
export function subscribePlayback(cb){
  return onSnapshot(playbackRef, snap=> cb(snap.data() || null),
    err=> console.error("Error leyendo playback:", err));
}
export function subscribeCommands(cb){
  return onSnapshot(commandsRef, snap=> cb(snap.data() || null),
    err=> console.error("Error leyendo commands:", err));
}

// ---------- Escritura ----------
export async function writeLibrary(music, ads){
  await setDoc(libraryRef, { music, ads, updatedAt: serverTimestamp() }, { merge:true });
}
export async function writeSettings(partial){
  await setDoc(settingsRef, { ...partial, updatedAt: serverTimestamp() }, { merge:true });
}
export async function writePlayback(partial){
  await setDoc(playbackRef, { ...partial, updatedAt: serverTimestamp() }, { merge:true });
}
export async function sendCommand(type, payload){
  await setDoc(commandsRef, { seq: Date.now(), type, payload: payload===undefined?null:payload });
}

export function extractYouTubeId(url){
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : null;
}

export function fetchYouTubeTitle(videoId){
  return fetch('https://noembed.com/embed?url=https://www.youtube.com/watch?v=' + videoId)
    .then(r=> r.json()).then(data=> (data && data.title) ? data.title : 'Video de YouTube')
    .catch(()=> 'Video de YouTube');
}
