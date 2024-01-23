import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFbM0tizMdyYXyCJgIwotSyyd5vfbgexo",
  authDomain: "netflix-clone-9439f.firebaseapp.com",
  projectId: "netflix-clone-9439f",
  storageBucket: "netflix-clone-9439f.appspot.com",
  messagingSenderId: "673732101297",
  appId: "1:673732101297:web:dfeb1a98384f8eb9ff4e90"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db;
