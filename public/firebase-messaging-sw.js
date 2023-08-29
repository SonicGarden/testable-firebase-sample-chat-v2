importScripts(
  'https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js'
);
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js'
);

firebase.initializeApp({
  apiKey: 'xxxxx',
  authDomain: 'xxxxx',
  projectId: 'xxxxx',
  storageBucket: 'xxxxx',
  messagingSenderId: 'xxxxx',
  appId: 'xxxxx',
});

const messaging = firebase.messaging();