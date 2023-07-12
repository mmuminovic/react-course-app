// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "react-it-camp.firebaseapp.com",
  projectId: "react-it-camp",
  storageBucket: "react-it-camp.appspot.com",
  messagingSenderId: "289608587597",
  appId: "1:289608587597:web:28e0b4e6410b79a705ff04",
  measurementId: "G-E4SD2NV0T2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

export const getQuotes = async () => {
  const quotesCollection = collection(db, "quotes");
  const quoteResults = await getDocs(quotesCollection);
  const quoteList = quoteResults.docs.map((doc) => doc.data());
  return quoteList;
};

export const addQuote = async (data) => {
  const result = await addDoc(collection(db, "quotes"), data);
  return result;
};
