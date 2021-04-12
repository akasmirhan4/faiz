let textArea = document.getElementById("textArea");
for(let i = 0; i<100;i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("editorLines");
  let number = document.createElement("span");
  number.innerText = i;
  number.classList.add("nambah");
  let text = document.createElement("span");
  text.classList.add("editables");
  text.setAttribute("contenteditable", "true");
  newDiv.append(number);
  newDiv.append(text);
  textArea.append(newDiv);
}