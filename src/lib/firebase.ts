import { initializeApp } from 'firebase/app';
import {
  User,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as _signOut,
  connectAuthEmulator,
} from 'firebase/auth';
import {
  Timestamp,
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
  FirestoreDataConverter,
  PartialWithFieldValue,
  serverTimestamp as _serverTimeStamp,
  initializeFirestore,
  connectFirestoreEmulator,
} from 'firebase/firestore';
import { getMessaging, getToken } from 'firebase/messaging';
import { omit } from 'lodash-es';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

type WithId<T> = T & { id: string };

const getConverter = <T extends DocumentData>(): FirestoreDataConverter<WithId<T>> => ({
  toFirestore: (data: PartialWithFieldValue<WithId<T>>): DocumentData => {
    return omit(data, ['id']);
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<T>, options: SnapshotOptions): WithId<T> => {
    return { id: snapshot.id, ...snapshot.data(options) };
  },
});

const signInGoogleWithPopup = async () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(getAuth(), provider);
};

const signOut = async () => _signOut(getAuth());

const serverTimestamp = _serverTimeStamp as unknown as () => Timestamp;

const getFcmToken = async () =>
  getToken(getMessaging(), {
    vapidKey: import.meta.env.VITE_FIREBASE_MESSAGING_VAPID_KEY,
  });

const app = initializeApp(firebaseConfig);

if (import.meta.env.VITE_EMULATORS === 'true') {
  console.info('USE EMULATORS...');
  connectAuthEmulator(getAuth(), 'http://127.0.0.1:9099');
  const firestore = initializeFirestore(app, {
    experimentalForceLongPolling: true,
  });
  connectFirestoreEmulator(firestore, '127.0.0.1', 8080);
}

export type { User, WithId };
export { Timestamp, getConverter, serverTimestamp, signInGoogleWithPopup, signOut, getFcmToken };
