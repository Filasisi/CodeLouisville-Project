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



// ============================
            // Password
// ============================
var myInput = document.getElementById("signuppwd");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

  
}

