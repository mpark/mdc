$(document).ready(function() {

    marked.setOptions({renderer: ConfluenceRenderer()});

    $('#convert').click(function() {
        var input = $('#input').val(),
            output = marked(input);

        $('#output').val(output);
    });

    $('#clear').click(function() {
        $('#input').val('');
        $('#output').val('');

    });

});



