let textArea = document.getElementById("textArea");

const NLINES = 500;
for (let i = 1; i <= NLINES; i++) {
    let newDiv = document.createElement("div");
    let number = document.createElement("span");
    let text = document.createElement("span");

    newDiv.classList.add("editorLines");
    newDiv.setAttribute("line-no", i);
    number.innerText = i;
    number.classList.add("nambah");
    text.classList.add("editables");
    text.setAttribute("contenteditable", "true");
    newDiv.append(number);
    newDiv.append(text);
    textArea.append(newDiv);
}