//Javascript for the mineways header bar
//Ryan Haines 4/4/2014

console.log("hello world");

var openDrawers = new Array();

$(function () {
    //when clicking a menu, expand it
    $('a.drawer').click(function (e) {
        var id = ($(this).attr("id"));
        var opened = false;
        var drawer =  $("a.drawer");
        //console.log(e);

        //close drawer, make it display inline
        if (drawer.hasClass("opened") && drawer.attr(id)!==id) {
            console.log("close other drawers");
            drawer.removeClass("opened");
            drawer.addClass("closed");
        }

        if(openDrawers[id]===id){
            e.preventDefault();
            $("#"+id).removeClass("closed");
            $("#"+id).addClass("opened");
            openDrawers[id]=-1;
            console.log("-1");
        }
        else if ($("#"+id).hasClass("closed") && openDrawers[id]!==id){
            $("#"+id).removeClass("closed");
            $("#"+id).addClass("opened");
            e.preventDefault();
            openDrawers[id]=id;
        }

        console.log("testing redpill");

        //open drawer, make it display inline block, remove open marker from other drawers
        if(openDrawers[id]===-1){
            console.log("brrap");
            window.location = ($(this).attr("href"));
        }       
    });
});
