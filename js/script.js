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

btn.forEach(function(button) {
    button.addEventListener('click', btnClick);
});


alertClose.addEventListener('click', hideAlertBox);

// function toggle textArea size
function bigSize(){
    textArea.classList.add('h-80');
    textArea.classList.remove('h-40');
}
function smallSize(){
    textArea.classList.remove('h-80');
    textArea.classList.add('h-40');
}
function showAlert(text, color){
    alertBox.classList.remove("bg-blue-400", "bg-red-400", "bg-green-400");
    alertBox.classList.remove('hidden');
    alertBox.classList.add("block" , color, "animate__animated" ,"animate__fadeInDown");
    alertBoxMessage.innerHTML = text;
    setTimeout(function() {
        alertBox.classList.remove("animate__fadeInDown");
        alertBox.classList.add("animate__backOutRight");
        
        // Hide the alert after the fade out animation completes
        setTimeout(function() {
          alertBox.classList.remove("block");
          alertBox.classList.add("hidden");
          alertBox.classList.remove("animate__fadeOutUp");
        }, 1000); // Wait for the fade-out animation to finish (1000ms)
      }, 1000); // Hide after 3 seconds
}
function clearText(){
    textArea.value = "";
    showAlert('Text cleared successefully', 'bg-blue-400');
}
function copyText(){
  textArea.select();
  textArea.setSelectionRange(0, 99999);
  document.execCommand('copy');
  if(textArea.value.trim() !== "" ){
    showAlert('Text copied successefully', 'bg-blue-400');
    }else{
      showAlert('No text to copy', 'bg-red-400');
  }

}
function addSpace(){
    textArea.focus();
    textArea.value += " ";
}
function saveToFile() {
    var text = textArea.value;
    if(text.trim()!== ""){
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
        showAlert('Text Downladed Successefully', 'bg-green-400');

    }else{
        showAlert('No text to download', 'bg-red-400');
      
    }
}
function hideAlertBox(){
    alertBox.classList.add('hidden');
}

function btnClick(event) {
    textArea.focus();
    var clickedButton = event.target;
    textArea.value += clickedButton.textContent;

}

// function keyboardKey(event){
//         const keyPressed = event.key; // This will give you the actual character or key
//         console.log("Key pressed: ", keyPressed);
//         switch(keyPressed){
//             case "a" :
//                 textArea.value += "ا";
//             break;     
//         }

// }

textArea.addEventListener('input',translateLetter );

function translateLetter(event) {
    const cursorPosition = textArea.selectionStart;  
    let text = textArea.value;
    // Replace letters using a switch statement
    text = text.replace(/a/g, (match) => translateLetterMapping(match));
    text = text.replace(/b/g, (match) => translateLetterMapping(match));
    text = text.replace(/c/g, (match) => translateLetterMapping(match));
    text = text.replace(/d/g, (match) => translateLetterMapping(match));
    text = text.replace(/e/g, (match) => translateLetterMapping(match));
    text = text.replace(/f/g, (match) => translateLetterMapping(match));
    text = text.replace(/g/g, (match) => translateLetterMapping(match));
    text = text.replace(/h/g, (match) => translateLetterMapping(match));
    text = text.replace(/i/g, (match) => translateLetterMapping(match));
    text = text.replace(/j/g, (match) => translateLetterMapping(match));
    text = text.replace(/k/g, (match) => translateLetterMapping(match));
    text = text.replace(/l/g, (match) => translateLetterMapping(match));
    text = text.replace(/m/g, (match) => translateLetterMapping(match));
    text = text.replace(/n/g, (match) => translateLetterMapping(match));
    text = text.replace(/o/g, (match) => translateLetterMapping(match));
    text = text.replace(/p/g, (match) => translateLetterMapping(match));
    text = text.replace(/q/g, (match) => translateLetterMapping(match));
    text = text.replace(/r/g, (match) => translateLetterMapping(match));
    text = text.replace(/s/g, (match) => translateLetterMapping(match));
    text = text.replace(/t/g, (match) => translateLetterMapping(match));
    text = text.replace(/u/g, (match) => translateLetterMapping(match));
    text = text.replace(/v/g, (match) => translateLetterMapping(match));
    text = text.replace(/w/g, (match) => translateLetterMapping(match));
    text = text.replace(/x/g, (match) => translateLetterMapping(match));
    text = text.replace(/y/g, (match) => translateLetterMapping(match));
    text = text.replace(/z/g, (match) => translateLetterMapping(match));
    
    // Maj
    text = text.replace(/A/g, (match) => translateLetterMapping(match));
    text = text.replace(/B/g, (match) => translateLetterMapping(match));
    text = text.replace(/C/g, (match) => translateLetterMapping(match));
    text = text.replace(/D/g, (match) => translateLetterMapping(match));
    text = text.replace(/E/g, (match) => translateLetterMapping(match));
    text = text.replace(/F/g, (match) => translateLetterMapping(match));
    text = text.replace(/G/g, (match) => translateLetterMapping(match));
    text = text.replace(/H/g, (match) => translateLetterMapping(match));
    text = text.replace(/I/g, (match) => translateLetterMapping(match));
    text = text.replace(/J/g, (match) => translateLetterMapping(match));
    text = text.replace(/K/g, (match) => translateLetterMapping(match));
    text = text.replace(/L/g, (match) => translateLetterMapping(match));
    text = text.replace(/M/g, (match) => translateLetterMapping(match));
    text = text.replace(/N/g, (match) => translateLetterMapping(match));
    text = text.replace(/O/g, (match) => translateLetterMapping(match));
    text = text.replace(/P/g, (match) => translateLetterMapping(match));
    text = text.replace(/Q/g, (match) => translateLetterMapping(match));
    text = text.replace(/R/g, (match) => translateLetterMapping(match));
    text = text.replace(/S/g, (match) => translateLetterMapping(match));
    text = text.replace(/T/g, (match) => translateLetterMapping(match));
    text = text.replace(/U/g, (match) => translateLetterMapping(match));
    text = text.replace(/V/g, (match) => translateLetterMapping(match));
    text = text.replace(/W/g, (match) => translateLetterMapping(match));
    text = text.replace(/X/g, (match) => translateLetterMapping(match));
    text = text.replace(/Y/g, (match) => translateLetterMapping(match));
    text = text.replace(/Z/g, (match) => translateLetterMapping(match));
    


    textArea.value = text;
    textArea.setSelectionRange(cursorPosition, cursorPosition);
}

function translateLetterMapping(letter) {
    switch (letter) {
        case 'a':
            return 'ا';
        case 'b':
            return 'ب';
        case 'c':
            return 'چ';
        case 'd':
            return 'د';
        case 'e' :
        case 'i' :
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
        
        // Add more cases as needed for other letters
        default:
            return letter;  // If no mapping is found, return the original letter
    }
}