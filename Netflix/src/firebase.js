import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "netflix-clone-ad6be.firebaseapp.com",
  projectId: "netflix-clone-ad6be",
  storageBucket: "netflix-clone-ad6be.appspot.com",
  messagingSenderId: "MSG_ID",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), { // Changed "user" to "users"
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" ")) // Use error.message for a more descriptive error
  }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password); // Added await
  } catch (error) {
    console.log(error);
    toast.error(error.code)// Use error.message for a more descriptive error
  }
}

const logout = () => {
  signOut(auth);
}

export { auth, db, login, signup, logout };
