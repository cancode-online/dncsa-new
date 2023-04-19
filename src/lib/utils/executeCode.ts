import { Buffer } from 'buffer';

const languages = [
	{
		names: ['python', 'py'],
		id: 71
	},
	{
		names: ['javascript', 'js'],
		id: 63
	},
	{
		names: ['typescript', 'ts'],
		id: 74
	},
	{
		names: ['java'],
		id: 62
	},
	{
		names: ['go'],
		id: 60
	},
	{
		names: ['c'],
		id: 50
	},
	{
		names: ['cs', 'csharp'],
		id: 51
	},
	{
		names: ['cpp'],
		id: 54
	},
	{
		names: ['rust'],
		id: 73
	},
	{
		names: ['php'],
		id: 68
	},
	{
		names: ['ruby'],
		id: 72
	},
	{
		names: ['swift'],
		id: 83
	},
	{
		names: ['bash'],
		id: 46
	},
	{
		names: ['kotlin'],
		id: 78
	},
	{
		names: ['armasm'],
		id: 45
	}
];

export async function executeCode(code: string, lang: string): Promise<any> {
	// TODO: Add return type of judge0 API

	// Default language is Python
	let languageId = 71;

	const language = languages.find((language) => language.names.includes(lang));
	if (language) {
		languageId = language.id;
	} else {
		throw new Error('Invalid language' + lang);
	}

	const response = await fetch(`/api/judge`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			language_id: languageId,
			source_code: Buffer.from(code).toString('base64')
		})
	});

	const data = await response.json();

	return data;
}
