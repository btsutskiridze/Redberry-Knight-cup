//elements
// const form = document.querySelector('#registerForm');
// const step1 = document.getElementById('step1');
// const step2 = document.getElementById('step2');
// const indicators = document.querySelectorAll('.progress-step');
// const progressStep1 = document.getElementById('progress-step1');
// const progressStep2 = document.getElementById('progress-step2');

// const nextBtn = document.querySelector('.btn-next');
// const prevBtn = document.querySelector('.btn-prev');
// const submitBtn = document.querySelector('.submit-btn');
// const formContainer = document.querySelector('.personal-info');
// const landingPageRightSide = document.querySelector('.right-side');
// const landingPagelefttSide = document.querySelector('.left-body');

/*
=======================================================
one fucntion getStarted() for get started button 
and other two event listeners for back and next buttons
=======================================================
*/

// //button next
// nextBtn.addEventListener('click', () => {
//   //checking which step is active
//   //if we are on step 1 and want to go to the next step
//   if (validateStep1()) {
//     //changing steps
//     step1.classList.remove('active');
//     sessionStorage.setItem('step1', '');

//     step2.classList.add('active');
//     sessionStorage.setItem('step2', 'active');

//     indicators[1].classList.add('progress-step-active');
//     sessionStorage.setItem('progressStep', 1);
//     sessionStorage.setItem('indicators', 'progress-step-active');

//     //progress checked
//     indicators[0].classList.add('checked');
//     sessionStorage.setItem('indicators2', 'checked');

//     //changing buttons
//     nextBtn.classList.add('hide-btn');
//     sessionStorage.setItem('nextBtn', 'hide-btn');

//     submitBtn.classList.remove('hide-btn');
//     sessionStorage.setItem('submitBtn', '');

//     document.querySelector('.buttons').style.marginTop = '174px';
//     sessionStorage.setItem('buttons', '174px');
//     //changing small header of step
//     document.querySelector('.form-part-header h3').innerHTML = 'First step is done, continue to finish onboarding';
//     sessionStorage.setItem('smallHeader', 'First step is done, continue to finish onboarding');

//     //changing background image
//     landingPagelefttSide.style.backgroundImage = 'url(./images/step-2-bg.png)';
//     sessionStorage.setItem('landingPagelefttSide', 'url(./images/step-2-bg.png)');

//     //adding quote on left body
//     document.getElementById('quote1').classList.remove('quote-active');
//     sessionStorage.setItem('quote1', '');
//     document.getElementById('quote2').classList.add('quote-active');
//     sessionStorage.setItem('quote2', 'quote-active');
//   }
// });

//when we are on final step we are clickin on submit button
// submitBtn.addEventListener('click', () => {
//   //validating second step and submitting

//   if (validateStep2()) {
//     submitBtn.setAttribute('type', 'submit'); //adding type submit attribute because to submit the form
//     // sessionStorage.clear();

//     // window.open('./final.html', '_self'); //opening final step page
//   }
//   let i = 0;
//   const inputs = document.querySelectorAll('.input');
//   inputs.forEach((input) => {
//     sessionStorage.setItem('placeholder' + i++, 'hide-label');
//   });
// });

//then now refreshing page after going back because sessionStorage is not reseting without refresh
// window.addEventListener('pageshow', function (event) {
//   let historyTraversal = event.persisted || (typeof window.performance != 'undefined' && window.performance.navigation.type === 2);
//   if (historyTraversal) {
//     // Handle page restore.
//     // const labels = document.querySelectorAll('.input-div> label');
//     // labels.forEach((label) => {
//     //   label.classList.remove('hide-label');
//     // });

//     window.location.reload();
//   }
// });

//button prev
// prevBtn.addEventListener('click', () => {
//   //checking which step is active
//   if (step1.classList.contains('active')) {
//     step1.classList.remove('active');
//     sessionStorage.setItem('step1', '');

//     formContainer.style.display = 'none';
//     sessionStorage.setItem('formContainer', 'none');

//     landingPageRightSide.style.display = 'block';
//     sessionStorage.setItem('landingPageRightSide', 'block');

//     landingPagelefttSide.style.backgroundImage = 'url(./images/Landing-page-scrolling-photo-1.png)';
//     sessionStorage.setItem('landingPagelefttSide', 'url(./images/Landing-page-scrolling-photo-1.png)');

//     //removing quotes on left body
//     document.getElementById('quote1').classList.remove('quote-active');
//     sessionStorage.setItem('quote1', '');
//     document.getElementById('quote2').classList.remove('quote-active');
//     sessionStorage.setItem('quote2', '');
//   } else {
//     //changing steps
//     step2.classList.remove('active');
//     sessionStorage.setItem('step2', '');

//     step1.classList.add('active');
//     sessionStorage.setItem('step1', 'active');

//     indicators[1].classList.remove('progress-step-active');
//     sessionStorage.setItem('progressStep', 1);
//     sessionStorage.setItem('indicators', '');

//     indicators[0].classList.remove('checked');
//     sessionStorage.setItem('indicators2', '');

