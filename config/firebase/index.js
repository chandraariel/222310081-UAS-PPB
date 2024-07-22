// config/firebase/index.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDK9QmK7Btuv-0Y4n6Lp9P9261ruLNa97o",
  authDomain: "helpdesk-15130.firebaseapp.com",
  databaseURL: "https://helpdesk-15130-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "helpdesk-15130",
  storageBucket: "helpdesk-15130.appspot.com",
  messagingSenderId: "75736671654",
  appId: "1:75736671654:web:7648dd36b57d676f0ddb67"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };
