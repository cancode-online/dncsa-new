import { arrayRemove, doc, getDoc, setDoc } from "firebase/firestore";
import { onMount } from "svelte/internal";
import { database, user } from "../../../firebase";

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

	const userDocRef = doc(db, 'users', data.userUid);
	const userDocSnap = getDoc(userDocRef);
	const user = (await userDocSnap).data();

	await setDoc(userDocRef, {
		grade: {
			earned: user.grade.earned + score,
			total: user.grade.total + pageDocData.grade_total
		}
	}, {merge: true});
	
	return new Response(JSON.stringify({
		correct: correct,
		score: score,
	}), { status: 200 });
}
