// global variables
var dayLabel = $("#currentDay");
var saveBtn = $(".saveBtn");

// Add code to apply the past, present, or future class to each time

$(function () {
  // local variables
  var currentHour = dayjs().hour();
  var timeBlock = $(".time-block");
  timeBlock.each(function () {
    var idValue = $(this).attr("id");
    //  if hour < block id, past color will be applied
    if (idValue < currentHour) {
      $(this)
        .children(".description")
        .attr("class", "col col-md-10 description past");
      // if hour >  block id, Future color will be applied
    } else if (idValue > currentHour) {
      $(this)
        .children(".description")
        .attr("class", "col col-md-10 description future");
      //  if not < or >, present color will be applied
    } else {
      $(this)
        .children(".description")
        .attr("class", "col col-md-10 description present");
    }
  });

  //  Add a listener for click events on the save button.
  saveBtn.on("click", function () {
    // save to local storage
    var description = $(this).siblings(".description").val().replace(hour);
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, JSON.stringify(description));
  });

  // time loop for all time  blocks
  for (var i = 9; i <= 17; i++) {
    $(`#${i} textarea`).val(JSON.parse(localStorage.getItem(`${i}`)));
  }

  // Add code to display the current date in the header of the page.current hour in 24-hour time
  dayLabel.text(dayjs().format("ddd, MMM DD YYYY [at] HH:mm"));
});
