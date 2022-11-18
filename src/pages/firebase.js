import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyDupvsTt8gUI5uRfC6CChO62HIiHNVuVwI",
    authDomain: "ssd-files.firebaseapp.com",
    projectId: "ssd-files",
    storageBucket: "ssd-files.appspot.com",
    messagingSenderId: "512846901971",
    appId: "1:512846901971:web:79d2c75373690190abda26",
    measurementId: "G-5BXRLHXCY7"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app ,process.env.bucket_url);


