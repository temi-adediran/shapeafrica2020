$(function() {
    var form = $('#contact-form');
    var formMessages = $('#form-messages');

    $(form).submit(function(event) {
        event.preventDefault();
        var formData = $(form).serialize();

        $.ajax({
            type: "POST",
            url: "email.php",
            data: formData
        }).done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            console.log("ajax successful");
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            // Set the message text.
            $(formMessages).text("Your messages has been successfully sent.");
            console.log(formMessages);
            // Clear the form.
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
        }).fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            console.log("ajax failed");
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });
    });
});
