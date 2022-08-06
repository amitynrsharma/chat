$.validator.addMethod("matchPassword", function (value, element) {
    var passowrd = $("#password").val();
    return value==passowrd;
}, "passowrd or confirm password not match");


function signupUserValidate(){ 
    $("#user_form").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                emailAlreadyExist:true
            },
            password: {
                required: true,
            },
            confirm_password: {
                required: true,
                matchPassword:true
            },
        },

        messages: {
            name: {
                required: "Please enter name"
            },
            email: {
                required: "Please enter email"
            },
            password: {
                required: "Please select password"
            },
            confirm_pasword: {
                required: "Please enter confirm password"
            },
        },

        submitHandler: function (form) {
            form.submit();
        },
        errorPlacement: function (error, element) {
            error.css('color', 'red');
            error.insertAfter(element);
        }
    })
}

function signinUserValidate(){
    $("#signin_user_form").validate({
        rules: {
            email: {
                required: true,
                emailAlreadyExist: true
            },
            password: {
                required: true,
            },
        },

        messages: {
            email: {
                required: "Please enter email"
            },
            password: {
                required: "Please select password"
            },
        },
        errorPlacement: function (error, element) {
            error.css('color', 'red');
            error.insertAfter(element);
            if (element.attr("name") == "email") {
                // console.log("asasd");
                error.appendTo(".email_error");
            }else if(element.attr("name")=="password"){
                error.appendTo(".password_error");
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: function (form) {
            form.submit();
        },
        
    })
}
 



$(document).ready(function () {
    signupUserValidate();
    signinUserValidate();
});  