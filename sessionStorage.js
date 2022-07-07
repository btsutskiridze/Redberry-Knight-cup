document.addEventListener('DOMContentLoaded', () => {
  document.body.style.display = 'block';
  sessionStorageCall();
});

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

  if (e.classList.contains('dropdown2')) {
    let imgUrl;
    if (e.firstElementChild.firstElementChild != null) {
      if (e.firstElementChild.firstElementChild.hasAttribute('src')) {
        imgUrl = e.firstElementChild.firstElementChild.getAttribute('src');
      } else {
        imgUrl = '';
      }
    }
    let dataId = e.firstElementChild.getAttribute('data-id');
    let data = `${val}<img src="${imgUrl}"   alt="" />`;
    sessionStorage.setItem(id, data);
    sessionStorage.setItem('dataId', dataId);
  }
}

//to save radio inputs
function checkRadioInput() {
  document.getElementsByName('participated').forEach((e) => {
    sessionStorage.setItem(e.value, e.checked);
  });
}
function sessionStorageCall() {
  //saving small header above steps at start
  if (sessionStorage.getItem('smallHeader') === null) {
    sessionStorage.setItem('smallHeader', 'start creating your account');
  }

  // saving dropdown default options at start
  if (sessionStorage.getItem('knowledge') === null) {
    sessionStorage.setItem('knowledge', 'level of  knowledge *');
  }
  if (sessionStorage.getItem('player') === null) {
    sessionStorage.setItem('player', 'choose your player *');
  }

  //first done
  if (sessionStorage.getItem('step1') == '') {
    step1.classList.remove('active');
  } else {
    step1.classList.add(sessionStorage.getItem('step1'));
  }

  if (sessionStorage.getItem('step2') == '') {
    step2.classList.remove('active');
  } else {
    step2.classList.add(sessionStorage.getItem('step2'));
  }

  //indicators
  if (sessionStorage.getItem('indicators') == '') {
    indicators[JSON.parse(sessionStorage.getItem('stepCounter'))].classList.remove('progress-step-active');
  } else {
    indicators[JSON.parse(sessionStorage.getItem('stepCounter')) + 1].classList.add(sessionStorage.getItem('indicators'));
  }

  //indicators checked
  if (sessionStorage.getItem('indicators2') == '') {
    indicators[JSON.parse(sessionStorage.getItem('stepCounter')) - 1].classList.remove('checked');
  } else {
    indicators[JSON.parse(sessionStorage.getItem('stepCounter'))].classList.add(sessionStorage.getItem('indicators2'));
  }

  //nextBtn
  if (sessionStorage.getItem('nextBtn') == '') {
    nextBtn.classList.remove('hide-btn');
  } else {
    nextBtn.classList.add(sessionStorage.getItem('nextBtn'));
  }

  //submitBtn
  if (sessionStorage.getItem('submitBtn') == '') {
    submitBtn.classList.remove('hide-btn');
  } else {
    submitBtn.classList.add(sessionStorage.getItem('submitBtn'));
  }

  //small header
  document.querySelector('.form-part-header h3').innerHTML = sessionStorage.getItem('smallHeader');
  //second done
  formContainer.style.display = sessionStorage.getItem('formContainer');

  //third done
  landingPageRightSide.style.display = sessionStorage.getItem('landingPageRightSide');

  //4th done
  landingPagelefttSide.style.backgroundImage = sessionStorage.getItem('landingPagelefttSide');

  //user inputs************
  //inputs part
  document.getElementById('name').value = sessionStorage.getItem('name');
  document.getElementById('email').value = sessionStorage.getItem('email');
  document.getElementById('phone').value = sessionStorage.getItem('phone');
  document.getElementById('birthday').value = sessionStorage.getItem('birthday');

  //dropdown options part
  document.getElementById('knowledge').textContent = sessionStorage.getItem('knowledge');
  //character choose part
  document.getElementById('player').innerHTML = sessionStorage.getItem('player');
  document.getElementById('player').dataset.id = sessionStorage.getItem('playerId');

  // question
  document.getElementById('yes').checked = JSON.parse(sessionStorage.getItem('yes'));
  document.getElementById('no').checked = JSON.parse(sessionStorage.getItem('no'));
}