//     //changing buttons
//     submitBtn.classList.add('hide-btn');
//     sessionStorage.setItem('submitBtn', 'hide-btn');

//     nextBtn.classList.remove('hide-btn');
//     sessionStorage.setItem('nextBtn', '');

//     document.querySelector('.buttons').style.marginTop = '88px';
//     sessionStorage.setItem('buttons', '88px');

//     //changing small header of step
//     document.querySelector('.form-part-header h3').innerHTML = 'start creating your account';
//     sessionStorage.setItem('smallHeader', 'start creating your account');

//     //changing leftside background
//     landingPagelefttSide.style.backgroundImage = 'url(./images/step-1-bg.png)';
//     sessionStorage.setItem('landingPagelefttSide', 'url(./images/step-1-bg.png)');

//     //adding quote on left body
//     document.getElementById('quote1').classList.add('quote-active');
//     sessionStorage.setItem('quote1', 'quote-active');
//     document.getElementById('quote2').classList.remove('quote-active');
//     sessionStorage.setItem('quote2', '');

//     //if we have any  popup not closed by the user
//     removePopUp('knowledge');
//     removePopUp('character');
//     removePopUp('option');
//   }
// });

//adding green to progress when input is started
// function progressGreen() {
//   let istyped = false;
//   let inputs = document.querySelectorAll('.input');

//   for (let i = 0; i < inputs.length; i++) {
//     if (inputs[i].value.length >= 1) {
//       istyped = true;
//       break;
//     }
//   }

//   if (istyped) {
//     progressStep1.style.background = '#e9faf1';
//     sessionStorage.setItem('progress-step1', '#e9faf1');
//   }
// }

// function progressGreenforQuestion() {
//   progressStep2.style.background = '#e9faf1';
//   sessionStorage.setItem('progress-step2', '#e9faf1');
// }

/*
====================
VALIDATION of STEPS 
====================
*/
//first steps
// const validateStep1 = () => {
//   const inputs = document.querySelectorAll('.input');
//   inputs.forEach((input) => {
//     //name input validation;
//     if (input.name == 'name') {
//       nameValidation(input) ? removePopUp(input.name) : errorPopUp(input.name);
//     }
//     if (input.name == 'email address') {
//       //email validation
//       emailValidation(input) ? removePopUp(input.name) : errorPopUp(input.name);
//     }
//     if (input.name == 'phone number') {
//       //phone validation
//       phoneValidation(input) ? removePopUp(input.name) : errorPopUp(input.name);
//     }
//     if (input.name == 'birthday') {
//       //date validation
//       dateValidation(input) ? removePopUp(input.name) : errorPopUp(input.name);
//     }
//   });
//   //checking if this step of form is valid
//   let check = 0;
//   inputs.forEach((input) => {
//     if (input.classList.contains('input-invalid')) {
//       check++;
//     }
//   });
//   //returning accordingly
//   return check === 0 ? true : false;
// };

//second step
//not written

// const validateStep2 = () => {
//   const firstDropdownHeader = document.getElementById('knowledge');
//   const secondDropdownHeader = document.getElementById('player');
//   const firstDropdownOptions = document.querySelectorAll('.first-dropdown-options > li');
//   const secondDropdownOptions = document.querySelectorAll('.second-dropdown-options > li');

//   //question elements
//   const yes = document.getElementById('yes');
//   const no = document.getElementById('no');

//   //knowledge
//   let isSelected = false;
//   for (let i = 0; i < firstDropdownOptions.length; i++) {
//     //checking if user choose difficulty level
//     if (firstDropdownOptions[i].textContent == firstDropdownHeader.textContent) {
//       isSelected = true; // if we have selected one breaking loop
//       break;
//     }
//   }

//   //checking if option is selected
//   if (isSelected) {
//     removePopUp('knowledge');
//   } else {
//     errorPopUp('knowledge');
//   }

//   //player
//   let isSelectedTwo = 0;
//   for (let i = 0; i < secondDropdownOptions.length; i++) {
//     //checking if user choose difficulty level
//     if (secondDropdownOptions[i].textContent == secondDropdownHeader.textContent) {
//       isSelectedTwo = true; // if we have selected one breaking loop
//       break;
//     }
//   }

//   //checking if option is selected
//   if (isSelectedTwo) {
//     removePopUp('character');
//   } else {
//     errorPopUp('character');
//   }

//   let isSelectedThree = false;
//   //now validating question part
//   if (yes.checked || no.checked) {
//     isSelectedThree = true;

//     removePopUp('option');
//   } else {
//     isSelectedThree = false;
//     errorPopUp('option');
//   }

//   if (isSelected && isSelectedTwo && isSelectedThree) {
//     //now checking if all of the options and if one of them is not satisfying the result returning false
//     return true;
//   } else {
//     return false;
//   }
// };

/*
======================================
HELPER FUNCTIONS FOR STEP's VALIDATION
======================================
*/
// function nameValidation(input) {
//   if (input.value.length < 2) {
//     input.classList.add('input-invalid');
//     input.classList.remove('input-success');
//     return false;
//     // errorPopUp(input.name);
//   } else {
//     input.classList.remove('input-invalid');
//     input.classList.add('input-success');
//     return true;
//     // removePopUp(input.name);
//   }
// }

