function compute() {
    p = document.getElementById("principal").value;
    if (p.length == 0) {
        alert("Please input a positive number");
        document.getElementById("principal").focus();
        return
    }
    if (p == 0) {
        alert("Please input a number greater than 0");
        document.getElementById("principal").focus();
        return
    }
    if (p < 0) {
        alert("Please input a positive number");
        document.getElementById("principal").focus();
        return
    }
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    simple = 1 + (r * y) / 100
    results = p * simple - p
    date = new Date()
    future = parseInt(date.getFullYear()) + parseInt(y)
    document.getElementById("result").innerHTML = " If you deposit <mark>" + p + "</mark>,<br> at an interest rate of <mark>" + r + "%</mark> .<br> You will receive an amount of <mark>" + results + "</mark>,<br> in the year <mark>" + future + "</mark> "
}

function slide() {
    var slider = document.getElementById("rate");
    var output = document.getElementById("slider");
    output.innerHTML = slider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        output.innerHTML = this.value + "%"
    }
}