import $ from 'jquery';
import '../css/styles.css';
import { Time } from './../js/Time.js';

var uniqueTimes = [];
function GenerateUniqueTimesDisplay(){
  $("#results").text("");
  for(var i = 0; i < uniqueTimes.length; i ++){
    let j = `${i + 1}`
    $("#results").append('<div class="col-md-2 result"><h3> Anonymous User #' + j + '</h3><hr><h5> Age in Seconds: ' + Math.round(uniqueTimes[i].NowToThenDifferenceSeconds()) + ' seconds </h5><h5> Age on Mercury: ' + Math.round(uniqueTimes[i].HumanAgeOnMercury()) + ' years old </h5><h5> Age on Venus:' + Math.round(uniqueTimes[i].HumanAgeOnVenus()) + ' years old</h5><h5> Age on Mars: ' + Math.round(uniqueTimes[i].HumanAgeOnMars())+ ' years old</h5><h5> Age on Jupiter: ' + Math.round(uniqueTimes[i].HumanAgeOnJupiter()) + ' years old</h5><h5>Life Expectancy: ' + Math.round(uniqueTimes[i].SimpleLifeExpectancyGenerator()) + ' more years</h5><h5> Exceeded Life Expectancy? ' + uniqueTimes[i].CheckExceedLifeExpectancy() + '</h5></div>');
  }
}
$(document).ready(function(){
  $("form#newTime").submit(function(event) {
    event.preventDefault();

    let thenDate = $("#born").val();
    let lifeExpect = parseInt($("#lifeExpect").val());

    let newDate = new Date(thenDate);
    let newTimeForUniqueTimes = new Time(newDate, lifeExpect);
    uniqueTimes.push(newTimeForUniqueTimes);
    GenerateUniqueTimesDisplay();
  });
});
