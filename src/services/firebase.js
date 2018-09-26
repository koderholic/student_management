import firebase from 'firebase'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCfxCVcpeVhb4bt3OGmPie9pirQtojInBQ",
    authDomain: "school-mesh.firebaseapp.com",
    databaseURL: "https://school-mesh.firebaseio.com",
    projectId: "school-mesh",
    storageBucket: "school-mesh.appspot.com",
    messagingSenderId: "295564488114"
  };

firebase.initializeApp(config)

export default {
 database: firebase.database()
}
