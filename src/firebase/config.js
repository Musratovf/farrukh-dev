import firebase from 'firebase';
const firebaseConfig = {
	apiKey: 'AIzaSyBIPKK50NB8I9ikygniHQqz2Cf7e43MrL8',
	authDomain: 'portfolio-website-a9017.firebaseapp.com',
	projectId: 'portfolio-website-a9017',
	storageBucket: 'portfolio-website-a9017.appspot.com',
	messagingSenderId: '626717135293',
	appId: '1:626717135293:web:1e6003d068d11e307102d4',
	measurementId: 'G-7YKWNQK9KY',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
