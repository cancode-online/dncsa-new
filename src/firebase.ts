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
	apiKey: 'AIzaSyBj0TH8DpQanSGY8KI9lRbexHxf1C2dLeE',
	authDomain: 'cancode-c22b9.firebaseapp.com',
	databaseURL: 'https://cancode-c22b9-default-rtdb.firebaseio.com',
	projectId: 'cancode-c22b9',
	storageBucket: 'cancode-c22b9.appspot.com',
	messagingSenderId: '895295178743',
	appId: '1:895295178743:web:e54ec0de53dda9ff2110f2',
	measurementId: 'G-TVV87SBYMV'
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
		let new_tag = 0;

		for (let i = 0; i < 5; i++) {
			new_tag = Math.floor(Math.random() * 10000);

			const q = query(
				docCollection,
				where('display_name', '==', user.displayName),
				where('usertag', '==', new_tag)
			);
			const querySnapshot = await getDocs(q);

			// querySnapshot.forEach((doc) => {
			//  // doc.data() is never undefined for query doc snapshots
			//  console.log(doc.id, " => ", doc.data());
			// });
		}

		await setDoc(docRef, {
			badges: {
				0: {
					color: '#ff00ff',
					icon: 'trophy',
					text: 'Week 47'
				}
			},
			display_name: user.displayName,
			forum_posts: {
				0: {
					'/forums/Lz1wtjw2Dy5qckFNNLfK': true
				}
			},
			friends: {
				0: {
					user: doc(db, 'users', 'cancode-bot')
				}
			},
			liked: {},
			notifications: {
				0: {
					origin: {
						type: 'temp',
						url: 'temp',
						text: 'temp',
						title: 'temp'
					}
				}
			},
			playground_data: {
				code: "console.log('something');",
				uuid: '2Fy7BX2bYM7PVs8tJX4b',
				preferred_theme: 'default'
			},
			problem_data: {
				0: {
					code: 'let a = 0;',
					submission: {
						passed: true,
						runtime: 12039,
						submittedAt: 'March 22, 2023 at 3:17:42 PM UTC-7'
					}
				}
			},
			server_list: {
				0: doc(db, 'servers', 'welcome-to-cancode')
			},
			username: user.displayName.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(),
			usertag: new_tag
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
