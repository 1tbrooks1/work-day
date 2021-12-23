$(document).ready(function(){
    // listen for button clicks
    $(".save-btn").on("click", function(){
       
        // get value of <textarea> and assign it to variable
        var task = $(this).siblings(".text").val();
        console.log(task);
        // get value of time in timeblock and assign to variable .parent
        var tim = $(this).parent().attr("id");
        console.log(tim);

        // save value into localStorage.setItem
    })
    // immediate function to check for localStorage

    // a selector for each time block
})


