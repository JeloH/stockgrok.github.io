
//var colorClasses = "purple mint orange red blue green"
//  , sectionBreakpoints = []
//  ;
//
//// As we move between sections, we’ll need to change the background of the navigation element
//var gatherSectionBreakpoints = function() {
//  var $sections = $(".is-nav-bp");
//  sectionBreakpoints = [];
//
//  $sections.each(function(i){
//    sectionBreakpoints.push({"section": this.dataset.section, "breakpoint": Math.floor($(this).offset().top)});
//  });
//}
//
//
//// Provides the opacity value based on a start/end point and start/end value.
//var shouldAnimate = function($el, startPercentage) {
//  var offset = window.pageYOffset
//    , height = $el.outerHeight()
//    , startPosition = $el.parent().offset().top
//    , endPosition = height + $el.parent().offset().top
//    , progress = Math.floor((offset - startPosition) / (endPosition - startPosition) * 100)
//    ;
//
//  if (progress > startPercentage ) {
//    return true;
//  }
//  else {
//    return false;
//  }
//}
//
//// Fades out the Intro section
//var fadeSection = function($section) {
//  var $sectionHero = $section.find(".Section__graphic--hero")
//    , endPosition = $section.offset().top + $sectionHero.outerHeight()
//    , shouldFade = shouldAnimate($sectionHero, 25)
//    ;
//
//  if (shouldFade) {
//    $sectionHero.addClass("is-faded-out");
//  } else {
//    $sectionHero.removeClass("is-faded-out");
//  }
//}
//
//
//// This is a replacement for what would normally be a $(window).on("scroll") event.
//// It can be very resource intensive, so we’ll just list our functions in here.
//var animateThings = function() {
//  gatherSectionBreakpoints();
//  setNavPosition();
//  checkActiveSection();
//
//  // The color fades don’t work reliably in mobile browsers
//  if ($("html").hasClass("no-touchevents")) {
//    if (window.devicePixelRatio < 2) fadeSection($(".Section--" + $("body").data("active_section")));
//  }
//}
//
//
//// Makes the navigation fixed to the top of the screen when you get to
//// the bottom of the intro
//var setNavPosition = function() {
//  if (shouldAnimate($(".Section--intro"), 60)) {
//    $(".Navigation").addClass("is-visible");
//  } else {
//    $(".Navigation").removeClass("is-visible");
//  }
//}
//
//var setActiveNavItem = function(section) {
//  var $section = $("#nav-" + section);
//  $(".Navigation__item").removeClass("is-active");
//  $section.addClass("is-active");
//}
//
//var setActivePresentation = function($thumb) {
//  var $main = $("#presentation-" + $thumb.data("target"));
//
//  $(".Presentations__item, .Presentations__thumb").removeClass("is-active");
//
//  $thumb.addClass("is-active");
//  $main.addClass("is-active");
//}
//
//var checkActiveSection = function() {
//  var active = $("body").data("active_section")
//    , newActive = $("body").data("active_section")
//    , pastActive = false
//    , direction = undefined
//    ;
//
//  for (i in sectionBreakpoints) {
//    var navHeight = $(".Navigation").outerHeight()
//      , bp = parseInt(sectionBreakpoints[i].breakpoint) - navHeight
//      , section = sectionBreakpoints[i].section
//      ;
//
//    if (window.pageYOffset <= bp && !pastActive && window.pageYOffset > 0) {
//      var index = (i - 1 < 0) ? 0 : i - 1;
//      newActive = sectionBreakpoints[index].section;
//      direction = "backward";
//    }
//
//    if (section === active || active == "") pastActive = true;
//
//    if (window.pageYOffset > bp && pastActive && section !== active) {
//      newActive = section;
//      direction = "forward";
//    }
//  }
//
//  if (newActive !== active) {
//    setActiveSection(newActive, navHeight, direction);
//  }
//
//}
//
//var setActiveSection = function(newSection, topOffset, direction) {
//  $("body").data("active_section", newSection);
//  var $newSection = $(".Section--" + newSection)
//    , $otherSections = $(".Section").not(".Section--intro")
//    ;
//
//  if (window.devicePixelRatio < 2) {
//    $otherSections.find(".Section__graphic--hero").removeClass("is-fixed").css("top", "");
//    $newSection.find(".Section__graphic--hero").addClass("is-fixed");
//    if (newSection !== "intro") $newSection.find(".Section__graphic--hero").css("top", topOffset);
//
//    $otherSections.find(".Section__header").removeClass("is-fixed").css("top", "0");
//    $newSection.find(".Section__header").css("top", topOffset).addClass("is-fixed");
//
//  }
//
//  setNavColor($newSection.data("nav_color"));
//  setActiveNavItem(newSection);
//}
//
//var setNavColor = function(color) {
//  $(".Navigation").removeClass(colorClasses).addClass(color);
//}
//
//// This sets the top of the navigation so it lands on
//// the bottom edge of the intro section when not fixed.
//var setNavTop = function() {
//  $(".Navigation")
//    .css("top", $(".Section--intro").outerHeight() - $(".Navigation").outerHeight())
//    .addClass("has-top-set");
//}
//
//
//// All of this stuff happens after the page is loaded
//$(function(){
//  gatherSectionBreakpoints();
//  var animationInterval = setInterval(animateThings, 10);
//
//  $(".Navigation__item a").on("click", function(e){
//    var section = e.target.hash.replace("#","");
//    setActiveNavItem(section);
//    if ($(".Navigation__menu").hasClass("is-visible")) $(".Navigation__menu").removeClass("is-visible");
//  });
//
//  $(".Navigation__menu-toggle").on("click", function(e){
//    e.preventDefault();
//    $(".Navigation__menu").toggleClass("is-visible");
//    $(this).toggleClass("is-active");
//  });
//
//  $(".Presentations__sidebar").scrollTop(45);
//  $(".Presentations__sidebar").get(0).scrollLeft = 60;
//
//  $(".Presentations__thumb").on("click", function(e){
//    setActivePresentation($(e.target.parentElement));
//  });
//});

// $(function () {
//     $('.pop').on('click', function () {
//         $('.imagepreview').attr('src', $(this).find('img').attr('src'));
//         $('#imagemodal').modal('show');
//     });
// });

$(function () {
    $('.image-modal').modaal({
        type: 'image'
    });

    $("img").on('click', function (event) {

        $(".image-modal").attr("href", $(this).prop('src'));
        $(".image-modal").attr("alt", $(this).prop('alt'));
        $(".image-modal").click();

    });
});

// Add smooth scrolling to all links


$("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    } // End if
});

// Cache selectors
var lastId,
    topMenu = $("#mainNav"),
    topMenuHeight = topMenu.outerHeight() + 1,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function (e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 850);
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href=#" + id + "]").parent().addClass("active");
    }
});