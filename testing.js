function display() {
    if(document.getElementById('GFG').checked) {
        console.log(document.getElementById("GFG").value)
        document.getElementById("disp").innerHTML
            = document.getElementById("GFG").value
            + " radio button checked";
    }
    else if(document.getElementById('HTML').checked) {
        console.log(document.getElementById("HTML").value)
        document.getElementById("disp").innerHTML
            = document.getElementById("HTML").value
            + " radio button checked"; 
    }
    else if(document.getElementById('JS').checked) {
        console.log(document.getElementById("JS").value)
        document.getElementById("disp").innerHTML
            = document.getElementById("JS").value
            + " radio button checked"; 
    }
    else {
        document.getElementById("disp").innerHTML
            = "No one selected";
    }
}