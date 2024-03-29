// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  where,
  query,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithCustomToken,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

export const getToDoList = async () => {
  const todolistCollection = collection(db, "todo-list");
  const todolistResults = await getDocs(todolistCollection);
  const todolistList = todolistResults.docs.map((doc) => {
    const data = doc.data();
    const id = doc.id;
    return { ...data, id: id };
  });
  return todolistList;
};

export const getToDoListForUser = async () => {
  const todolistCollection = collection(db, "todo-list");
  const dbquery = query(
    todolistCollection,
    where("userId", "==", auth.currentUser?.uid || "")
  );
  const todolistResults = await getDocs(dbquery);
  const todolistList = todolistResults.docs.map((doc) => {
    const data = doc.data();
    const id = doc.id;
    return { ...data, id: id };
  });
  return todolistList;
};

export const getToDoItemById = async (id) => {
  const docRef = doc(db, "todo-list", id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  return { ...data, id: id };
};

export const updateToDoItemData = async (id, data) => {
  const docRef = doc(db, "todo-list", id);
  return await updateDoc(docRef, data);
};

export const deleteToDoItem = async (id) => {
  const docRef = doc(db, "todo-list", id);
  return await deleteDoc(docRef);
};

export const addToDoItem = async (data) => {
  const result = await addDoc(collection(db, "todo-list"), {
    ...data,
    userId: auth.currentUser.uid,
  });
  return result;
};

export const deleteAllToDoItems = async () => {
  const collectionRef = collection(db, "todo-list");
  const querySnapshot = await getDocs(collectionRef);

  querySnapshot.forEach((doc) => {
    deleteDoc(doc.ref)
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error deleting document: ", error);
      });
  });
};

export const signUp = async ({ email, password }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
};

export const login = async ({ email, password }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
};

export const logout = async () => {
  await signOut(auth);
};
