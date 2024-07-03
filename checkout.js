function checkout() {
    var returnval = true;

    var card = document.forms['checkout_form']["card"].value;
    var name = document.forms['checkout_form']["name"].value;
    var cvv = document.forms['checkout_form']["cvv"].value;

    if(card.length>19 || card.length<19) {
        alert("INCORRECT CARD NUMBER ENTERED");
        returnval = false;
    }
        

    if(name.length>30 || card.length<5) {
        alert("INCORRECT CARD HOLDER's NAME");
        returnval = false;
    }
        

    if(cvv.length>3 || cvv.length<3) {
        alert("INCORRECT CVV ENTERED");
        returnval = false;
    }

    else
        alert("PAYMENT SUCCESSFUL");

    return returnval;
}