//Javascript for the mineways header bar
//Ryan Haines 4/4/2014

console.log("hello world");

var openDrawers = new Array();

$(function () {
    //when clicking a menu, expand it
    $('a.drawer').click(function (e) {
        $(this).next("div").toggleClass("closed");      
    });
});
