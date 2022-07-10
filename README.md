# Redberry-Knight-cup

Challenge for Redberry bootcamp

hello there!

HTML files:
index.html = contains landing page and registration parts. pages are displayed using javascript
fina.html =  contains final page.

JS files:
  index.js =
    function getStarted() = function hides landing page and displays first step of registration form
    function errorPopUp(input) = creates div and pops up an error window
    function removePopUp(input) = removes popup window
  
  first-step.js =
    nextBtn.addEventListener('click') = validates inputed data and then displays registration next step or popups an error window
    prevBtn.addEventListener('click') = returns to the previous page 
    function validateStep1() = validates input steps
    function nameValidation(input) = validates name
    function emailValidation(input) = validates email
    function phoneValidation(input) = validates phone number
    function dateValidation(input) = validates birthdate
    function ValidateEmailAddress(input) = regex validation for @redberry.ge
    function progressGreen() = makes progress indicator green if something was typed in inut field
  
  second-step.js = 
    prevBtn.addEventListener('click') = return tu the first step
    submitBtn.addEventListener('click') = validates user inputs and sends the data to API using function postDATA() and redirects user to final.html
    function progressGreenforQuestion() = makes progress indicator green if any option was chosen
    function validateStep2() = validates regirstration second step questions
  
  final.js = 
    function postDATA() = fetchs the API and sends the data
    window.addEventListener('pageshow') = inside checking if user clicked go back browser button to reload the page so session storage will be cleared
  
  dropdow.js =
    document.querySelectorAll('.dropdown > h2') = displaying dropdown options on select option's click
    async function getCharacters() = fetchs the data of charaters and displays on dropdown options
    .then() = checking if any option was clicked to replace selected option's place
    document.addEventListener('click') = checks if click was outside of dropdown options to hide options
  
  sessionStorage.js = 
    window.onload =  calling function saveSessionData() and function loadSessionData()
    function saveValue(e) = saving input values to sessionStorage
    function saveDropdownValue(e)  = saving dropdown values to sessionStorage
    function checkRadioInput() = saving question yes/no values
    function saveSessionData() = saves data which will not be initialized after restarting registration form
    function loadSessionData() = loads saved data from sessionStorage
    
    

    
    
    
    


