// this displays the time at the top of the calendar with moment.js
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

$(document).ready(function(){
    // listen for button clicks
    $(".save-btn").on("click", function(){
       
        // get value of <textarea> and assign it to variable
        var task = $(this).siblings(".text").val();
        console.log(task);
        // get value of time in time block and assign to variable .parent
        var time = $(this).parent().attr("id");
        console.log(time);

        // save value into localStorage.setItem
        localStorage.setItem(time, task);

    })

    var blockColor = function() {
        var blockTime = moment().hour()
        // console.log(blockTime);

        $(".block").each(function() {
            var currBlockTime = parseInt($(this).attr("id"));
            // console.log(currBlockTime);

            if (currBlockTime > blockTime) {
                $(this).addClass("future");
            } else if (currBlockTime === blockTime) {
                $(this).addClass("present");
            } else { 
                $(this).addClass("past");

        }
    })
};

/*var refreshPage = function() {

    $(".text").each(function() {

            var currHour = $(this).text();
            var currPlan = localStorage.getItem(currHour);
    
             console.log(this);
            console.log(currHour);
    
            if(currPlan !== null) {
                $(this).siblings(".text").val(currPlan);
        }

    });

}*/

$("#9 .text").val(localStorage.getItem("9"));
$("#10 .text").val(localStorage.getItem("10"));
$("#11 .text").val(localStorage.getItem("11"));
$("#12 .text").val(localStorage.getItem("12"));
$("#13 .text").val(localStorage.getItem("13"));
$("#14 .text").val(localStorage.getItem("14"));
$("#15 .text").val(localStorage.getItem("15"));
$("#16 .text").val(localStorage.getItem("16"));
$("#17 .text").val(localStorage.getItem("17"));

blockColor();
refreshPage();


})





    // immediate function to check for localStorage

    // a selector for each time block


