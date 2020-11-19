  // ============================
            // Sign In
  // ============================


    function signIn(email, password){
      var userEmails = ["fiyin.lasisi@gmail.com",  "komi.lasisi@gmail.com", "adam.smith@gmail.com"];
      var passwords = ["Fiyinlas12%", "Komilas12%", "adamsmi12%"];
      
      for(var i = 0; i < userEmails.length; i++){
        if(userEmails[i] === email && passwords[i] === password){
            return true;
        }
      }
        
      return false;
    }
    
    
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
      }
    
    function validateEmail(val){
      if (isEmail(val)){
        return val;
      }
      alert("Email is not valid");
    }
    
    
    function validatePassword(val){
      if(val.length >= 2){
        return val;
      }
      else{
        alert("Password is not valid");
      }
    }
    
    $('#signinForm').on('click', '#signinBtn', function(){
      var currentEmail = validateEmail($('#signinEmail').val());
      var currentPassword = validatePassword($('#signinPwd').val());
      
      if (signIn(currentEmail, currentPassword)){
        alert(`Welcome to Sequoia, ${currentEmail}`);
      }
      
      else{
        alert("Username and Password Combination invalid");
      }
      
    });



 // =============================================
            //SignUp Form Validation JS
  // ==================================================

  var users = [];
  //validates email address format

  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

 
  //submit contact us form
    $('#signupBtn').on('click', function(){
      var firstname = $('#firstname').val();
      var lastname = $('#lastname').val();
      var email = $('#signupEmail').val();
      var password = $('#signupPass').val();

      if(firstname.length<=2){
        alert('Please enter a valid firstname with 3 or more characters');
        return;
      }

      if(lastname.length<=2){
        alert('Please enter a valid lastname with 3 or more characters');
        return;
      }

      if(isEmail(email)==false){
        alert('Please enter a valid email');
        return;
      }

      if(! (password.length>=6 && password.length<=16)){
        alert('Please enter a valid password of length 6-16');
        return;
      }

      var user = {firstname, lastname, email, password};
       console.log(user);
       users.push(user);
       console.log(users);
      alert(`${user.firstname}, you have successfully created your account! :).`);
  })
  
  // =============================================
            // ContactUs Form Validatation
  // ==================================================

  var users = [];
  //validates email address format

  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

 
  //submit contact us form
  // $('#signupForm').on('click', '#signupBtn', function(){
    $('#submitContactUs').on('click', function(){
      var firstname = $('#firstname1').val();
      var lastname = $('#lastname1').val();
      var email = $('#email').val();
      var message = $('#messagebox').val();

      if(firstname.length<=2){
        alert('Please enter a valid firstname with 3 or more characters');
        return;
      }

      if(lastname.length<=2){
        alert('Please enter a valid lastname with 3 or more characters');
        return;
      }

      if(isEmail(email)==false){
        alert('Please enter a valid email');
        return;
      }

      if(message.trim().length<=5){
        alert('Please enter a valid message with 6 or more characters');
        return;
      }

      var user = {firstname, lastname, email, message};
       console.log(user);
       users.push(user);
       console.log(users);
      alert(`${user.firstname}, your message has successfully been sent! We would get back to you within the next 48 hrs :).`);
  })
  