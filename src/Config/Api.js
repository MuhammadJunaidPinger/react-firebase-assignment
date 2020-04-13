import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import '@firebase/storage';
var firebaseConfig = {
  apiKey: "AIzaSyDNUZ6nRHSfRpZrK1mGZyn-EUBRPvcHKBg",
  authDomain: "first-firebase-react-pro-80a5c.firebaseapp.com",
  databaseURL: "https://first-firebase-react-pro-80a5c.firebaseio.com",
  projectId: "first-firebase-react-pro-80a5c",
  storageBucket: "first-firebase-react-pro-80a5c.appspot.com",
  messagingSenderId: "542512616010",
  appId: "1:542512616010:web:21e313ee5c7b6fc2000cb3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// console.log("firebase--->",firebase);

async function faceBookLogin(){
  var provider = new firebase.auth.FacebookAuthProvider();

  const result = await firebase.auth().signInWithPopup(provider)
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    // var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log("user--->");
    console.log(user);

    const db = firebase.firestore()
    const tempUser = {
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      uid: user.uid
    }
    db.collection('user').doc(user.uid).set(tempUser)
    return tempUser
}
function saveAtFirestore(companyData) {
  
  const db = firebase.firestore()
  db.collection('data').doc(companyData).then((docRef) => {
    console.log(docRef);
}).catch((err) => {
    console.log(err);
})
  return companyData
}
export {
  faceBookLogin,
  saveAtFirestore
}