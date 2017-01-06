$(function() {
    $('#contact').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            tel:{
                required: false,
                phoneUS: true
            },
            message: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            name: {
                required: "Name is required",
                minlength: "At least 2 characters"
            },
            email: {
                required: "Email is required"
            },
            tel: {
                required: "Please specify a valid phone number"
            },
            message: {
                required: "Message is required",
                minlength: "At least 5 characters"
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"contact_form.php",
                success: function() {
                    $('#contact .alert-success').fadeIn();
                },
                error: function() {
                    $('#contact .alert-danger').fadeIn(); 
                }
            });
        }
    });

$('#subscribe').validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: {
                required: "Email is required"
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"subscribe.php",
                success: function() {
                    $('#subscribe .alert-success').fadeIn();
                },
                error: function() {
                    $('#subscribe .alert-danger').fadeIn(); 
                }
            });
        }
    });
});