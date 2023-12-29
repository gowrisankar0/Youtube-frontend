
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA8dOBb-mlfCGvODaYTAbkaQlKB2Wx4AsY",
  authDomain: "video-208f1.firebaseapp.com",
  projectId: "video-208f1",
  storageBucket: "video-208f1.appspot.com",
  messagingSenderId: "181869176424",
  appId: "1:181869176424:web:3967d23a90636eed80fddd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth();
export const provider =new GoogleAuthProvider()

export default app