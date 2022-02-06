import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBy6yHd_w2AVnuhRniiKausE_C4-g_GiWg",
  authDomain: "netflix-clone-940e1.firebaseapp.com",
  projectId: "netflix-clone-940e1",
  storageBucket: "netflix-clone-940e1.appspot.com",
  messagingSenderId: "108032309826",
  appId: "1:108032309826:web:9bc7b164bac9db45808bdb",
  measurementId: "G-2BR8V9G3TK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);