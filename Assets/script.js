// global variables
var dayLabel = $("#currentDay");
var saveBtn = $(".saveBtn");

$(function () {
  // local variables
  var currentHour = dayjs().hour();
  var timeBlock = $(".time-block");

  // Apply past, present, or future class to each time block
  timeBlock.each(function () {
    var idValue = $(this).attr("id");
    var blockHour = parseInt(idValue.split("-")[1]); // Extract hour as a number

    if (blockHour < currentHour) {
      $(this).children(".description").removeClass("past present future").addClass("past");
    } else if (blockHour > currentHour) {
      $(this).children(".description").removeClass("past present future").addClass("future");
    } else {
      $(this).children(".description").removeClass("past present future").addClass("present");
    }
  });

  // Add a listener for click events on the save button
  saveBtn.on("click", function () {
    var hour = $(this).parent().attr("id"); // Get parent ID (e.g., "hour-9")
    var description = $(this).siblings(".description").val(); // Get textarea value
    localStorage.setItem(hour, JSON.stringify(description)); // Save to local storage
  });

  // Load saved data from local storage
  for (var i = 9; i <= 17; i++) {
    $(`#hour-${i} .description`).val(JSON.parse(localStorage.getItem(`hour-${i}`)));
  }

  // Display the current date in the header
  dayLabel.text(dayjs().format("ddd, MMM DD YYYY [at] HH:mm"));
});
