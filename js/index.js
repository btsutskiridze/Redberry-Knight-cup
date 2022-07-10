const step1 = document.getElementById('step1');
const formContainer = document.querySelector('.personal-info');
const landingPageRightSide = document.querySelector('.right-side');
const landingPagelefttSide = document.querySelector('.left-body');
const nextBtn = document.querySelector('.btn-next');
const prevBtn = document.querySelector('.btn-prev');
const submitBtn = document.querySelector('.submit-btn');

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

  //adding quote on left body
  document.getElementById('quote1').classList.add('quote-active');
  sessionStorage.setItem('quote1', 'quote-active');
};

// ************* popup error part ***********
function errorPopUp(input) {
  const errors = document.querySelector('.errors');
  let closeBtns;
  const errorDiv = `
   <div class="error-message" id="${input}-error">
     <h3 class="error-top">
       <span
         ><img src="./images/error.svg" alt="error" />
         <span>Invalid ${input}</span>
       </span>
       <img src="./images/close-btn.svg" class="close-btn" alt="close" />
     </h3>
     <h3 class="error-bottom">Please enter valid ${input}</h3>
   </div>
 `;

  removePopUp(input);

  errors.innerHTML += errorDiv;

  //we have to declare close button after appending error divs
  closeBtns = document.querySelectorAll('.close-btn');

  //adding event listener to close button
  closeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const errorContainer = e.target.parentElement.parentElement;
      errorContainer.remove();
    });
  });
}

function removePopUp(input) {
  if (document.getElementById(input + '-error') != null) {
    document.getElementById(input + '-error').remove();
  }
}
