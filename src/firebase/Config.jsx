import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBxDGu_a1QUVrXgZ6MCaS07BGNQ-Jd6_lw',
	authDomain: 'portfolio-ffa0e.firebaseapp.com',
	projectId: 'portfolio-ffa0e',
	storageBucket: 'portfolio-ffa0e.appspot.com',
	messagingSenderId: '453928869617',
	appId: '1:453928869617:web:802318e62f3b91b0f21350',
	measurementId: 'G-BLLTDMJJ9J',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth();
export default db;
