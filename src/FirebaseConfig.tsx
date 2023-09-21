import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyD3DL0BH2sZj7B1WyusajDuGV2R4lgIq6c",
  authDomain: "lilprogram.firebaseapp.com",
  projectId: "lilprogram",
  storageBucket: "lilprogram.appspot.com",
  messagingSenderId: "368513144302",
  appId: "1:368513144302:web:b03b03e1fcd98ebbcaaaff",
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

