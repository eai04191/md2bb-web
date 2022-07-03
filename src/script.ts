import Md2bb from "md2bb";
const md2bb = new Md2bb();

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
