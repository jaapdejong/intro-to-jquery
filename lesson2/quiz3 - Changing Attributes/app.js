/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

// Start with this variable!
var navList;

navList = $(".nav-list");
var active = $(".active");
var prev = active.prev();
var link = prev.find("a");
link.attr("href", "#1");

