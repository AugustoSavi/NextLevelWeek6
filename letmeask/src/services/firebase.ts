import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

import {FIREBASE_CONFIG} from '../variaveis';

const firebaseConfig = {
  apiKey: FIREBASE_CONFIG.API_KEY,
  authDomain: FIREBASE_CONFIG.AUTH_DOMAIN,
  databaseURL: FIREBASE_CONFIG.DATABASE_URL,
  projectId: FIREBASE_CONFIG.PROJECT_ID,
  storageBucket: FIREBASE_CONFIG.STORAGE_BUCKET,
  messagingSenderId: FIREBASE_CONFIG.MESSAGING_SENDER_ID,
  appId: FIREBASE_CONFIG.APP_ID
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export {firebase, auth, database };