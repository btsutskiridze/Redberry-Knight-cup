//elements
const form = document.querySelector('#registerForm');
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const indicators = document.querySelectorAll('.progress-step');
const nextBtn = document.querySelector('.btn-next');
const prevBtn = document.querySelector('.btn-prev');
const submitBtn = document.querySelector('.submit-btn');
const formContainer = document.querySelector('.personal-info');
const landingPageRightSide = document.querySelector('.right-side');
const landingPagelefttSide = document.querySelector('.left-body');

let stepCounter = 0;

/*
=======================================================
one fucntion getStarted() for get started button 
and other two event listeners for back and next buttons
=======================================================
*/

//landing page button's function to display form's step 1
const getStarted = () => {
  step1.classList.add('active');
  sessionStorage.setItem('step1', 'active');

  formContainer.style.display = 'grid';
  sessionStorage.setItem('formContainer', 'grid');

  landingPageRightSide.style.display = 'none';
  sessionStorage.setItem('landingPageRightSide', 'none');

  landingPagelefttSide.style.backgroundImage = 'url(./images/step-1-bg.png)';
  sessionStorage.setItem('landingPagelefttSide', 'url(./images/step-1-bg.png)');
};

//button next
nextBtn.addEventListener('click', () => {
  //checking which step is active
  if (step1.classList.contains('active')) {
    stepCounter = 0;
  } else if (step2.classList.contains('active')) {
    stepCounter = 1;
  }
  //if we are on step 1 and want to go to the next step
  if (stepCounter == 0) {
    if (validateStep1()) {
      //changing steps
      step1.classList.remove('active');
      sessionStorage.setItem('step1', '');

      step2.classList.add('active');
      sessionStorage.setItem('step2', 'active');

      indicators[stepCounter + 1].classList.add('progress-step-active');
      sessionStorage.setItem('stepCounter', stepCounter);
      sessionStorage.setItem('indicators', 'progress-step-active');

      //changing buttons
      nextBtn.classList.add('hide-btn');
      sessionStorage.setItem('nextBtn', 'hide-btn');

      submitBtn.classList.remove('hide-btn');
      sessionStorage.setItem('submitBtn', '');

      //changing small header of step
      document.querySelector('.form-part-header h3').innerHTML = 'First step is done, continue to finish onboarding';
      sessionStorage.setItem('smallHeader', 'First step is done, continue to finish onboarding');

      //changing background image
      landingPagelefttSide.style.backgroundImage = 'url(./images/step-2-bg.png)';
      sessionStorage.setItem('landingPagelefttSide', 'url(./images/step-2-bg.png)');
    } else {
      stepCounter = 0;
    }
  }
});

//when we are on final step we are clickin on submit button
submitBtn.addEventListener('click', () => {
  //validating second step and submitting

  if (validateStep2()) {
    submitBtn.setAttribute('type', 'submit'); //adding type submit attribute because to submit the form
    window.sessionStorage.clear(); //clearing session
    location.reload();
    window.open('./final.html', '_self'); //opening final step page
  }
});

//button prev
prevBtn.addEventListener('click', () => {
  //checking which step is active
  if (step1.classList.contains('active')) {
    stepCounter = 0;
  } else {
    stepCounter = 1;
  }
  //if we are on step 2
  if (stepCounter == 1) {
    //changing steps
    step2.classList.remove('active');
    sessionStorage.setItem('step2', '');

    step1.classList.add('active');
    sessionStorage.setItem('step1', 'active');

    indicators[stepCounter].classList.remove('progress-step-active');
    sessionStorage.setItem('stepCounter', stepCounter);
    sessionStorage.setItem('indicators', '');

    //changing buttons
    submitBtn.classList.add('hide-btn');
    sessionStorage.setItem('submitBtn', 'hide-btn');

    nextBtn.classList.remove('hide-btn');
    sessionStorage.setItem('nextBtn', '');

    //changing small header of step
    document.querySelector('.form-part-header h3').innerHTML = 'start creating your account';
    sessionStorage.setItem('smallHeader', 'start creating your account');

    //changing leftside background
    landingPagelefttSide.style.backgroundImage = 'url(./images/step-1-bg.png)';
    sessionStorage.setItem('landingPagelefttSide', 'url(./images/step-1-bg.png)');
  }
  //if we are on step 1 and want to go back to landing page
  if (stepCounter == 0) {
    step1.classList.remove('active');
    sessionStorage.setItem('step1', '');

    formContainer.style.display = 'none';
    sessionStorage.setItem('formContainer', 'none');

    landingPageRightSide.style.display = 'block';
    sessionStorage.setItem('landingPageRightSide', 'block');

    landingPagelefttSide.style.backgroundImage = 'url(./images/Landing-page-scrolling-photo-1.png)';
    sessionStorage.setItem('landingPagelefttSide', 'url(./images/Landing-page-scrolling-photo-1.png)');
  }
});

