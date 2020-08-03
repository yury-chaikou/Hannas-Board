$(document).ready(function () {
    let year = new Date().getFullYear();
    if (year ===2020){
        $("#current_year").append('2020 - ');
    }else {
    $("#current_year").append('2020 - '+  year);}
});
