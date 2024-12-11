const copyBtn = document.querySelector('#btn-copy');
const deleteBtn = document.querySelector('#btn-delete');
const saveBtn = document.querySelector('#btn-save');
const spaceBtn = document.querySelector('#btn-space');
const smallBtn = document.querySelector('#btn-small');
const bigBtn = document.querySelector('#btn-big');

const textArea = document.querySelector('#text-area');

const alertBox = document.querySelector('.alert-message-box');
const alertBoxMessage = document.querySelector('.alert-message');
const alertClose = document.querySelector('.alert-message-close');

const btn = document.querySelectorAll('.letter-btn');

// on click make text Area Big
bigBtn.addEventListener('click', bigSize);
smallBtn.addEventListener('click', smallSize);
deleteBtn.addEventListener('click', clearText);
copyBtn.addEventListener('click', copyText);
spaceBtn.addEventListener('click', addSpace);
saveBtn.addEventListener('click', saveToFile);

btn.forEach(function (button) {
    button.addEventListener('click', btnClick);
});

alertClose.addEventListener('click', hideAlertBox);

// function toggle textArea size
function bigSize() {
    textArea.classList.add('h-80');
    textArea.classList.remove('h-40');
}
function smallSize() {
    textArea.classList.remove('h-80');
    textArea.classList.add('h-40');
}
function showAlert(text, color) {
    alertBox.classList.remove("bg-blue-400", "bg-red-400", "bg-green-400");
    alertBox.classList.remove('hidden');
    alertBox.classList.add("block", color, "animate__animated", "animate__fadeInDown");
    alertBoxMessage.innerHTML = text;
    setTimeout(function () {
        alertBox.classList.remove("animate__fadeInDown");
        alertBox.classList.add("animate__backOutRight");

        // Hide the alert after the fade out animation completes
        setTimeout(function () {
            alertBox.classList.remove("block");
            alertBox.classList.add("hidden");
            alertBox.classList.remove("animate__fadeOutUp");
        }, 1000); // Wait for the fade-out animation to finish (1000ms)
    }, 1000); // Hide after 3 seconds
}
function clearText() {
    textArea.value = "";
    showAlert('Text cleared successfully', 'bg-blue-400');
}
function copyText() {
    textArea.select();
    textArea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    if (textArea.value.trim() !== "") {
        showAlert('Text copied successfully', 'bg-blue-400');
    } else {
        showAlert('No text to copy', 'bg-red-400');
    }
}
function addSpace() {
    textArea.focus();
    textArea.value += " ";
}
function saveToFile() {
    var text = textArea.value;
    if (text.trim() !== "") {
        // Create a Blob from the text data
        var blob = new Blob([text], { type: "text/plain;charset=utf-8" });

        // Create a temporary link element
        var link = document.createElement("a");

        // Create an object URL for the Blob
        var url = URL.createObjectURL(blob);

        // Set the download attribute with a filename
        link.href = url;
        link.download = "textfile.txt"; // The file name for download

        // Append the link to the document, trigger the download, and then remove it
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Release the object URL after the download is triggered
        URL.revokeObjectURL(url);
        showAlert('Text Downloaded Successfully', 'bg-green-400');
    } else {
        showAlert('No text to download', 'bg-red-400');
    }
}
function hideAlertBox() {
    alertBox.classList.add('hidden');
}

function btnClick(event) {
    textArea.focus();
    var clickedButton = event.target;
    textArea.value += clickedButton.textContent;
}

// Function to replace text with combination handling
function replaceText(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        if (i < text.length - 1) {
            const combination = translateLetterMapping(text[i], text[i + 1]);
            if (combination !== text[i]) {
                result += combination;
                i++;  // Skip next character since it's part of the combination
                continue;
            }
        }
        result += translateLetterMapping(text[i]);
    }
    return result;
}
// Translate letters and handle combinations
function translateLetterMapping(letter) {
    
    // Handle individual characters
    switch (letter) {
        case 'a':
            return 'ا';
        case 'b':
            return 'ب';
        case 'c':
            return 'چ';
        case 'd':
            return 'د';
        case 'e':
        case 'i':
        case 'y':
            return 'ي';
        case 'f':
            return 'ف';
        case 'g':
            return 'ع';
        case 'h':
            return 'ه';
        case 'j':
            return 'ج';
        case 'k':
            return 'ك';
        case 'l':
            return 'ل';
        case 'm':
            return 'م';
        case 'n':
            return 'ن';
        case 'o':
        case 'u':
        case 'w':
            return 'و';
        case 'p':
            return 'پ';
        case 'q':
            return 'ق';
        case 'r':
            return 'ر';
        case 's':
            return 'س';
        case 't':
            return 'ت';
        case 'v':
            return 'ڢ';
        case 'x':
        case 'K':
            return 'خ';
        case 'z':
            return 'ز';

        case 'A':
            return 'إ';
        case 'D':
            return 'ض';
        case 'E':
        case 'I':
        case 'Y':
            return 'ى';
        case 'H':
            return 'ح';
        case 'S':
            return 'ص';
        case 'T':
            return 'ط';
        case 'Z':
            return 'ظ';
        default:
            return letter;  // Return the letter if no combination is found
    }
}

textArea.addEventListener('input', translateLetter);

function translateLetter(event) {
    const cursorPosition = textArea.selectionStart;
    let text = textArea.value;
        // Replace the text using the replaceText function
        text = replaceText(text);
        // Set the modified text back to the textarea
        textArea.value = text;
    // Restore the cursor position
    textArea.setSelectionRange(cursorPosition, cursorPosition);
}


