import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import dotenv from 'dotenv';
dotenv.config();
const firebaseConfig = {

	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, "spotify-app-406a6.appspot.com");
export default storage;
