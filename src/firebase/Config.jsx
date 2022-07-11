import firebase from 'firebase';
const firebaseConfig = {
	apiKey: 'AIzaSyCFVemM2kNYQ9Aa_9_WLTWJF6QN4CxtNXk',
	authDomain: 'portfolia-website-6d26e.firebaseapp.com',
	projectId: 'portfolia-website-6d26e',
	storageBucket: 'portfolia-website-6d26e.appspot.com',
	messagingSenderId: '584644557441',
	appId: '1:584644557441:web:705069d66d1e27dd40eb80',
	measurementId: 'G-122V3SFK7R',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
