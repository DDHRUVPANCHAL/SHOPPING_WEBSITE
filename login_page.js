function myvalidate() {

    var returnval = true;

    var user = document.forms['Login_Form']["user"].value;
    var pass = document.forms['Login_Form']["pass"].value;
    if (user.length < 5 || user.length > 15) {
        alert("USERNAME IS TOO SHORT OR TOO LONG (MIN LENGTH SHOULD BE 5 AND MAXIMUM IS 15)");
        returnval = false;
    }

    if (pass.length < 5 || pass.length > 15) {
        alert("PASSWORD IS TOO SHORT OR TOO LONG (PASSWORD LENGTH SHOULD BE BETWEEN 5 TO 15 CHARACTERS)");
        returnval = false;
    }
        
    return returnval;
}

