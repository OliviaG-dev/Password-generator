const datalowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = datalowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$*ù^%:;/.,?&#~{[|`\"^@]}=+°£¤µ!éè()";
const rangeValue = document.getElementById('password-length');
const passwordOuput =document.getElementById('password-output');

function generatePassword() {
    let data = [];
    let password = "";

    if (lowercase.checked) data.push(...datalowercase);
    if (uppercase.checked) data.push(...dataUppercase);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbols);

    if (data.length === 0) {
        alert("Veuillez sélectionner des critère");
        return;
    }
    
    for (i = 0; i< rangeValue.value; i++) {
        password += data[Math.floor(Math.random() * data.length)];
    }

    passwordOuput.value = password;

    passwordOuput.select();
    document.execCommand("copy");

    generateButton.textContent = "Copy !";

    setTimeout(() => {
        generateButton.textContent = "Password generator";
    }, 2000)
}

generateButton.addEventListener("click", generatePassword);