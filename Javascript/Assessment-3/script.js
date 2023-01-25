let onSubmit = document.querySelector('.form__button');
let form = document.querySelector('.form');
let copyPassword = document.querySelector('.password-copy');

onSubmit.addEventListener('click', generatePassword)


function generatePassword() {
    
    let length = parseInt(document.querySelector('.form__length').value);
    let uppercase = document.querySelector('.form__uppercase').checked;
    let specialChar = document.querySelector('.form__specialchar').checked;
    let generatedPassword = document.querySelector('.form__generated__password');
    let numbers = document.querySelector('.form__numbers').checked;

    let smallChar = "abcdefghijklmnopqrstuvwxyz";
    let upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let nums = "0123456789";
    let symbols = "!@#%^&*_+-=?";
    let password = "";

    for (let i=0; i<length; i++) {
        let randomSmallChar = Math.floor(Math.random() * smallChar.length);
        password += smallChar.substring(randomSmallChar, randomSmallChar+1);
        password.length++;
        
        if (uppercase) {
            let randomUpChar = Math.floor(Math.random() * upChar.length);
            password += upChar.substring(randomUpChar, randomUpChar + 1);
            password.length+=1;

            console.log(password.length, length)
            if (password.length == length) {
                generatedPassword.innerText = password;
                return password
            }
        }

        if (numbers) {
            let randomNum = Math.floor(Math.random() * nums.length);
            password += nums.substring(randomNum, randomNum + 1);
            password.length+=1;

            if (password.length == length) {
                generatedPassword.innerText = password;
                return password
            }
        }

        if(specialChar) {
            let randomSymbol = Math.floor(Math.random() * symbols.length);
            password += symbols.substring(randomSymbol, randomSymbol + 1);
            password.length+=1;

            if (password.length == length) {
                generatedPassword.innerText = password;
                return password
            }
        }


    }
    generatedPassword.innerText = password;
    return password
}


// copyPassword.addEventListener('click', copyPassword)
// function copyPassword() {
//     navigator.clipboard.writeText(generatedPassword);
// }
