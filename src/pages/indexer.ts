const urls = import.meta.glob(`../pages/**/**.md`) as
	| { [key: string]: void }
	| Record<string, never>;
export const pages = {} as {
	[key: string]: {
		pages: { [key: string]: void } | Record<string, never>;
		metadata: { [key: string]: string };
	};
};
export const pageToFolder = {} as { [key: string]: string };

(async () => {
	for (const url in urls) {
		const page = url.split('/')[2].split('.')[0];
		const folder = url.split('/')[1];
		const folderMetdata = await import(`../pages/${folder}/metadata.ts`);

		pageToFolder[page] = folder;

		if (!pages[folder]) {
			pages[folder] = { pages: {}, metadata: folderMetdata };
		}

		pages[folder].pages[page] = urls[url];
	}
})();
