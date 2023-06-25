import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDbowFunkU3NjdP8Gal4xSezZ56v0beiHY",
  authDomain: "portfolio-1c6cd.firebaseapp.com",
  projectId: "portfolio-1c6cd",
  storageBucket: "portfolio-1c6cd.appspot.com",
  messagingSenderId: "858421089013",
  appId: "1:858421089013:web:1a0a00cce31677162bebbc",
  measurementId: "G-PJX9LHF088"
};

// Inicializa Firebase con la configuración proporcionada
const app = initializeApp(firebaseConfig);

// Obtiene la instancia de Firestore
const db = getFirestore(app);

export default db;