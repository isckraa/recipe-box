import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import firebaseConfig from '../constants/database';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const base = Rebase.createClass(firebase.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
