/*
 * jQuery Table of Contents plugin
 * Examples and documentation at http://github.com/jgorset/jquery-table-of-contents
 * Copyright (c) 2012 Johannes Gorset
 * Version: 1.0
 * License: MIT
 * Requires: jQuery v1.8 or later
 *           jQuery Selection plugin
 */

(function($) {

    $.fn.toc = function(options) {

        options = $.extend({
            element: "#toc",
            divider: ".chapter"
        }, options);

        $(this).each(function() {
            var chapters = $(this);

            var bar = $("<div />", {
                "class": "bar",
                "mousedown": function() {
                    var element = $(this);

                    $("body").disableSelection();

                    $(document).on("mousemove", function(event) {
                        var height = (event.pageY - element.offset().top) / bar.height() * 100;

                        if(height <= 100 && height > 0) {
                            bookmark.css("height", height + "%");
                            $(document).scrollTop($(document).height() * (height / 100) - $(window).height());
                        }
                    });

                    $(document).one("mouseup", function() {
                        $(document).off("mousemove");
                        $("body").enableSelection();
                    });
                }
            });

            var bookmark = $("<div />", {
                "class": "bookmark"
            });

            $(bar).append(bookmark);

            $(options.element).append(bar);

            $(chapters).find(options.divider).each(function(index, chapter) {
                var chapter = $(chapter);

                var item = $('<div />', {
                    "class": "item",
                    "text": chapter.data("title"),
                    "click": function() {
                        $('html, body').animate({
                            "scrollTop": chapter.offset().top
                        }, 2000, "swing");
                    }
                });

                item.css("height", (chapter.height() / chapters.height() * 100) + "%");

                $(options.element).append(item);
            });

            // Update the height of the bookmark according to the window's scrollbar.
            var update = function() {
                var height = ($(window).scrollTop() - chapters.offset().top + $(window).height()) / chapters.height() * 100;

                $(options.element).find(".bookmark").css("height", (height > 100 ? 100 : height) + "%");
            };

            $(window).on("load scroll resize", update);
        });

    };

})(jQuery);
