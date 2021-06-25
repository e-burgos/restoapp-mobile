import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import firebaseConfig from './config';

class Firebase {
    constructor() {
        if(!app.apps.length){
            app.initializeApp(firebaseConfig);
        }
        this.firestore = app.firestore();
        this.auth = app.auth();
    }
}

const firebase = new Firebase();
export default firebase;