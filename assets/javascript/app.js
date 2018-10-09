window.onbeforeunload = function(){ window.scrollTo(0,0); }

// Wait for window load
var loadPage = function() {
    $(".loader").fadeOut("slow");
    $("#loaderContainer").slideUp("slow");
    $("#all").css("display", "block")
}

setTimeout(loadPage, 3000);

/* Open when someone clicks on the span element */
function openAboutMeSlide() {
    document.getElementById("aboutMeSlide").style.width = "100%";
}
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeAboutMeSlide() {
    document.getElementById("aboutMeSlide").style.width = "0%";
}

function oneTofour() {
    document.getElementById("project1Overlay").style.width = "0%";
    document.getElementById("project4Overlay").style.width = "100%";
}

/* Open when someone clicks on the span element */
function openProject1() {
    document.getElementById("project1Overlay").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeProject1() {
    document.getElementById("project1Overlay").style.width = "0%";
}

function oneTotwo() {
    document.getElementById("project1Overlay").style.width = "0%";
    document.getElementById("project2Overlay").style.width = "100%";
}

function openProject2() {
    document.getElementById("project2Overlay").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeProject2() {
    document.getElementById("project2Overlay").style.width = "0%";
}

function twoTothree() {
    document.getElementById("project2Overlay").style.width = "0%";
    document.getElementById("project3Overlay").style.width = "100%";
}

function twoToone() {
    document.getElementById("project2Overlay").style.width = "0%";
    document.getElementById("project1Overlay").style.width = "100%";
}

function openProject3() {
    document.getElementById("project3Overlay").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeProject3() {
    document.getElementById("project3Overlay").style.width = "0%";
}

function threeTofour() {
    document.getElementById("project3Overlay").style.width = "0%";
    document.getElementById("project4Overlay").style.width = "100%";
}

function threeTotwo() {
    document.getElementById("project3Overlay").style.width = "0%";
    document.getElementById("project2Overlay").style.width = "100%";
}

function openProject4() {
    document.getElementById("project4Overlay").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeProject4() {
    document.getElementById("project4Overlay").style.width = "0%";
}

function fourTofive() {
    document.getElementById("project4Overlay").style.width = "0%";
    document.getElementById("project5Overlay").style.width = "100%";
}

function fourTothree() {
    document.getElementById("project4Overlay").style.width = "0%";
    document.getElementById("project3Overlay").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeProject5() {
    document.getElementById("project5Overlay").style.width = "0%";
}

function openProject5() {
    document.getElementById("project5Overlay").style.width = "100%";
}

function fiveTofour() {
    document.getElementById("project5Overlay").style.width = "0%";
    document.getElementById("project4Overlay").style.width = "100%";
}

function fiveTosix() {
    document.getElementById("project5Overlay").style.width = "0%";
    document.getElementById("project6Overlay").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeProject6() {
    document.getElementById("project6Overlay").style.width = "0%";
}

function openProject6() {
    document.getElementById("project6Overlay").style.width = "100%";
}

function sixTofive() {
    document.getElementById("project6Overlay").style.width = "0%";
    document.getElementById("project5Overlay").style.width = "100%";
}

function sixToone() {
    document.getElementById("project6Overlay").style.width = "0%";
    document.getElementById("project1Overlay").style.width = "100%";
}


$("#home").click(function (event) {

    var target = $("#homeLink");
    // Only prevent default if animation is actually gonna happen
    event.preventDefault();
    $('html, body').animate({
        scrollTop: target.offset().top
    }, 1000, function () {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
            return false;
        } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
        };
    });
});

$("#portfolio").click(function (event) {

    var target = $("#portfolioLink");
    // Only prevent default if animation is actually gonna happen
    event.preventDefault();
    $('html, body').animate({
        scrollTop: target.offset().top - 160
    }, 1000, function () {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
            return false;
        } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
        };
    });
});

$("#about").click(function (event) {

    var target = $("#aboutMeLink");
    // Only prevent default if animation is actually gonna happen
    event.preventDefault();
    $('html, body').animate({
        scrollTop: target.offset().top - 200
    }, 1000, function () {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
            return false;
        } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
        };
    });
});





$("#contact").click(function (event) {

    var target = $("#contactLink");
    // Only prevent default if animation is actually gonna happen
    event.preventDefault();
    $('html, body').animate({
        scrollTop: target.offset().top - 200
    }, 1000, function () {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
            return false;
        } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
        };
    });


});

$("#aboutMeButtonStyle").click(function (event) {

    var target = $("#aboutMeLink");
    // Only prevent default if animation is actually gonna happen
    event.preventDefault();
    $('html, body').animate({
        scrollTop: target.offset().top - 200
    }, 1000, function () {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
            return false;
        } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
        };
    });


});

$("#skills").click(function (event) {

    var target = $("#skillsLink");
    // Only prevent default if animation is actually gonna happen
    event.preventDefault();
    $('html, body').animate({
        scrollTop: target.offset().top - 160
    }, 1000, function () {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
            return false;
        } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
        };
    });


});

$("#home1").click(function (event) {

    var target = $("#homeLink");
    // Only prevent default if animation is actually gonna happen
    event.preventDefault();
    $('html, body').animate({
        scrollTop: target.offset().top
    }, 1000, function () {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
            return false;
        } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
        };
    });
});

$("#portfolio1").click(function (event) {

    var target = $("#portfolioLink");
    // Only prevent default if animation is actually gonna happen
    event.preventDefault();
    $('html, body').animate({
        scrollTop: target.offset().top - 160
    }, 1000, function () {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
            return false;
        } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
        };
    });
});

$("#about1").click(function (event) {

    var target = $("#aboutMeLink");
    // Only prevent default if animation is actually gonna happen
    event.preventDefault();
    $('html, body').animate({
        scrollTop: target.offset().top - 200
    }, 1000, function () {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
            return false;
        } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
        };
    });
});





$("#contact1").click(function (event) {

    var target = $("#contactLink");
    // Only prevent default if animation is actually gonna happen
    event.preventDefault();
    $('html, body').animate({
        scrollTop: target.offset().top - 200
    }, 1000, function () {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
            return false;
        } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
        };
    });


});


$("#skills1").click(function (event) {

    var target = $("#skillsLink");
    // Only prevent default if animation is actually gonna happen
    event.preventDefault();
    $('html, body').animate({
        scrollTop: target.offset().top - 160
    }, 1000, function () {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
            return false;
        } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
        };
    });


});





// section1
$('.ml9 .letters').each(function () {
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({ loop: false })
    .add({
        targets: '.ml9 .letter',
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: function (el, i) {
            return 45 * (i + 1)
        }
    });


// Skills
jQuery(document).ready(function () {
    jQuery('.skillbar').each(function () {
        jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 6000);
    });
});




