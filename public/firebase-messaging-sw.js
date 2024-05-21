importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyAynOfgrGJ7mxaPpKy3l8PuzLjFpOFD9w8',
  authDomain: 'testable-firebase-sample-c37d4.firebaseapp.com',
  projectId: 'testable-firebase-sample-c37d4',
  storageBucket: 'testable-firebase-sample-c37d4.appspot.com',
  messagingSenderId: '556031232618',
  appId: '1:556031232618:web:170932f9bc3aede3775813',
});

const messaging = firebase.messaging();
