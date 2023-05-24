const JUDGE0_API_URL = 'http://13.57.247.120:2358';

export async function POST({ request, fetch }) {
	const body = await request.json();

	const response = await fetch(`${JUDGE0_API_URL}/submissions?base64_encoded=true&wait=true`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	});

	const data = await response.json();

	if (data.token) {
		const tokenResponse = await fetch(
			`${JUDGE0_API_URL}/submissions/${data.token}?base64_encoded=true`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);

		const tokenData = await tokenResponse.json();

		const final = {
			status: tokenData.status.description,
			stdout: Buffer.from(tokenData.stdout || '', 'base64').toString('utf-8'),
			stderr: Buffer.from(tokenData.stderr || '', 'base64').toString('utf-8'),
			time: tokenData.time,
			memory: tokenData.memory
		};

		return new Response(JSON.stringify(final), { status: 200 });
	}

	return new Response(
		JSON.stringify({
			status: {
				id: 0,
				description: 'Failed to get token'
			},
			stdout: 'FATAL ERROR : NULL',
			stderr: 'Failed to get token',
			time: null,
			memory: null
		}),
		{ status: 200 }
	);
}