import Md2bb from "md2bb";
const md2bb = new Md2bb();

document.addEventListener("DOMContentLoaded", () => {
    const defaultText = `
# Hello World!

*This* is a _demo text_ for **md2bb**!

> It should work fine! ~maybe!~

~~If it doesn't work, please report it in an [issue](https://github.com/eai04191/md2bb-web/issues)!~~

- list
- items

1. ordered
2. list
3. items

>[Eai] I hope it helps you!


\`
Have a
    nice day!
\`
    `.trim();

    const md = document.getElementById("markdown") as HTMLTextAreaElement;
    md.value = defaultText;
});

document.querySelector("#convert").addEventListener("click", () => {
    const md = document.getElementById("markdown") as HTMLTextAreaElement;
    const bb = document.getElementById("bbcode") as HTMLTextAreaElement;

    let result = md2bb.parse(md.value);
    console.log(result);
    // ulist fix
    result = result.replace(/\[ulist\]\n/g, "[list]\n");
    result = result.replace(/\[\/ulist\]\n/g, "[/list]\n");

    bb.value = result;
});
