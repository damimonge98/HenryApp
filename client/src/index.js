import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './components/App';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

import "./index.css";


firebase.initializeApp({
  apiKey: "AIzaSyD5QX0UkZbfKCxa3P6JAsQYCcRh8-4MwHc",
  authDomain: "henryapp1.firebaseapp.com",
  projectId: "henryapp1",
  storageBucket: "henryapp1.appspot.com",
  messagingSenderId: "609445047524",
  appId: "1:609445047524:web:d82e5f5316dbf4258290f1"
});


/* service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}  */



ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
