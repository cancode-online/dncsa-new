import { writable } from 'svelte/store';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import type { Writable } from 'svelte/store';
import type { User } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { collection, query, where, getDocs } from 'firebase/firestore';
import {
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    GithubAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    FacebookAuthProvider
} from 'firebase/auth';
import { alert } from '$stores/alerts';

const APP = initializeApp({
    apiKey: "AIzaSyAE5tH1vHtEf8cHVuPqqxe4ThkAimNIDhs",
    authDomain: "delnorte-apcsa.firebaseapp.com",
    projectId: "delnorte-apcsa",
    storageBucket: "delnorte-apcsa.appspot.com",
    messagingSenderId: "1006540206160",
    appId: "1:1006540206160:web:d9e5295a60702225222155",
    measurementId: "G-2G3ESBL1DQ"
});

export const getAuthApp = () => {
    return getAuth(APP);
};
export const database = () => {
    return getFirestore(APP);
};
export const authenticated = writable(undefined) as Writable<boolean | undefined>;
export const admin = writable(false);
export const user = writable(null) as Writable<User | null>;

// Listen for authentication state to change => updates authenticated store
onAuthStateChanged(getAuth(APP), (User) => {
    if (User) {
        authenticated.set(true);
        admin.set(true); // Check if admin
        user.set(User);
    } else {
        authenticated.set(false);
        user.set(null);
    }
});

// Logout function
export const logOut = () => {
    signOut(getAuthApp()).then(
        () => {
            alert('Successfully logged out', 'success');
        },
        () => {
            alert('Failed to log out. Try again', 'error');
        }
    );
};

const createUserDocument = async (user) => {
    const auth = getAuthApp();
  
    if (!auth?.currentUser) return;
  
    const db = database();
    const docRef = doc(db, 'users', auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    const document = docSnap.data();
  
    const docCollection = collection(db, 'users');
  
    if (!document) {
        
        let firstName = '';
        let lastName = '';
          
        if (user.displayName) {

        console.log(user.displayName);
        
        firstName = user.displayName.split(' ')[0] || '';
        lastName = user.displayName.split(' ')[1] || '';
    
        }

      await setDoc(docRef, {
        admin: true,
        first_name: firstName,
        last_name: lastName,
        grade: {
          earned: 0,
          total: 0
        }

      });
    }
  };
  

// Sign up with Email/Password function
export const signUpWithEmail = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
) => {
    const auth = getAuthApp();
    createUserWithEmailAndPassword(auth, email, password)
        .then(async () => {
            const auth = getAuthApp();
            await updateProfile(auth.currentUser, { displayName: firstName + ' ' + lastName });

            alert('Successfully signed up', 'success');
        })
        .catch(() => {
            alert('Failed to sign up. Try again', 'error');
        });
};

// Log in with Email/Password Function
export const signInWithEmail = (email: string, password: string) => {
    const auth = getAuthApp();

    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                resolve('Successfully logged in');
            })
            .catch(() => {
                alert('Failed to log in. Try again', 'error');
                reject('Failed to log in. Try again');
            });
    });
};

// Log in with Google function
export const signInWithGoogle = () => {
    const auth = getAuthApp();
    const provider = new GoogleAuthProvider();

    return new Promise((resolve, reject) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                alert('Successsfully logged in', 'success');
                const user = result.user;
                createUserDocument(user);

                resolve('Successfully logged in');
            })
            .catch(() => {
                alert('Failed to log in. Try again', 'error');
                reject('Failed to log in. Try again');
            });
    });
};

// Log in with GitHub function
export const signInWithGithub = () => {
    const auth = getAuthApp();
    const provider = new GithubAuthProvider();

    return new Promise((resolve, reject) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                alert('Successsfully logged in', 'success');
                const user = result.user;
                createUserDocument(user);

                resolve('Successfully logged in');
            })
            .catch(() => {
                reject('Failed to log in. Try again');
                alert('Failed to log in. Try again', 'error');
            });
    });
};

// Log in with GitHub function
export const signInWithFacebook = () => {
    const auth = getAuthApp();
    const provider = new FacebookAuthProvider();

    return new Promise((resolve, reject) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                alert('Successsfully logged in', 'success');
                const user = result.user;
                createUserDocument(user);

                resolve('Successfully logged in');
            })
            .catch(() => {
                reject('Failed to log in. Try again');
                alert('Failed to log in. Try again', 'error');
            });
    });
};

