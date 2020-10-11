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