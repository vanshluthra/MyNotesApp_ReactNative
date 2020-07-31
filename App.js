import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NotesScreenComponent from './src/NotesScreenComponent';
import firebase from 'firebase';
import LoginScreenComponent from './src/LoginScreenComponent';

export default function App() {

  const [userLoggedIn, setUserLoggedIn] = useState(false)

  if(firebase.apps.length === 0){
  var firebaseConfig = {
    apiKey: "AIzaSyBrzhY5p6Mmx0AaEM0wK9crOxCiz2TN4rQ",
    authDomain: "my-notes-5aa8b.firebaseapp.com",
    databaseURL: "https://my-notes-5aa8b.firebaseio.com",
    projectId: "my-notes-5aa8b",
    storageBucket: "my-notes-5aa8b.appspot.com",
    messagingSenderId: "821740626749",
    appId: "1:821740626749:web:0ff9eaff57306f685e1b54"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

firebase.auth().onAuthStateChanged((user) => {
  if(user === null) {
    setUserLoggedIn(false)
  } else {
    setUserLoggedIn(true)
  }
})

if(userLoggedIn) {
  return (
    <View style={styles.container}>
      <NotesScreenComponent/>
    </View>
  );
} else {
  return (
    <View style={styles.container}>
      <LoginScreenComponent/>
    </View>
  );
}

  return (
    <View style={styles.container}>
      {/* <NotesScreenComponent/> */}
      <LoginScreenComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
