import Md2bb from "md2bb";
const md2bb = new Md2bb();

document.querySelector("#convert").addEventListener("click", () => {
    const md = document.getElementById("markdown") as HTMLTextAreaElement;
    const bb = document.getElementById("bbcode") as HTMLTextAreaElement;
    bb.value = md2bb.parse(md.value);
});
