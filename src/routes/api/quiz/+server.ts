import { arrayRemove, doc, getDoc, setDoc } from "firebase/firestore";
import { onMount } from "svelte/internal";
import { database, user } from "../../../firebase";
import { collection } from "firebase/firestore";

export async function POST({ request, fetch }) {

	const data =  await request.json();


	// request : selected_answers & webpage & clientUid

	const pageDocRef = doc(database(), `pages/${data.webpage}`);
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

	// updates total score for user

	const userDocRef = doc(db, `users/${data.userUid}`);
	const userDocSnap = getDoc(userDocRef);
	const user = (await userDocSnap).data();

	await setDoc(userDocRef, {
		grade: {
			earned: user.grade.earned + score,
			total: user.grade.total + pageDocData.grade_total
		}
	}, {merge: true});

	// updates score for users collection of pages
	
	const userPageRef = doc(userDocRef, `/pages/${data.webpage}`);
	
	await setDoc(userPageRef, {
		total_submissions: 1,
		grade: {
			earned: score,
			total: pageDocData.grade_total,
		},
		createdAt: new Date()
	});

	// updates page information for whose submitted 

	let ungradedArray = pageDocData.submissions.ungraded_submissions;

	const userIdIndex = ungradedArray.indexOf(data.userUid);
	if (index > -1) {
		ungradedArray.splice(userIdIndex, 1);
	}

	let submittedArray = pageDocData.submissions.submitted_submissions;

	console.log("submitted Array" + submittedArray);

	submittedArray.push(data.userUid);

	await setDoc(pageDocRef, {
		submissions: {
			ungraded_submissions: ungradedArray,
			submitted_submissions: submittedArray,
		}
	}, {merge: true});

	// return

	return new Response(JSON.stringify({
		correct: correct,
		score: score,
	}), { status: 200 });

}
