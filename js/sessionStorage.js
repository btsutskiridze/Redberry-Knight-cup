//calling sessionStorage data on load
window.onload = () => {
  saveSessionData();
  loadSessionData();
  document.body.style.display = 'block';
};

//function that will save inputs
function saveValue(e) {
  let id = e.id; // get the sender's id to save it .
  let val = e.value; // get the value.
  sessionStorage.setItem(id, val); // Every time user writing something, the localStorage's value will override .
}

//to save dropdown options input
function saveDropdownValue(e) {
  let id = e.firstElementChild.id;
  let val = e.firstElementChild.textContent;
  sessionStorage.setItem(id, val);

  //if we are on second dropdown options we need to take save id as well
  if (e.classList.contains('dropdown2')) {
    let dataId = e.firstElementChild.getAttribute('data-id');
    sessionStorage.setItem('dataId', dataId);
  }
}

//to save radio inputs(y/n)
function checkRadioInput() {
  //also inside adding green color to step if option is choosen
  //greening input if user press any opiton
  const progressStep2 = document.getElementById('progress-step2');
  progressStep2.style.background = '#e9faf1';
  sessionStorage.setItem('progress-step2', '#e9faf1');

  //saving check values
  document.getElementsByName('participated').forEach((e) => {
    sessionStorage.setItem(e.value, e.checked);
  });
}

//saves data which will not be initialized after restarting registration form
function saveSessionData() {
  // saving dropdown default options at start
  if (sessionStorage.getItem('knowledge') === null) {
    sessionStorage.setItem('knowledge', 'level of knowledge <span style="color: #dc3545">*</span>');
  }
  if (sessionStorage.getItem('player') === null) {
    sessionStorage.setItem('player', 'choose your player <span style="color: #dc3545">*</span>');
  }
}

//this function is calling all the saved key value pairs in the session storage
function loadSessionData() {
  //elements
  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const indicators = document.querySelectorAll('.progress-step');
  const progressStep1 = document.getElementById('progress-step1');
  const progressStep2 = document.getElementById('progress-step2');
  const nextBtn = document.querySelector('.btn-next');
  const submitBtn = document.querySelector('.submit-btn');
  const formContainer = document.querySelector('.personal-info');
  const landingPageRightSide = document.querySelector('.right-side');
  const landingPagelefttSide = document.querySelector('.left-body');

  // //indicators green is checki
  // if (sessionStorage.getItem('indicatorsGreen') === null) {
  //   sessionStorage.setItem('indicatorsGreen', '');
  // }

  //registation step 1
  if (sessionStorage.getItem('step1') == '') {
    step1.classList.remove('active');
  } else {
    step1.classList.add(sessionStorage.getItem('step1'));
  }

  //registration step 2
  if (sessionStorage.getItem('step2') == '') {
    step2.classList.remove('active');
  } else {
    step2.classList.add(sessionStorage.getItem('step2'));
  }

  //adding style to all registration steps container
  formContainer.style.display = sessionStorage.getItem('formContainer');

  //to change right side of the page
  landingPageRightSide.style.display = sessionStorage.getItem('landingPageRightSide');

  //to change the left side of the page
  landingPagelefttSide.style.backgroundImage = sessionStorage.getItem('landingPagelefttSide');

  // indicators of progress above the form
  if (sessionStorage.getItem('progressStep') !== null) {
    if (sessionStorage.getItem('indicators') == '') {
      indicators[JSON.parse(sessionStorage.getItem('progressStep'))].classList.remove('progress-step-active');
    } else {
      indicators[JSON.parse(sessionStorage.getItem('progressStep'))].classList.add(sessionStorage.getItem('indicators'));
    }
  }

  //adding green styling to progress indicators
  progressStep1.style.background = sessionStorage.getItem('progress-step1');
  progressStep2.style.background = sessionStorage.getItem('progress-step2');

  //adding checked icon to indicators if we are on the next page
  if (sessionStorage.getItem('progressStep') !== null) {
    // progressStep is saving index of the step
    if (sessionStorage.getItem('indicators2') == '') {
      indicators[JSON.parse(sessionStorage.getItem('progressStep'))].classList.remove('checked');
    } else {
      indicators[JSON.parse(sessionStorage.getItem('progressStep')) - 1].classList.add(sessionStorage.getItem('indicators2'));
    }
  }

  //next button
  if (sessionStorage.getItem('nextBtn') == '') {
    nextBtn.classList.remove('hide-btn');
  } else {
    nextBtn.classList.add(sessionStorage.getItem('nextBtn'));
  }

  //submit button
  if (sessionStorage.getItem('submitBtn') == '') {
    submitBtn.classList.remove('hide-btn');
  } else {
    submitBtn.classList.add(sessionStorage.getItem('submitBtn'));
  }

  //adding margin to buttons on registration second step
  document.querySelector('.buttons').style.marginTop = sessionStorage.getItem('buttons');

  //small header
  //saving small header above steps at start
  if (sessionStorage.getItem('smallHeader') === null) {
    sessionStorage.setItem('smallHeader', 'start creating your account');
  }
  document.querySelector('.form-part-header h3').innerHTML = sessionStorage.getItem('smallHeader');

  //adding quote on left body
  if (sessionStorage.getItem('quote1') == '') {
    document.getElementById('quote1').classList.remove('qoute-active');
  } else {
    document.getElementById('quote1').classList.add(sessionStorage.getItem('quote1'));
  }
  //adding quote on left body
  if (sessionStorage.getItem('quote2') == '') {
    document.getElementById('quote2').classList.remove('qoute-active');
  } else {
    document.getElementById('quote2').classList.add(sessionStorage.getItem('quote2'));
  }

  //user inputs************
  //inputs part
  document.getElementById('name').value = sessionStorage.getItem('name');
  document.getElementById('email').value = sessionStorage.getItem('email');
  document.getElementById('phone').value = sessionStorage.getItem('phone');
  document.getElementById('birthday').value = sessionStorage.getItem('birthday');

  //dropdown options part
  //level
  document.getElementById('knowledge').innerHTML = sessionStorage.getItem('knowledge');

  //character choose part
  document.getElementById('player').innerHTML = sessionStorage.getItem('player');
  document.getElementById('player').dataset.id = sessionStorage.getItem('dataId'); //adding id as well

  // question
  document.getElementById('yes').checked = JSON.parse(sessionStorage.getItem('yes'));
  document.getElementById('no').checked = JSON.parse(sessionStorage.getItem('no'));
}
