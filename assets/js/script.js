
var currentDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDate);

var timeNow = moment().hour();
$(document).ready(function () {
$(".saveBtn").on("click",function(){

var text = $(this).siblings(".text_description").val();
var time=$(this).parent().attr('id');
     // Save text in local storage
     localStorage.setItem(time, text);

})
function    momentColor() {
     // loop over time blocks
    $(".timeblock_container").each(function () {
        
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);
       
        // To check the time and add the classes for background indicators
       // get the textarea children and apply the class
        if (blockTime < timeNow) {
            
                        $(this).children('textarea').addClass("past");
                        $(this).children('textarea').removeClass("present");
                        $(this).children('textarea').removeClass("future");
        }
        else if (blockTime === timeNow) {
          
            $(this).children('textarea').addClass("present");
            $(this).children('textarea').removeClass("past");
            $(this).children('textarea').removeClass("future");
        }
        else {
            
            $(this).children('textarea').addClass("future");
            $(this).children('textarea').removeClass("past");
            $(this).children('textarea').removeClass("present");
            

        }
        
    })
}//getting descrption from local storage
    $("#hour8 .text_description").val(localStorage.getItem("hour8"));
    $("#hour9 .text_description").val(localStorage.getItem("hour9"));
    $("#hour10 .text_description").val(localStorage.getItem("hour10"));
    $("#hour11 .text_description").val(localStorage.getItem("hour11"));
    $("#hour12 .text_description").val(localStorage.getItem("hour12"));
    $("#hour13 .text_description").val(localStorage.getItem("hour13"));
    $("#hour14 .text_description").val(localStorage.getItem("hour14"));
    $("#hour15 .text_description").val(localStorage.getItem("hour15"));
    $("#hour16 .text_description").val(localStorage.getItem("hour16"));
    $("#hour17 .text_description").val(localStorage.getItem("hour17"));
    momentColor();
})