// function emailValidation(input) {
//   if (!ValidateEmailAddress(input)) {
//     input.classList.add('input-invalid');
//     input.classList.remove('input-success');
//     return false;
//     // errorPopUp(input.name + ' address');
//   } else {
//     input.classList.remove('input-invalid');
//     input.classList.add('input-success');
//     return true;
//     // removePopUp(input.name + ' address');
//   }
// }

// function phoneValidation(input) {
//   if (input.value.length != 9) {
//     input.classList.add('input-invalid');
//     input.classList.remove('input-success');
//     return false;
//     // errorPopUp(input.name + ' number');
//   } else {
//     input.classList.remove('input-invalid');
//     input.classList.add('input-success');
//     return true;
//     // removePopUp(input.name + ' number');
//   }
// }

// function dateValidation(input) {
//   const inputDate = new Date(input.value); //taking input as date
//   const minDate = new Date('1920-01-01').getTime(); //converting min data to millsec
//   const maxDate = new Date('2006-12-31').getTime(); //converting max data to millsec

//   //comparing inputDate to limits
//   if (inputDate.toDateString() == 'Invalid Date' || inputDate.getTime() < minDate || inputDate.getTime() > maxDate) {
//     input.classList.add('input-invalid');
//     input.classList.remove('input-success');
//     return false;
//     // errorPopUp(input.name);
//   } else {
//     input.classList.remove('input-invalid');
//     input.classList.add('input-success');
//     return true;
//     // removePopUp(input.name);
//   }
// }

// //function for validating email
// function ValidateEmailAddress(input) {
//   var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge/;
//   if (input.value.match(validRegex)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// //function to force user to enter only numbers in phone input field
// //using on input keypress=""
// function onlyNumberKey(evt) {
//   // Only ASCII character in that range allowed
//   var ASCIICode = evt.which ? evt.which : evt.keyCode;
//   if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
//   return true;
// }

// // ************* popup error part ***********
// function errorPopUp(input) {
//   const errors = document.querySelector('.errors');
//   let closeBtns;
//   const errorDiv = `
//     <div class="error-message" id="${input}-error">
//       <h3 class="error-top">
//         <span
//           ><img src="./images/error.svg" alt="error" />
//           <span>Invalid ${input}</span>
//         </span>
//         <img src="./images/close-btn.svg" class="close-btn" alt="close" />
//       </h3>
//       <h3 class="error-bottom">Please enter valid ${input}</h3>
//     </div>
//   `;

//   removePopUp(input);

//   errors.innerHTML += errorDiv;

//   //we have to declare close button after appending error divs
//   closeBtns = document.querySelectorAll('.close-btn');

//   //adding event listener to close button
//   closeBtns.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//       const errorContainer = e.target.parentElement.parentElement;
//       errorContainer.remove();
//     });
//   });
// }

// function removePopUp(input) {
//   if (document.getElementById(input + '-error') != null) {
//     document.getElementById(input + '-error').remove();
//   }
// }

// ************** end of popup error part ***************

// posting data to backend
// form.addEventListener('submit', function (e) {
//   //auto submision of the form
//   e.preventDefault();
//   let Name = document.getElementById('name').value;
//   let Email = document.getElementById('email').value;
//   let Phone = document.getElementById('phone').value;
//   let Birthday = new Date(document.getElementById('birthday').value).toLocaleDateString('en-US');
//   let Knowledge = document.getElementById('knowledge').textContent;
//   let PlayerId = document.getElementById('player').dataset.id;

//   //to check which option is valid
//   let yes = document.getElementById('yes');
//   let ParticipatedBefore = yes.checked ? true : false;

//   let formValues = {
//     name: Name,
//     email: Email,
//     phone: Phone,
//     date_of_birth: Birthday,
//     experience_level: Knowledge,
//     already_participated: ParticipatedBefore,
//     character_id: PlayerId,
//   };

//   const formData = new FormData();
//   for (let key in formValues) {
//     // console.log(key);
//     // console.log(myobj[key]);
//     formData.append(key, formValues[key]);
//   }

//   // const payLoad = new URLSearchParams(formData);

//   fetch('https://chess-tournament-api.devtest.ge/api/register', {
//     method: 'POST',
//     headers: {
//       accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(formValues),
//   })
//     //.then(response => response.json())
//     .then((data) => {
//       console.log('Success:', data);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });

//   // var url = 'https://chess-tournament-api.devtest.ge/api/register';

//   // var xhr = new XMLHttpRequest();
//   // xhr.open('POST', url);

//   // xhr.setRequestHeader('Accept', 'application/json');
//   // xhr.setRequestHeader('Content-Type', 'application/json');

//   // xhr.onreadystatechange = function () {
//   //   if (xhr.readyState === 4) {
//   //     console.log(xhr.status);
//   //     console.log(xhr.responseText);
//   //   }
//   // };

//   // xhr.send(formValues);
// });