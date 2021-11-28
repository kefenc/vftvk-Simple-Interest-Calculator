function compute() {
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    simple = 1 + (r * y) / 100
    results = p * simple - p
    date = new Date()
    future = parseInt(date.getFullYear()) + parseInt(y)
    document.getElementById("result").innerHTML = " If you deposit " + p + ",<br> at an interest rate of " + r + " % .<br> You will receive an amount of " + results + ",<br> in the year " + future + " "
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