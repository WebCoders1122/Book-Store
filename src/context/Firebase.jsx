import { initializeApp } from "firebase/app";
import { createContext, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

const firebaseConfig = {
  apiKey: "AIzaSyADkNd-7OsztV-y6HXMRx1SiEnjRZAZFYM",
  authDomain: "book-store-49549.firebaseapp.com",
  projectId: "book-store-49549",
  storageBucket: "book-store-49549.appspot.com",
  messagingSenderId: "937966815181",
  appId: "1:937966815181:web:98c244950c0356517a2684",
};

const firebaseapp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseapp);

export const FirebaseProvider = (props) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  return (
    <FirebaseContext.Provider value={{ createUser }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
