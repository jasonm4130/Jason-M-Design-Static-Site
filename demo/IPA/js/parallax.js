    function fullscreenFix() {
        var a = $("body").height();
        $(".content-b").each(function(i) {
            $(this).innerHeight() <= a && $(this).closest(".fullscreen").addClass("not-overflow")
        })
    }

    function backgroundResize() {
        var a = $(window).height();
        $(".paralbackground").each(function(i) {
            var t = $(this),
                e = t.width(),
                s = t.height(),
                o = t.attr("data-img-width"),
                n = t.attr("data-img-height"),
                r = o / n,
                l = parseFloat(t.attr("data-diff"));
            l = l ? l : 0;
            var c = 0;
            if (t.hasClass("parallax") && !$("html").hasClass("touch")) {
                c = a - s
            }
            n = s + c + l, o = n * r, e > o && (o = e, n = o / r), t.data("resized-imgW", o), t.data("resized-imgH", n), t.css("background-size", o + "px " + n + "px")
        })
    }

    function parallaxPosition(a) {
        var i = $(window).height(),
            t = $(window).scrollTop(),
            e = t + i,
            s = (t + e) / 2;
        $(".parallax").each(function(a) {
            var o = $(this),
                n = o.height(),
                r = o.offset().top,
                l = r + n;
            if (e > r && l > t) {
                var c = (o.data("resized-imgW"), o.data("resized-imgH")),
                    d = 0,
                    h = -c + i,
                    u = i > n ? c - n : c - i;
                r -= u, l += u;
                var g = d + (h - d) * (s - r) / (l - r),
                    w = o.attr("data-oriz-pos");
                w = w ? w : "50%", $(this).css("background-position", w + " " + g + "px")
            }
        })
    }
    "ontouchstart" in window && (document.documentElement.className = document.documentElement.className + " touch"), $("html").hasClass("touch") || $(".parallax").css("background-attachment", "fixed"), $(window).resize(fullscreenFix), fullscreenFix(), $(window).resize(backgroundResize), $(window).focus(backgroundResize), backgroundResize(), $("html").hasClass("touch") || ($(window).resize(parallaxPosition), $(window).scroll(parallaxPosition), parallaxPosition());