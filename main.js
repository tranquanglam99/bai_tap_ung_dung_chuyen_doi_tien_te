var convert = document.getElementById("convert");
convert.addEventListener("click", clickFunction);
function clickFunction() {
    
    var from = document.getElementById("from");
    var to = document.getElementById("to");
    var a = from.options[from.selectedIndex].value;
    var b = to.options[to.selectedIndex].value;
    var amount = document.getElementById("amount").value;

    if (a == "USD") {

        if (b == "USD") {
            document.getElementById("display").value = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + b;
        }
        if (b == "VND") {
            document.getElementById("display").value = (amount*23000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + b;
        }
        if (b == "JPY") {
            document.getElementById("display").value = (amount*109).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + b;
        }
    }

    if (a == "VND") {

        if (b == "USD") {
            document.getElementById("display").value = ((amount/23000).toFixed(3)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + b;
        }
        if (b == "VND") {
            document.getElementById("display").value = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + b;
        }
        if (b == "JPY") {
            document.getElementById("display").value = (amount/200).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + b;
        }
    }

    if (a == "JPY") {

        if (b == "USD") {
            document.getElementById("display").value = ((amount/109).toFixed(3)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + b;
        }
        if (b == "JPY") {
            document.getElementById("display").value = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + b;
        }
        if (b == "VND") {
            document.getElementById("display").value = (amount*200).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + b;
        }
    }
}