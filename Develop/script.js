// this displays the time at the top of the calendar with moment.js
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

$(document).ready(function(){
    // listen for button clicks
    $(".save-btn").on("click", function(){
       
        // get value of <textarea> and assign it to variable
        var task = $(this).siblings(".text").val();
        console.log(task);
        // get value of time in timeblock and assign to variable .parent
        var time = $(this).parent().attr("id");
        console.log(time);

        // save value into localStorage.setItem
        localStorage.setItem(time, task);
    })
    // immediate function to check for localStorage

    // a selector for each time block
})


