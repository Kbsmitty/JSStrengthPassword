function isStrongPassword(p) {
    let cDigit = false;

    for (let i = 0; i < p.length; i++) {
        if(p.charCodeAt(i) >= 48 && p.charCodeAt(i) <= 57) {
            cDigit = true;
            break;
        }
    }

    if (p.length < 8) {
        console.log("No good. Password must be at least 8 charcters long.");
        return false;
    } else if (p.toLowerCase().includes("password")) {
        console.log("No good. Password cannot contain the word 'password'.");
        return false;
    } else if(!cDigit) {
        console.log("No good. password must contain at least one number.");
        return false;
    } else {
        console.log("Good Password!")
        return true;
    }
}

isStrongPassword("qwerty1"); // false - Too short
isStrongPassword("qwertypassword1") // false - Contains "password"
isStrongPassword("qwertyABC") // false - No numbers
isStrongPassword("qwerty123") // true