const validateRegister = () => {
    var firstName = document.getElementById('firstname');
    var lastName = document.getElementById('lastname');
    var ninNumber = document.getElementById('usernin');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmpassword');
    var phoneNumber = document.getElementById('phonenumber');

   
    var firstNameError = document.getElementById('firstNameError');
    var lastNameError = document.getElementById('lastNameError');
    var emailError = document.getElementById('emailError');
    var userNinError = document.getElementById('userNinError');
    var passwordError = document.getElementById('passwordError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');
    var phoneNumberError = document.getElementById('phoneNumberError');

    

    //We are going to use regular expressions(regex)
    
    if(firstName.value == ''){
        firstName.style.border = '1px solid red';
        firstNameError.innerHTML = 'Please provide your first name';
        firstNameError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
        return false;

    }else{
        const firstNameRegex = /^[A-Z][a-z]*$/;
        if(firstNameRegex.test(firstName.value)== false){
            firstName.style.border = '1px solid red';
            firstNameError.innerHTML = 'Please start with capital letter';
            firstNameError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
            return false;

        }else{
            const firstNameRegexLength = /^[A-Z][a-z]{5,10}$/;
            if(firstNameRegexLength.test(firstName.value)=== false){
                firstName.style.border = '1px solid red';
                firstNameError.innerHTML = 'First name should be 5-10 characters';
                firstNameError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
                return false;
    
            }


        }
    }


    //Password validation
    if(password.value == ''){
        password.style.border = '1px solid red';
        passwordError.innerHTML = 'Input password';
        passwordError.style = 'color:red; font-family: Arial, Helvetica, Sans-Serif';
        return false;

    }else {
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if(passwordRegex.test(password.value) == false) {
            password.style.border = '1px solid red';
            passwordError.innerHTML = 'Incorrect password format';
            passwordError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
            return false;

        } 
    }


    if(email.value == ''){
        email.style.border = '1px solid red';
        emailError.innerHTML = 'Please provide your email';
        emailError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
        return false;

    }else {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        ;
        if(emailRegex.test(email.value)== false){
            email.style.border = '1px solid red';
            emailError.innerHTML = 'Provide a valid email';
            emailError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
            return false;
        }
        
    }


}