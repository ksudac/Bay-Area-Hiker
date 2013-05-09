$(document).ready(function(){
    
    var dog = $('<span>woof-woof!</span>');
    var run = $('<span>Run Forrest...run!!</span>');
    var expert = $('<span>WOW, you must be in great shape!!</span>');
    
    $('#best-dogs').on('click', function(){
        $('#dog-comment').prepend(dog).fadeToggle('fast');
        setTimeout(function(){
            $('#dog-comment').fadeOut('fast');
        }, 1000);
    });
    
    $('#best-run').on('click', function(){
        $('#run-comment').prepend(run).fadeToggle('fast');
        setTimeout(function(){
            $('#run-comment').fadeOut('fast');
        }, 1000);
    });
    
    $('#expert').on('click', function(){
        $('#expert-comment').prepend(expert).fadeToggle('fast');
            setTimeout(function(){
        $('#expert-comment').fadeOut('fast');
        }, 1000);
    });
});