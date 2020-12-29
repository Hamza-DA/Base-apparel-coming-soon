const err = document.querySelectorAll('.err')
function ValidateEmail(inputText){
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputText.value.match(mailformat)){
        err.forEach((er) => {
            er.style.visibility = 'hidden'
        })
        document.form1.emailadress.focus();
        return true;
    }
    else {
        err.forEach((er) => {
            er.style.visibility = 'visible'
        })
        document.form1.emailadress.focus();
        return false;
    }
}