document.querySelectorAll('.dropdown > h2').forEach((list) => {
  //adding actived class onClick of dropdown list
  list.addEventListener('click', (e) => {
    //click event
    e.target.nextElementSibling.classList.toggle('actived'); //adding class to dropdown ul element
    e.target.classList.toggle('arrow'); // adding class to dropdown h2 element
  });
});

document.querySelectorAll('.dropdown-options > li').forEach((element) => {
  element.addEventListener('click', (e) => {
    e.target.parentElement.previousElementSibling.innerHTML = element.innerHTML; //changing selected option after click
    e.target.parentElement.classList.remove('actived'); //removing class to dropdown ul element
    e.target.parentElement.previousElementSibling.classList.remove('arrow'); //removing class to dropdown ul element
  });
});

document.addEventListener('click', function (event) {
  //checking click outside of dropdown list
  const dropdown1 = document.querySelector('.dropdown1');
  const dropdown2 = document.querySelector('.dropdown2');
  const isClicked1 = dropdown1.contains(event.target);
  const isClicked2 = dropdown2.contains(event.target);

  if (!isClicked1) {
    //checking click and then hiding dropdown
    dropdown1.lastElementChild.classList.remove('actived');
    dropdown1.firstElementChild.classList.remove('arrow');
  }
  if (!isClicked2) {
    //checking second dropdown also
    dropdown2.lastElementChild.classList.remove('actived');
    dropdown2.firstElementChild.classList.remove('arrow');
  }
});
