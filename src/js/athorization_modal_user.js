//Initialize Firebase
import { initializeApp } from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { onAuthStateChanged } from 'firebase/auth';
// const firebaseConfig = {
//   apiKey: 'AIzaSyBoGwLhspISnegPJuqB0wKYzxjoZ720S2Y',
//   authDomain: 'modaluser-96792.firebaseapp.com',
//   projectId: 'modaluser-96792',
//   storageBucket: 'modaluser-96792.appspot.com',
//   messagingSenderId: '997260471203',
//   appId: '1:997260471203:web:acbdf87b6a5523964c4816',
// };
// const app = initializeApp(firebaseConfig);

// // Get elements
// const txtEmail = document.querySelector('input[placeholder="EMAIL"]');
// const txtPassword = document.querySelector('input[placeholder="PASSWORD"]');
// const btnSignUp = document.querySelector('.form_link_sign_up');
// const btnLogout = document.querySelector('.header-button-span-text');

// // Add sign up event
// btnSignUp.addEventListener('click', e => {
//   // Get email and password
//   const email = txtEmail.value;
//   const password = txtPassword.value;
//   const auth = firebase.auth();
//   // Sign in
//   const promise = auth.createUserWithEmailAndPassword(email, password);
//   promise.catch(e => console.log(e.message));
// });

// // Add logout event
// btnLogout.addEventListener('click', e => {
//   firebase.auth().signOut();
// });

// Add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser);
    btnSignUp.textContent = firebaseUser.displayName;
    btnLogout.classList.remove('hide');
  } else {
    console.log('not logged in');
    btnSignUp.textContent = 'SIGN UP';
    btnLogout.classList.add('hide');
  }
});

//  Make sure you replace 'YOUR_API_KEY', 'YOUR_AUTH_DOMAIN', 'YOUR_DATABASE_URL', 'YOUR_PROJECT_ID', 'YOUR_STORAGE_BUCKET', and 'YOUR_MESSAGING_SENDER_ID'
// with your actual Firebase project
