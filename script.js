// Assignment code here

var upper = document.querySelector("#upperCase");
var lower = document.querySelector("#lowerCase");
var numeric = document.querySelector("#numeric");
var special = document.querySelector("#specialChar");
var length = document.querySelector("#length");

function generatePassword() {
  //passArrayOptions holds all the characters that the user wishes to be included within the Password
  var passArrayOptions = '';
  var pass = "";
  var checkBoxes = 0;

  //If a checkbox is selected, add a single character of that type to the password, and update passArrayOptions with the selected options.
  if(upper.checked){
    var upperOpt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    passArrayOptions+=upperOpt;
    pass+=upperOpt[Math.round(Math.random()*25)];
    checkBoxes++;
  }
  if(lower.checked){
    var lowerOpt = "abcdefghijklmnopqrstuvwxyz";
    passArrayOptions+=lowerOpt;
    pass+=lowerOpt[Math.round(Math.random()*25)];
    checkBoxes++;
  }
  if(numeric.checked){
    var numOpt = "1234567890";
    passArrayOptions+=numOpt;
    pass+=numOpt[Math.round(Math.random()*9)];
    checkBoxes++;
  }
  if(special.checked){
    var specialOpt = "!@#$%^&*()_+?><:{}|";
    passArrayOptions+=specialOpt;
    pass+=specialOpt[Math.round(Math.random()*18)];
    checkBoxes++;
  }

  //Update length in case User went over or under specified limit
  if(length.value<8){
    length.value=8;
  }
  else if(length.value>128){
    length.value=128;
  }
  
  //Get random Characters from PassArrayOptions and add it to the password
  if(checkBoxes !=0){
    for(var i = 0; i<length.value-checkBoxes; i++){
      var randomSection = Math.round(Math.random()*pass.length);
      var randomArrayOpt = passArrayOptions[Math.round(Math.random()*(passArrayOptions.length-1))];
      pass = pass.substring(0, randomSection) + randomArrayOpt + pass.substring(randomSection,pass.length);
    }
  }
  else{
    pass="";
  }


  return pass;

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
