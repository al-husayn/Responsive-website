
function FirmTechReg() {
    var name =
        document.forms["RegForm"]["Name"];
    var email =
        document.forms["RegForm"]["EMail"];
    var phone =
        document.forms["RegForm"]["Telephone"];
    var what =
        document.forms["RegForm"]["Subject"];
    var password =
        document.forms["RegForm"]["Password"];
    var address =
        document.forms["RegForm"]["Address"];

    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }

    if (address.value == "") {
        window.alert("Please enter your address.");
        address.focus();
        return false;
    }

    if (email.value != /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) {
        window.alert(
            "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (phone.value != /^\d{10}$/) {
        window.alert(
            "Please enter a valid phone number.");
        phone.focus();
        return false;
    }

    if (password.value != /^[A-Za-z]\w{7,14}$/) {
        window.alert("Please your password is incorrect. Try again");
        password.focus();
        return false;
    }

    if (what.selectedIndex < 1) {
        alert("Please enter your course.");
        what.focus();
        return false;
    }

    return true;
}
