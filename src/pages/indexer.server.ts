const urls = import.meta.glob(`../pages/**/**.md`) as { [key: string]: void } | Record<string, never>;
export const pages = {} as { [key: string]: void };

console.log(pages);

for (const url in urls) {

    const final = url.substring(url.lastIndexOf('/') + 1).replace(/\.[^/.]+$/, "");
    pages[final] = urls[url];

}