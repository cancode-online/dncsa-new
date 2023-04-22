import { metadataImports, pageImports, pages, folderMetadata } from '$stores/pages';
import { get } from 'svelte/store';

export const getPages = async () => {

    let _pages = {};

    if (get(pages) === null) {
    
        for (const page in pageImports) {
    
            const folder = page.split('/')[3];
            const pageName = page.split('/')[4].split('.')[0];
    
            _pages[pageName] = {
                import: pageImports[page],
                folder: folder
            };
    
        }

        pages.set(_pages);
 
    } else {
        _pages = get(pages);
    }

    return _pages

}

export const getFolderMetadata = async () => {

    let _folderMetadata = {};

    if (get(folderMetadata) === null) {

        for (const metadata in metadataImports) {

            const folder = metadata.split('/')[3];
            _folderMetadata[folder] = await metadataImports[metadata]();
    
        }

        folderMetadata.set(_folderMetadata);

 
    } else {

        _folderMetadata = get(folderMetadata);

    }

    return _folderMetadata

}