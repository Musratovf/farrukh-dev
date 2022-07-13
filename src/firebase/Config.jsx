import firebase from 'firebase';
const firebaseConfig = {
	apiKey: 'AIzaSyBxDGu_a1QUVrXgZ6MCaS07BGNQ-Jd6_lw',
	authDomain: 'portfolio-ffa0e.firebaseapp.com',
	projectId: 'portfolio-ffa0e',
	storageBucket: 'portfolio-ffa0e.appspot.com',
	messagingSenderId: '453928869617',
	appId: '1:453928869617:web:802318e62f3b91b0f21350',
	measurementId: 'G-BLLTDMJJ9J',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
