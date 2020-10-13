/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

$(document).ready(function () {
    $("#nav-icon4").click(function () {
        $(this).toggleClass("open");
    }),
        $("#navbarNav a").on("click", function () {
            if (($("#navbarNav").removeClass("show"), $("#nav-icon4").toggleClass("open"), "" !== this.hash)) {
                event.preventDefault();
                var e = this.hash;
                $("html, body").animate({ scrollTop: $(e).offset().top - 55 }, 750);
            }
        }),
        $("#logo").on("click", function () {
            if ("" !== this.hash) {
                event.preventDefault();
                var e = this.hash;
                $("html, body").animate({ scrollTop: $(e).offset().top - 55 }, 750);
            }
        });
})

$('body').css('padding-top', $('.navbar').outerHeight() + 'px')

// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}