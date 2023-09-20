import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCGCxgeR4JeK7D-8OHcQfRZNC4-gIRVKYg",
  authDomain: "school-attendance-8f581.firebaseapp.com",
  databaseURL: "https://school-attendance-8f581-default-rtdb.firebaseio.com",
  projectId: "school-attendance-8f581",
  storageBucket: "school-attendance-8f581.appspot.com",
  messagingSenderId: "541679704852",
  appId: "1:541679704852:web:545b89737a7c00c3a70001",
  measurementId: "G-6JTTLX77V4"
};

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase.database()