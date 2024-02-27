import { initializeApp } from "firebase/app";
import { createContext, useContext, useEffect, useState } from "react";

//firebase imports
//authentication
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
//firestore, storage
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

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

// firebase related veriables
const firebaseapp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseapp);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage(firebaseapp);
const firestore = getFirestore(firebaseapp);

export const FirebaseProvider = (props) => {
  // to check weather user logged in or not
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      user ? setUser(user) : setUser(null);
    });
  }, []);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };
  const signOutUser = () => {
    return signOut(firebaseAuth);
  };
  const signInWithGoogle = () => {
    return signInWithPopup(firebaseAuth, googleProvider);
  };
  const createListing = async (name, isbn, cover, price) => {
    const imageRef = ref(storage, `uploads/images/${Date.now()}-${cover.name}`);
    const uploadResult = await uploadBytes(imageRef, cover);
    return addDoc(collection(firestore, "books"), {
      name,
      isbn,
      price,
      coverURL: uploadResult.ref._location.path,
      userName: user.displayName,
      userEmail: user.email,
      userPhoto: user.photoURL,
      userID: user.uid,
    });
  };
  const isSignedin = user ? true : false;
  return (
    <FirebaseContext.Provider
      value={{
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
        isSignedin,
        createListing,
      }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
