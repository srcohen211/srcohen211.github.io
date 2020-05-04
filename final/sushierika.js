$(document).ready(function() {
      $("nav a:nth-child(2)").addClass("active")

      $("nav a").click(function(event) {
        goTo = $(this).attr("href")

        event.preventDefault()


        $("nav a").removeClass("active")
        $(this).addClass("active")


        $("html, body").animate({
          scrollTop: $(goTo).offset().top
        }, 1000)


        $("section").each(function() {
          $(this).attr("start", $(this).offset().top - 1)
          $(this).attr("end", $(this).offset().top + $(this).height())

        })


        $(window).scroll(function(value, index) {
          curr = $(document).scrollTop()

          $("nav a").removeClass("active")

          $("section").each(function() {
            if ((curr > $(this).attr("start")) && (curr < $(this).attr("end"))) {
              $("nav a").eq($(this).index()).addClass("active")
            }

          })


        })
      })