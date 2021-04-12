let textArea = document.getElementById("textArea");

function updateLineNo(node, lineNo) {
    var nextSibling = node.nextElementSibling;
    while (nextSibling) {
        nextSibling.setAttribute('line-no', lineNo)
        nextSibling.children[0].innerText = lineNo;

        lineNo++;
        nextSibling = nextSibling.nextElementSibling;
    }
}

function addNewLine(lineNo = 1, referenceNode = null) {
    let newDiv = document.createElement("div");
    let number = document.createElement("span");
    let text = document.createElement("span");

    newDiv.classList.add("editorLines");


    newDiv.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            // Prevent default newline /n
            event.preventDefault();
        }
    });

    newDiv.addEventListener("keyup", function (event) {
        // Enter
        if (event.key === "Enter") {
            let lineNo = parseInt(this.getAttribute('line-No'));
            addNewLine(lineNo + 1, this.nextElementSibling);
            if (this.nextElementSibling) {
                lineNo++;
                updateLineNo(this, lineNo);
            }
            this.nextElementSibling.children[1].focus();
        }
        // Backspace
        else if (event.key === "Backspace") {
            if (!this.children[1].innerText) {
                if (this.previousElementSibling) {
                    let lineNo = parseInt(this.getAttribute('line-No'));
                    this.previousElementSibling.children[1].focus();

                    updateLineNo(this, lineNo);
                    this.remove();
                }
            }
        }
    });

    newDiv.setAttribute("line-no", lineNo);
    number.innerText = lineNo;
    number.classList.add("nambah");
    text.classList.add("editables");
    text.setAttribute("contenteditable", "true");
    newDiv.append(number);
    newDiv.append(text);
    textArea.insertBefore(newDiv, referenceNode);
    textArea.append(newDiv);
}
addNewLine();