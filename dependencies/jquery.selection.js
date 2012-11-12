(function($){
    $.fn.disableSelection = function() {
        return this
            .attr('unselectable', 'on')
            .css('user-select', 'none')
            .on('selectstart', false);
    };

    $.fn.enableSelection = function() {
        return this
            .attr('unselectable', 'off')
            .css('user-select', 'text')
            .off('selectstart', false);
    };
})(jQuery);
