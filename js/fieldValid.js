var password;
var mail;

function getFieldVal() {
   password = document.getElementById("passwod").value;
   mail = document.getElementById("mail").value; 
}

function check() {
    getFieldVal();
    checkPassword();
    checkMail();
}

function checkPassword() {
    document.getElementById("errorPasMes").innerHTML = "";
    if(!hasNumber(password)) {
        document.getElementById("errorPasMes").innerHTML = "Пароль должен содержать мере хотя бы одну цыфру";
        document.getElementById('errorPasMes').style.display;
    } else if (!passwordLengthInRange(password)){
        document.getElementById("errorPasMes").innerHTML = "Длина пароля от 8 до 20 мимволов";
        document.getElementById('errorPasMes').style.display;
    } else if (!hasLoverCaseLetter(password)) {
        document.getElementById("errorPasMes").innerHTML = "Пароль должен содержать хотя бы одну букву в нижнем регистре";
        document.getElementById('errorPasMes').style.display;
    } else if (!hasUpperCaseLetter(password)) {
        document.getElementById("errorPasMes").innerHTML = "Пароль должен содержать хотя бы одну букву в вверхнем регистре";
        document.getElementById('errorPasMes').style.display;
    }  
}

function hasNumber(line) {
    return /\d/.test(line);
}

function hasLoverCaseLetter(line) {
    return  /[a-zа-я]/.test(line);
}

function hasUpperCaseLetter(line) {
    return  /[A-ZА-Я]/.test(line);
}

function passwordLengthInRange(line) {
    var pasLengthMax = 20;
    var pasLengthMin = 8;
    return line.length >= pasLengthMin && line.length <= pasLengthMax;
}

function checkMail() {
    var mailRexExp = /(?=.*[a-zа-яA-ZА-Я]).{4,20}@.{2,5}[.].*/;
    document.getElementById("errorMail").innerHTML = "";
    if(!mailRexExp.test(mail)) {
        document.getElementById("errorMail").innerHTML = "Проверьте правильность eMail";
        document.getElementById('errorMail').style.display;
    }
}

