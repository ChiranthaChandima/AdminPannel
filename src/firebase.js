import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyCj7TnSME25J3lFfU5dVtUoVI1dD0tW--0",
    authDomain: "plant-leaf-63fd8.firebaseapp.com",
    projectId: "plant-leaf-63fd8",
    storageBucket: "plant-leaf-63fd8.appspot.com",
    messagingSenderId: "915382994319",
    appId: "1:915382994319:web:01fa0efc6e75aa3cc437fa"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);