import { arrayRemove, doc, getDoc, setDoc } from "firebase/firestore";
import { onMount } from "svelte/internal";
import { database, user } from "../../../firebase";
import { collection } from "firebase/firestore";

export async function POST({ request, fetch }) {

	const data =  await request.json();


	// request : selected_answers & webpage & clientUid

	const db = database();
	const pageDocRef = doc(db, `pages/${data.webpage}`);
	const pageDocSnapshot = await getDoc(pageDocRef);
	const pageDocData = pageDocSnapshot.data();

	const correct_answers = pageDocData.correct_answers;
	let correct = 0;

	for (let i = 0; i < correct_answers.length; i++) {

		if (correct_answers[i] === data.selected_answers[i]) {
			correct++;
		}

	}

	const score = correct / (correct_answers.length) * pageDocData.grade_total;

	// removes user from ungraded submissions page

	const userDocRef = doc(db, `users/${data.userUid}`);
	const userDocSnap = getDoc(userDocRef);
	const user = (await userDocSnap).data();

	await setDoc(userDocRef, {
		grade: {
			earned: user.grade.earned + score,
			total: user.grade.total + pageDocData.grade_total
		}
	}, {merge: true});

	// states the quiz is submitted in user data

	const submissionsRef = doc(userDocRef, `/pages/${data.webpage}`);

	const submissionDateRef = collection(submissionsRef, "submissions");

	const newSubmissionDocRef = doc(submissionDateRef);

	await setDoc(newSubmissionDocRef, {
	createdAt: new Date(),
	});


	await setDoc(submissionsRef, {
		total_submissions: 1,
		grade: {
			earned: score,
			total: pageDocData.grade_total,
		},
		createdAt: new Date()
	}, {merge: true});

	// return

	return new Response(JSON.stringify({
		correct: correct,
		score: score,
	}), { status: 200 });

}
