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
                required: false
            },
            message: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            name: {
                required: "Tu nombre es requerido",
                minlength: "Ingresa al menos 2 caracteres"
            },
            email: {
                required: "El email es requerido"
            },
            tel: {
                required: "Especifica un número valido"
            },
            message: {
                required: "El mensaje es requerido",
                minlength: "Al menos 5 caracteres"
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