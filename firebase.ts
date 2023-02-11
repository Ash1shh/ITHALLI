import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD74FIeZKUvdmSSRjofyF8V_dTwKpf_tS8",
  authDomain: "ithallli.firebaseapp.com",
  projectId: "ithallli",
  storageBucket: "ithallli.appspot.com",
  messagingSenderId: "348892089278",
  appId: "1:348892089278:web:c0b439b9d67c93cb3bc7ef"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
