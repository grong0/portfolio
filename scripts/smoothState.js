$(function() {
    var options = {
        onStart: {
            duration: 1000, // Duration of the animation
            render: function ($container) {
                // Add your CSS animation reversing class
                $container.addClass('is-existing');

                // Restart animation
                smoothState.restartCSSAnimations();
            }
        },
        onReady: {
            duration: 1000, // Duration of the animation
            render: function ($container, $newContent) {
                // Remove the CSS animation reversing class
                $container.removeClass('is-existing');

                // Inject the new content
                smoothState.html($newContent);
            }
        }
    }
    $('main').smoothState(options).data('smoothState');
});

