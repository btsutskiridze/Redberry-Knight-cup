# Redberry-Knight-cup

Challenge for Redberry bootcamp

hello there!
<br/>
HTML files:<br/>
index.html = contains landing page and registration parts. pages are displayed using javascript<br/>
fina.html =  contains final page.<br/>

JS files:<br/>
  index.js =<br/>
    function getStarted() = function hides landing page and displays first step of registration form<br/>
    function errorPopUp(input) = creates div and pops up an error window<br/>
    function removePopUp(input) = removes popup window<br/>
  
  first-step.js =<br/>
    nextBtn.addEventListener('click') = validates inputed data and then displays registration next step or popups an error window<br/>
    prevBtn.addEventListener('click') = returns to the previous page <br/>
    function validateStep1() = validates input steps<br/>
    function nameValidation(input) = validates name<br/>
    function emailValidation(input) = validates email<br/>
    function phoneValidation(input) = validates phone number<br/>
    function dateValidation(input) = validates birthdate<br/>
    function ValidateEmailAddress(input) = regex validation for @redberry.ge<br/>
    function progressGreen() = makes progress indicator green if something was typed in inut field<br/>
  <br/>
  second-step.js = <br/>
    prevBtn.addEventListener('click') = return tu the first step<br/>
    submitBtn.addEventListener('click') = validates user inputs and sends the data to API using function postDATA() and redirects user to final.html<br/>
    function progressGreenforQuestion() = makes progress indicator green if any option was chosen<br/>
    function validateStep2() = validates regirstration second step questions<br/>
  <br/>
  final.js = <br/>
    function postDATA() = fetchs the API and sends the data<br/>
    window.addEventListener('pageshow') = inside checking if user clicked go back browser button to reload the page so session storage will be cleared<br/>
  <br/>
  dropdow.js =<br/>
    document.querySelectorAll('.dropdown > h2') = displaying dropdown options on select option's click<br/>
    async function getCharacters() = fetchs the data of charaters and displays on dropdown options<br/>
    .then() = checking if any option was clicked to replace selected option's place<br/>
    document.addEventListener('click') = checks if click was outside of dropdown options to hide options<br/>
  
  sessionStorage.js = <br/>
    window.onload =  calling function saveSessionData() and function loadSessionData()<br/>
    function saveValue(e) = saving input values to sessionStorage<br/>
    function saveDropdownValue(e)  = saving dropdown values to sessionStorage <br/>
    function checkRadioInput() = saving question yes/no values<br/>
    function saveSessionData() = saves data which will not be initialized after restarting registration form<br/>
    function loadSessionData() = loads saved data from sessionStorage<br/>
 <br/><br/>
 Thank You!
    
    
    
    


