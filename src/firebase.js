// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA5slB8WzrUAc2Y79YpRIeKk5j_bKOu-qg",
	authDomain: "board-12.firebaseapp.com",
	projectId: "board-12",
	storageBucket: "board-12.appspot.com",
	messagingSenderId: "901510907890",
	appId: "1:901510907890:web:70b4d10358ec6a61734d6b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
