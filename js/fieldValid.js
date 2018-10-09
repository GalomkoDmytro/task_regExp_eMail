var password;
var mail;

function getFieldVal() {
   password = document.getElementById("passwod").value;
   mail = document.getElementById("mail").value; 
}

function validate() {
    getFieldVal();
    if(passwordIsValid() && mailIsValid()) {
        window.location.replace("pages/customerPage.html");    
    }
}

function passwordIsValid() {
    document.getElementById("errorPasMes").innerHTML = "";
    if(!hasNumber(password)) {
        document.getElementById("errorPasMes").innerHTML = "Пароль должен содержать мере хотя бы одну цыфру";
        document.getElementById('errorPasMes').style.display;
        return false;
    } else if (!passwordLengthInRange(password)){
        document.getElementById("errorPasMes").innerHTML = "Длина пароля от 8 до 20 мимволов";
        document.getElementById('errorPasMes').style.display;
        return false;
    } else if (!hasLoverCaseLetter(password)) {
        document.getElementById("errorPasMes").innerHTML = "Пароль должен содержать хотя бы одну букву в нижнем регистре";
        document.getElementById('errorPasMes').style.display;
        return false;
    } else if (!hasUpperCaseLetter(password)) {
        document.getElementById("errorPasMes").innerHTML = "Пароль должен содержать хотя бы одну букву в вверхнем регистре";
        document.getElementById('errorPasMes').style.display;
        return false;
    }  
    return true;
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

function mailIsValid() {
    mail = mail.trim();
    var mailRexExp = /(?=.*[a-zа-яA-ZА-Я]).{4,20}@.{2,5}[.].*/;
    document.getElementById("errorMail").innerHTML = "";
    if(!mailRexExp.test(mail)) {
        document.getElementById("errorMail").innerHTML = "Проверьте правильность eMail";
        document.getElementById('errorMail').style.display;
        return false;
    }
    return true;
}

