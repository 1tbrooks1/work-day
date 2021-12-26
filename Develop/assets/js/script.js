// this displays the time at the top of the calendar with moment.js
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

$(document).ready(function(){
    // listen for button click
    $(".save-btn").on("click", function(){
       
        // get value of <textarea> and assign it to variable
        // worked on this section with my tutor
        var task = $(this).siblings(".text").val();
        console.log(task);
        // get value of time in time block and assign to variable .parent
        var time = $(this).parent().attr("id");
        console.log(time);

        // save value into localStorage.setItem
        localStorage.setItem(time, task);
    })

    var blockColor = function() {
        // sets variable for hour
        var blockTime = moment().hour()
        // console.log(blockTime);

        // loops through time blocks
        $(".block").each(function() {
            // turns time block into number to compare it to hour
            var currBlockTime = parseInt($(this).attr("id"));
            // console.log(currBlockTime);

            // sets color of time blocks depending on current time 
            if (currBlockTime > blockTime) {
                $(this).addClass("future");
            } else if (currBlockTime === blockTime) {
                $(this).addClass("present");
            } else { 
                $(this).addClass("past");

        }
    })
};

// grabs item from local storage if there is any present
$(".text").each(function(){
    var inputId = $(this).attr("id");
    $(this).val(localStorage.getItem(inputId));
});

// functions
blockColor();
refreshPage();

})




