/* <!-- ..........H O M E ..... S E C T I O N.......... --> */
let sideBarPosition =$(".side-bar").innerWidth();
$(".open").click(function () {
    $(".side-bar").animate({ left: "0px" }, 500)
    $(".layer").animate({ marginLeft: sideBarPosition }, 500)
})

$(".close").click(function () {
    $(".side-bar").animate({ left: -sideBarPosition }, 500)
    $(".layer").animate({ marginLeft: "0px" }, 500)
})

/*  <!-- ..........A B O U T ..... S E C T I O N.......... --> */
$(".about h3").click(function () {
    $(".desc").not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
})

/* <!-- ..........C O U N T E R ..... S E C T I O N.......... --> */
countDownTo("1 january 2024 00:00:00");
function countDownTo(date) {

    let futureDate = new Date(date);
    futureDate = (futureDate.getTime() / 1000);

    let now = new Date();
    now = (now.getTime() / 1000);

    let days = Math.floor((futureDate - now) / (24 * 60 * 60));
    let hours = Math.floor(((futureDate - now) - (days * (24 * 60 * 60))) / 3600);
    let mints = Math.floor(((futureDate - now) - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let sec = Math.floor(((futureDate - now) - (days * (24 * 60 * 60)) - (hours * 3600) - (mints * 60)));

    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".mints").html(`${mints} m`);
    $('.sec').html(`${sec} s`);

    setInterval(function () { countDownTo(date); }, 1000);
}

/* <!-- ..........C O N T A C T ..... S E C T I O N.......... --> */
$("textarea").keyup(function () {
    let length = (100 - $(this).val().length)
    if (length <= 0) {
        $("#chars").text("your available character finished")
        $(".char-ream").css("display", "none")
    } else {
        $("#chars").text(length)
        $(".char-ream").css("display", "inline-block")
    }

})