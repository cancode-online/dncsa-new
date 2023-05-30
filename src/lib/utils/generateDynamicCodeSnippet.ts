import { v4 as uuidv4 } from 'uuid';
import { executeCode, languages } from './executeCode';

import Prism from 'prismjs';
import 'prismjs/components/prism-c.min.js';
import 'prismjs/components/prism-clike.min.js';
import 'prismjs/components/prism-javascript.min.js';
import 'prismjs/components/prism-markup-templating.min.js';

import 'prismjs/components/prism-python.min.js';
import 'prismjs/components/prism-java.min.js';
import 'prismjs/components/prism-cpp.min.js';
import 'prismjs/components/prism-ruby.min.js';
import 'prismjs/components/prism-rust.min.js';
import 'prismjs/components/prism-go.min.js';
import 'prismjs/components/prism-php.min.js';

async function execute(dynamicCodeSnippet: Element) {
	const ele = dynamicCodeSnippet;

	if (!ele) return;

	const code = ele.getAttribute('codedata')?.toString() || '';
	const lang = ele.getAttribute('lang') || 'python';
	const output = ele.children[2];
	const button = ele.children[1];

	button.innerHTML = "<span class='text-left'>Running...</span>";

	let result = '';
	if (Object.keys(languages).indexOf(lang) === -1) {	
		result = "Invalid language";
	} else {
		const data = await executeCode(code, lang);
		result = data.stdout || data.stderr || 'Compilation Error';

		result = result.replace(/\n/g, '\n> ');
	}

	output.innerHTML = `<span class='text-left'>> ${result}</span>`;
	button.innerHTML = "<span class='text-left'>Re-run code</span>";
}

export function generateDynamicCodeSnippet(dynamicCodeSnippet: Element, code: string, lang: string) {

	dynamicCodeSnippet.setAttribute('codedata', code);

	const id = uuidv4();
	dynamicCodeSnippet.id = id;

	const codeInput = document.createElement('div');
	codeInput.classList.add('dynamic-code-snippet-code', 'p-4', 'bg-neutral', 'rounded-t-lg');
	if (Object.keys(languages).indexOf(lang) === -1) {	
		codeInput.innerHTML = `"${lang}" is not a valid language`
	} else {
		codeInput.innerHTML = Prism.highlight(code, Prism.languages[lang], lang);
	}

	dynamicCodeSnippet.append(codeInput);
	dynamicCodeSnippet.classList.add('relative', 'rounded-lg');

	const executeButton = document.createElement('button');
	executeButton.addEventListener('click', () => execute(dynamicCodeSnippet));
	executeButton.classList.add('btn', 'btn-primary', 'absolute', 'btn-sm', 'right-0', 'bottom-0', 'mx-3', 'my-4');
	executeButton.innerHTML = "<span class='text-left'>Run code</span>";
	dynamicCodeSnippet.append(executeButton);

	const consoleOutput = document.createElement('div');
	consoleOutput.classList.add('w-full', 'h-fit', 'bg-base-300', 'rounded-b-lg', 'p-4');
	consoleOutput.innerHTML = "<span class='text-left'>Ouput will appear here</span>";
	dynamicCodeSnippet.append(consoleOutput);
}
