//button next
nextBtn.addEventListener('click', () => {
  //elements
  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const indicators = document.querySelectorAll('.progress-step');
  const landingPagelefttSide = document.querySelector('.left-body');

  //checking which step is active
  //if we are on step 1 and want to go to the next step
  if (validateStep1()) {
    //changing steps
    step1.classList.remove('active');
    sessionStorage.setItem('step1', '');
    //step2
    step2.classList.add('active');
    sessionStorage.setItem('step2', 'active');

    //adding progress indicator active class
    indicators[1].classList.add('progress-step-active');
    sessionStorage.setItem('progressStep', 1);
    sessionStorage.setItem('indicators', 'progress-step-active');

    //progress checked
    indicators[0].classList.add('checked');
    sessionStorage.setItem('indicators2', 'checked');

    //changing buttons
    nextBtn.classList.add('hide-btn');
    sessionStorage.setItem('nextBtn', 'hide-btn');

    //we are going forward so displaying submitbtn
    submitBtn.classList.remove('hide-btn');
    sessionStorage.setItem('submitBtn', '');

    //adding margiin to buttons container
    document.querySelector('.buttons').style.marginTop = '174px';
    sessionStorage.setItem('buttons', '174px');

    //changing small header of step
    document.querySelector('.form-part-header h3').innerHTML = 'First step is done, continue to finish onboarding';
    sessionStorage.setItem('smallHeader', 'First step is done, continue to finish onboarding');

    //changing background image
    landingPagelefttSide.style.backgroundImage = 'url(./images/step-2-bg.png)';
    sessionStorage.setItem('landingPagelefttSide', 'url(./images/step-2-bg.png)');

    //adding quote on left body
    document.getElementById('quote1').classList.remove('quote-active');
    sessionStorage.setItem('quote1', '');
    document.getElementById('quote2').classList.add('quote-active');
    sessionStorage.setItem('quote2', 'quote-active');
  }
});

//back button
prevBtn.addEventListener('click', () => {
  //elements
  const step1 = document.getElementById('step1');
  const formContainer = document.querySelector('.personal-info');
  const landingPageRightSide = document.querySelector('.right-side');
  const landingPagelefttSide = document.querySelector('.left-body');

  //when step 1 is active
  if (step1.classList.contains('active')) {
    //removing class because we are going to landing page
    step1.classList.remove('active');
    sessionStorage.setItem('step1', '');

    //hiding form container
    formContainer.style.display = 'none';
    sessionStorage.setItem('formContainer', 'none');

    //changing background of right side
    landingPageRightSide.style.display = 'block';
    sessionStorage.setItem('landingPageRightSide', 'block');

    //changing background of left side
    landingPagelefttSide.style.backgroundImage = 'url(./images/Landing-page-scrolling-photo-1.png)';
    sessionStorage.setItem('landingPagelefttSide', 'url(./images/Landing-page-scrolling-photo-1.png)');

    //removing quotes on left body
    document.getElementById('quote1').classList.remove('quote-active');
    sessionStorage.setItem('quote1', '');
    document.getElementById('quote2').classList.remove('quote-active');
    sessionStorage.setItem('quote2', '');
  }
});

//inputs validation
const validateStep1 = () => {
  const inputs = document.querySelectorAll('.input');
  inputs.forEach((input) => {
    //name input validation;
    if (input.name == 'name') {
      //this functions either displays error or deletes it
      nameValidation(input) ? removePopUp(input.name) : errorPopUp(input.name);
    }
    if (input.name == 'email address') {
      //email validation
      //this functions either displays error or deletes it
      emailValidation(input) ? removePopUp(input.name) : errorPopUp(input.name);
    }
    if (input.name == 'phone number') {
      //phone validation
      //this functions either displays error or deletes it
      phoneValidation(input) ? removePopUp(input.name) : errorPopUp(input.name);
    }
    if (input.name == 'birthday') {
      //date validation
      //this functions either displays error or deletes it
      dateValidation(input) ? removePopUp(input.name) : errorPopUp(input.name);
    }
  });
  //checking if this step of form is valid
  let check = 0;
  inputs.forEach((input) => {
    if (input.classList.contains('input-invalid')) {
      check++;
    }
  });
  //returning accordingly
  return check === 0 ? true : false;
};

//checks if input was pressed onfocus=''
function progressGreen() {
  let istyped = false;
  let inputs = document.querySelectorAll('.input');
  const progressStep1 = document.getElementById('progress-step1');
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.length >= 1) {
      istyped = true;
      break;
    }
  }

  if (istyped) {
    progressStep1.style.background = '#e9faf1';
    sessionStorage.setItem('progress-step1', '#e9faf1');
  }
}

// ***helpers***
//helper for name validation
function nameValidation(input) {
  if (input.value.length < 2) {
    input.classList.add('input-invalid');
    input.classList.remove('input-success');
    return false;
    // errorPopUp(input.name);
  } else {
    input.classList.remove('input-invalid');
    input.classList.add('input-success');
    return true;
    // removePopUp(input.name);
  }
}

//helper for email validation
function emailValidation(input) {
  if (!ValidateEmailAddress(input)) {
    input.classList.add('input-invalid');
    input.classList.remove('input-success');
    return false;
    // errorPopUp(input.name + ' address');
  } else {
    input.classList.remove('input-invalid');
    input.classList.add('input-success');
    return true;
    // removePopUp(input.name + ' address');
  }
}

//helper for phone validation
function phoneValidation(input) {
  if (input.value.length != 9) {
    input.classList.add('input-invalid');
    input.classList.remove('input-success');
    return false;
    // errorPopUp(input.name + ' number');
  } else {
    input.classList.remove('input-invalid');
    input.classList.add('input-success');
    return true;
    // removePopUp(input.name + ' number');
  }
}

//helper for birthdate validation
function dateValidation(input) {
  const inputDate = new Date(input.value); //taking input as date
  const minDate = new Date('1920-01-01').getTime(); //converting min data to millsec
  const maxDate = new Date('2006-12-31').getTime(); //converting max data to millsec

  //comparing inputDate to limits
  if (inputDate.toDateString() == 'Invalid Date' || inputDate.getTime() < minDate || inputDate.getTime() > maxDate) {
    input.classList.add('input-invalid');
    input.classList.remove('input-success');
    return false;
    // errorPopUp(input.name);
  } else {
    input.classList.remove('input-invalid');
    input.classList.add('input-success');
    return true;
    // removePopUp(input.name);
  }
}

//function for validating email regex
function ValidateEmailAddress(input) {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge/;
  if (input.value.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}

//function to force user to enter only numbers in phone input field
//using on input keypress=""
function onlyNumberKey(evt) {
  // Only ASCII character in that range allowed
  let ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
  return true;
}
