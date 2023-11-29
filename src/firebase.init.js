import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrq9l6eIrZ6Pui3gmbjZo4naTQg2CqXs8",
  authDomain: "protectedroute-14ba8.firebaseapp.com",
  projectId: "protectedroute-14ba8",
  storageBucket: "protectedroute-14ba8.appspot.com",
  messagingSenderId: "841167927348",
  appId: "1:841167927348:web:12cac8cb9f3c98f8a87261"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;