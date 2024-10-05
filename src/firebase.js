import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCBGtEWx3EHfSEkw75-ll100X1haWFY8hc',
  authDomain: 'react-a8708.firebaseapp.com',
  projectId: 'react-a8708',
  storageBucket: 'react-a8708.appspot.com',
  messagingSenderId: '980561098719',
  appId: '1:980561098719:web:your_app_id',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
