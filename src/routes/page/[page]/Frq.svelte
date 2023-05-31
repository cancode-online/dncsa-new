<script lang='ts'>
  import MarkdownEditor from '$components/MarkdownEditor.svelte';
  import { onMount } from 'svelte';
  import { database, user } from '\$/firebase';
  import { doc, collection, setDoc, getDoc, getDocs } from 'firebase/firestore';

  export let webpage = '';

  let value = "Enter submission content here...";

  async function submit() {
    
    const db = database();
    const userDocRef = doc(db, 'users' + "/" + $user?.uid);
    const userDocSnapshot = await getDoc(userDocRef);
    const userDocData = userDocSnapshot.data();

    // Check if 'pages' collection exists in the user document
    if (!userDocData?.pages) {
      const pagesCollectionRef = collection(userDocRef, 'pages');
      const pageDocRef = doc(pagesCollectionRef, webpage);

      // Create a document with the webpage slug as the document ID
      await setDoc(pageDocRef, {
        grade: {
          total: 0,
          earned: 0
        },
        total_submissions: 1
      });

      const submissionsCollectionRef = collection(pageDocRef, 'submissions');
      const submissionDocRef = doc(submissionsCollectionRef);

      // Create a submissions document
      await setDoc(submissionDocRef, {
        submission_text: value,
        submission_number: 1, // Set the initial submission number to 1
        createdAt: new Date() // Set the createdAt field to the current date
      });

      // Update 'total_submissions' field by counting the documents in the 'submissions' collection
      const submissionsQuerySnapshot = await getDocs(submissionsCollectionRef);
      const totalSubmissions = submissionsQuerySnapshot.size;
      const submissionNumber = submissionsQuerySnapshot.size;

      await setDoc(pageDocRef, { total_submissions: totalSubmissions }, { merge: true });

      await setDoc(submissionDocRef, { submission_number: submissionNumber }, { merge: true });

    } else {
      const pageDocRef = doc(userDocRef, 'pages', webpage);
      const pageDocSnapshot = await getDoc(pageDocRef);

      // Check if a submission already exists
      if (pageDocSnapshot.exists()) {
        const submissionsCollectionRef = collection(pageDocRef, 'submissions');

        // Count the number of existing submission documents and increment by 1 for new submission
        const submissionsQuerySnapshot = await getDocs(submissionsCollectionRef);
        const submissionNumber = submissionsQuerySnapshot.size;
        const submissionDocRef = doc(submissionsCollectionRef);

        // Create a new submission document with incremented 'submission_number'
        await setDoc(submissionDocRef, {
          submission_text: value,
          submission_number: submissionNumber, 
          createdAt: new Date() 
        });

        // Update 'total_submissions' field by counting the documents in the 'submissions' collection
        const totalSubmissions = submissionsQuerySnapshot.size;
        await setDoc(pageDocRef, { total_submissions: totalSubmissions }, { merge: true });
      }
    }
  }
</script>

<span class="text-xl font-bold">Submit Assignment:</span>

<div class='bg-base-200 w-full min-h-[10rem] rounded-md'>
  <MarkdownEditor bind:value={value}/>
  <button on:click={submit} class="btn btn-primary absolute right-3 bottom-3">Post</button>
</div>

