$(document).ready(function() {
    $.getJSON("../package.json", function(data) {
    console.log(data);
    $("body").append("Autorem jest: " + data.author);
});
});