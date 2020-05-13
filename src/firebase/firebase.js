import firebase from 'firebase'
const config = {
   apiKey: process.env.apiKey,
   authDomain: "quantiphi-239fd.firebaseapp.com",
   databaseURL: "https://quantiphi-239fd.firebaseio.com",
   projectId: "quantiphi-239fd",
   storageBucket: "quantiphi-239fd.appspot.com",
   messagingSenderId: "1051893397943",
   appId: "1:1051893397943:web:ff1891ec6c45b378139032"
 };
firebase.initializeApp(config);
export default firebase;