/*
====================
VALIDATION of STEPS 
====================
*/
//first steps
const validateStep1 = () => {
  const inputs = document.querySelectorAll('.input');
  inputs.forEach((input) => {
    //name input validation;
    if (input.name == 'name') {
      if (input.value.length < 2) {
        input.classList.add('invalid');
      } else {
        input.classList.remove('invalid');
      }
    }
    if (input.name == 'email') {
      //email validation
      if (!ValidateEmail(input)) {
        input.classList.add('invalid');
      } else {
        input.classList.remove('invalid');
      }
    }
    if (input.name == 'phone') {
      //phone validation
      if (input.value.length != 9) {
        input.classList.add('invalid');
      } else {
        input.classList.remove('invalid');
      }
    }
    if (input.name == 'birthday') {
      //date validation
      const inputDate = new Date(input.value); //taking input as date
      const minDate = new Date('1920-01-01').getTime(); //converting min data to millsec
      const maxDate = new Date('2006-12-31').getTime(); //converting max data to millsec

      //comparing inputDate to limits
      if (inputDate.toDateString() == 'Invalid Date' || inputDate.getTime() < minDate || inputDate.getTime() > maxDate) {
        input.classList.add('invalid');
      } else {
        input.classList.remove('invalid');
      }
    }
  });
  //checking if this step of form is valid
  let check = 0;
  inputs.forEach((input) => {
    if (input.classList.contains('invalid')) {
      check++;
    }
  });
  //returning accordingly
  return check === 0 ? true : false;
};

//second step
//not written

const validateStep2 = () => {
  const firstDropdownHeader = document.getElementById('knowledge');
  const secondDropdownHeader = document.getElementById('player');
  const firstDropdownOptions = document.querySelectorAll('.first-dropdown-options > li');
  const secondDropdownOptions = document.querySelectorAll('.second-dropdown-options > li');

  //question elements
  const yes = document.getElementById('yes');
  const no = document.getElementById('no');

  //knowledge
  let isSelected = false;
  for (let i = 0; i < firstDropdownOptions.length; i++) {
    //checking if user choose difficulty level
    if (firstDropdownOptions[i].textContent == firstDropdownHeader.textContent) {
      isSelected = true; // if we have selected one breaking loop
      break;
    }
  }

  //checking if option is selected
  if (isSelected) {
    firstDropdownHeader.classList.remove('invalid');
  } else {
    firstDropdownHeader.classList.add('invalid');
  }

  //player
  let isSelectedTwo = 0;
  for (let i = 0; i < secondDropdownOptions.length; i++) {
    //checking if user choose difficulty level
    if (secondDropdownOptions[i].textContent == secondDropdownHeader.textContent) {
      isSelectedTwo = true; // if we have selected one breaking loop
      break;
    }
  }

  //checking if option is selected
  if (isSelectedTwo) {
    secondDropdownHeader.classList.remove('invalid');
  } else {
    secondDropdownHeader.classList.add('invalid');
  }

  let isSelectedThree = false;
  //now validating question part
  if (yes.checked || no.checked) {
    isSelectedThree = true;
    document.querySelector('.question-group p').classList.remove('invalid');
  } else {
    isSelectedThree = false;
    document.querySelector('.question-group p').classList.add('invalid');
  }

  if (isSelected && isSelectedTwo && isSelectedThree) {
    //now checking if all of the options and if one of them is not satisfying the result returning false
    return true;
  } else {
    return false;
  }
};

/*
======================================
HELPER FUNCTIONS FOR STEP's VALIDATION
======================================
*/
//function for validating email
function ValidateEmail(input) {
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
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
  return true;
}

// posting data to backend
form.addEventListener('submit', function (e) {
  //auto submision of the form
  e.preventDefault();

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let birthday = document.getElementById('birthday').value;
  let knowledge = document.getElementById('knowledge').textContent;
  let player = document.getElementById('player').textContent;

  //to check which option is valid
  let yes = document.getElementById('yes');
  let no = document.getElementById('no');
  let participatedBefore = yes.checked ? yes.value : no.value;

  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(birthday);
  console.log(knowledge);
  console.log(player);
  console.log(participatedBefore);

  // fetch('https://jsonplaceholder.typicode.com/posts', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     title: name,
  //     body: email,
  //     id: phone,
  //   }),
  //   headers: {
  //     'Content-Type': 'application/json charset =UTF-8',
  //   },
  // })
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   });
});

// //get request
// fetch('https://chess-tournament-api.devtest.ge/api/grandmasters')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     data.forEach((d) => {
//       console.log(d.name);
//     });
//   });

// const inputs = document.querySelectorAll('.input');
// inputs.forEach((i) => {
//   console.log(i.name);
// });
