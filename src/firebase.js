import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB56H1AQiFqCWf5AmJymxUJCaE-KH2Jq5Y",
    authDomain: "himattar.firebaseapp.com",
    databaseURL: "https://himattar.firebaseio.com",
    projectId: "himattar",
    storageBucket: "himattar.appspot.com",
    messagingSenderId: "614568693613",
    appId: "1:614568693613:web:083d07cc2b0e9b4f"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
