let slider=document.querySelector('.slider');

let lengthDisplay=document.querySelector('[lengthDisplay]');


function handleSlider(){
    slider.value=passWordLength;
    lengthDisplay.innerText=passWordLength;
    
}

let passWordLength='10';
handleSlider();

slider.addEventListener('input',function(event){
    passWordLength=event.target.value;
    handleSlider();
    console.log(passWordLength);
    
})


// Generate Random Letters and Number and Symbols
const symbol = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Random Lowercase Letter 
function generateRandomLowercase() {
    return String.fromCharCode(generateRandom(97, 123));
}

// Random Lowercase Letter 
function generateRandomUppercase() {
    return String.fromCharCode(generateRandom(65, 91));
}

// Random Number 
function generateRandomNumber() {
    return generateRandom(1, 10);
}

// Generate Symbol 
function generateRandomSymbol() {
    let index = generateRandom(0, symbol.length);
    return symbol[index];
}

const uppercase = document.querySelector('#uppercase');
const lowercase = document.querySelector('#lowercase');
const numbers = document.querySelector('#numbers');
const symbols = document.querySelector('#symbols');


let indicator = document.querySelector('.indicator');

// Set Indicator 
function setIndicator(color) {
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0 0 12px 1px ${color}`;
}

// Default Indicator 
setIndicator("#ccc");


function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;

    if (uppercase.checked) hasUpper = true;
    if (lowercase.checked) hasLower = true;
    if (numbers.checked) hasNumber = true;
    if (symbols.checked) hasSymbol = true;

    if (hasUpper && hasLower && (hasNumber || hasSymbol) && passWordLength >= 8) {
        setIndicator("#0f0");
    } else if (
        (hasLower || hasUpper) &&
        (hasNumber || hasSymbol) &&
        passWordLength >= 6
    ) {
        setIndicator("#ff0");
    } else {
        setIndicator("#f00");
    }
}


let passwordDisplay = document.querySelector("input[passwordDisplay]");
// shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle.
// Shuffle the array randomly - Fisher Yates Method
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

//password generate

let checkBoxes=document.querySelectorAll('input[type=checkbox]');
let checkCount=0;

function handleChechBoxchange(){
    checkCount=0;
    checkBoxes.forEach((chechbox)=>{

        if(chechbox.checked){
            checkCount++;
        }

        // calcStrength();


    });
    //special condition
      
    if(passWordLength < checkCount){
        passWordLength=checkCount;
        handleSlider();
    }
}

checkBoxes.forEach((chechbox)=>{
    chechbox.addEventListener('change',handleChechBoxchange);
});

let password='';
let generateBtn = document.querySelector("#generatebtn");

generateBtn.addEventListener('click',()=>{
    if(checkCount<=0){
        return;
    }
    if (passWordLength < checkCount) {
        passWordLength = checkCount;
        handleSlider();
    }
    // Remove Previous Password 
    password = "";

    let arrayOfCheckedFunction = [];

    if (uppercase.checked) arrayOfCheckedFunction.push(generateRandomUppercase);
    if (lowercase.checked) arrayOfCheckedFunction.push(generateRandomLowercase);
    if (numbers.checked) arrayOfCheckedFunction.push(generateRandomNumber);
    if (symbols.checked) arrayOfCheckedFunction.push(generateRandomSymbol);

    // Compulsory Addition
    for (let i = 0; i < arrayOfCheckedFunction.length; i++) {
        password += arrayOfCheckedFunction[i]();
    }
    // console.log(password)

    for(let i=0;i<passWordLength-arrayOfCheckedFunction.length;i++){
        let randIndex = generateRandom(0, arrayOfCheckedFunction.length);
        password += arrayOfCheckedFunction[randIndex]();
    }
    //  console.log(password)

    password = shuffle(Array.from(password));
    passwordDisplay.value = password;

    calcStrength();


});



// Copy Message 
let copyMessage = document.querySelector("[copyMessage]");
let copyBtn = document.querySelector(".copyBtn");
// passwordDisplay.value = "My Name is Priyansh";

// Why we use it - https://stackoverflow.com/questions/45071353/copy-text-string-on-click#:~:text=15-,Use%20the%20Clipboard,-API!
async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);

        copyMessage.innerText = "Copied"
        copyMessage.style.color="white";
    }
    catch (e) {
        // alert("Something went wrong in CopyContent");
        copyMessage.innerText = "Failed";
    }

    copyMessage.classList.add('active');

    setTimeout(() => {
        copyMessage.classList.remove('active');
        copyMessage.innerText='';
        console.log("remove")
    }, 2000)
}

copyBtn.addEventListener("click", () => {
    if (passwordDisplay.value)
        copyContent();
});