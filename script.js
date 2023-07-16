// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //display current date
  document.getElementById("currentDay").innerHTML = dayjs().format(
    "dddd[, ] MMMM D[, ] YYYY"
  );

  //target saveButton
  var saveButton9am = $("#hour-9").children().eq(2);
  //
  saveButton9am.on("click", function (event) {
    event.preventDefault();
    var descriptionEl = $(this).prev().val();
    localStorage.setItem("text9", descriptionEl);
    console.log(descriptionEl);
    alert("Input saved!");
  });
  //display info from local storage
  document.getElementById("9amTxt").innerHTML = localStorage.getItem("text9");

  //target saveButton
  var saveButton10am = $("#hour-10").children().eq(2);
  //
  saveButton10am.on("click", function (event) {
    event.preventDefault();
    var descriptionEl = $(this).prev().val();
    localStorage.setItem("text10", descriptionEl);
    console.log(descriptionEl);
    alert("Input saved!");
  });
  //display info from local storage
  document.getElementById("10amTxt").innerHTML = localStorage.getItem("text10");

  //target saveButton
  var saveButton11am = $("#hour-11").children().eq(2);
  //
  saveButton11am.on("click", function (event) {
    event.preventDefault();
    var descriptionEl = $(this).prev().val();
    localStorage.setItem("text11", descriptionEl);
    console.log(descriptionEl);
    alert("Input saved!");
  });
  //display info from local storage
  document.getElementById("11amTxt").innerHTML = localStorage.getItem("text11");

  //target saveButton
  var saveButton12pm = $("#hour-12").children().eq(2);
  //
  saveButton12pm.on("click", function (event) {
    event.preventDefault();
    var descriptionEl = $(this).prev().val();
    localStorage.setItem("text12", descriptionEl);
    console.log(descriptionEl);
    alert("Input saved!");
  });
  //display info from local storage
  document.getElementById("12pmTxt").innerHTML = localStorage.getItem("text12");

  //target saveButton
  var saveButton1pm = $("#hour-1").children().eq(2);
  //
  saveButton1pm.on("click", function (event) {
    event.preventDefault();
    var descriptionEl = $(this).prev().val();
    localStorage.setItem("text1", descriptionEl);
    console.log(descriptionEl);
    alert("Input saved!");
  });
  //display info from local storage
  document.getElementById("1pmTxt").innerHTML = localStorage.getItem("text1");

  //target saveButton
  var saveButton2pm = $("#hour-2").children().eq(2);
  //
  saveButton2pm.on("click", function (event) {
    event.preventDefault();
    var descriptionEl = $(this).prev().val();
    localStorage.setItem("text2", descriptionEl);
    console.log(descriptionEl);
    alert("Input saved!");
  });
  //display info from local storage
  document.getElementById("2pmTxt").innerHTML = localStorage.getItem("text2");

  //target saveButton
  var saveButton3pm = $("#hour-3").children().eq(2);
  //
  saveButton3pm.on("click", function (event) {
    event.preventDefault();
    var descriptionEl = $(this).prev().val();
    localStorage.setItem("text3", descriptionEl);
    console.log(descriptionEl);
    alert("Input saved!");
  });
  //display info from local storage
  document.getElementById("3pmTxt").innerHTML = localStorage.getItem("text3");

  //target saveButton
  var saveButton4pm = $("#hour-4").children().eq(2);
  //
  saveButton4pm.on("click", function (event) {
    event.preventDefault();
    var descriptionEl = $(this).prev().val();
    localStorage.setItem("text4", descriptionEl);
    console.log(descriptionEl);
    alert("Input saved!");
  });
  //display info from local storage
  document.getElementById("4pmTxt").innerHTML = localStorage.getItem("text4");

  //target saveButton
  var saveButton5pm = $("#hour-5").children().eq(2);
  //
  saveButton5pm.on("click", function (event) {
    event.preventDefault();
    var descriptionEl = $(this).prev().val();
    localStorage.setItem("text5", descriptionEl);
    console.log(descriptionEl);
    alert("Input saved!");
  });
  //display info from local storage
  document.getElementById("5pmTxt").innerHTML = localStorage.getItem("text5");
}); 
