"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Aspen Smith
   Date:   2-3-2020

	
*/

//var created to test script
var thisDay = new Date("August 30, 2018");

// ------
var tableHTML = "<table id='eventTable'> <caption>Upcoming Events</caption> <tr><th>Date</th><th>Event</th><th>Price</th></tr>";

// ------
var endDate = new Date(thisDay.getTime() + 14 * 24 * 60 * 60 * 1000)

//for loop that loops through the length of eventDates array
for (var i = 0; i < eventDates.length; i++) {
   var eventDate = new Date(eventDates[i]);
   var eventDay = eventDate.toDateString();
   var eventTime = eventDate.toLocaleTimeString();
   //stating that if thisDay <= eventDate && eventDate <= endDate, code in if statement will run
   if (thisDay <= eventDate && eventDate <= endDate){
       tableHTML += "<tr> <td>" + eventDay + " @ " + eventTime + "</td> <td>" + eventDescriptions[i] + "</td> <td>" + eventPrices[i] + "</td> </tr>";
   }
}

//adding code to the tablehtml variable
tableHTML += "</table>";

document.getElementById("eventList").innerHTML = tableHTML;
