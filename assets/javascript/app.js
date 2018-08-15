
// Wait for window load
var loadPage = function() {
    $(".se-pre-con").fadeOut("slow");
}

setTimeout(loadPage, 3000);

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




