function reg_page() {

    var returnval = true;

    var user = document.forms['Reg_Page']["user"].value;
    var pass = document.forms['Reg_Page']["pass"].value;
    var mail = document.forms['Reg_Page']["email"].value;
    var phone = document.forms['Reg_Page']["phone"].value;
    var rpass = document.forms['Reg_Page']["rpass"].value;

    if (user.length < 5 || user.length > 15) {
        alert("USERNAME IS TOO SHORT OR TOO LONG (MIN LENGTH SHOULD BE 5 AND MAXIMUM IS 15)");
        returnval = false;
    }
        
    if (mail.length > 20 || mail.length < 10) {
        alert("EMAIL IS TOO SHORT OR TOO LONG (MAXIMUM EMAIL LENGTH ALLOWED IS OF 20 LETTERS)");
        returnval = false;
    }
        
    if (phone.length > 10 || phone.length < 9) {
        alert("LENGTH OF YOUR PHONE NUMBER IS INCORRECT");
        returnval = false;
    }

    if (pass.length < 5 || pass.length > 15) {
        alert("PASSWORD IS TOO SHORT OR TOO LONG (PASSWORD LENGTH SHOULD BE BETWEEN 5 TO 15 CHARACTERS)");
        returnval = false;
    }
        
    if (pass != rpass) {
        alert("PASSWORD DOES NOT MATCH WITH RE-ENTERED PASSWORD");
        returnval = false;
    }
        
    else {
        alert("YOU HAVE BEEN REGISTERED SUCCESSFULY CLICK ON OK BUTTON TO LOGIN");
    }
        

    return returnval;
}