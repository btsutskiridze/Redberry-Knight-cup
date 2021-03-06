document.querySelectorAll('.dropdown > h2').forEach((list) => {
  //adding actived class onClick of dropdown list
  list.addEventListener('click', (e) => {
    //click event
    if (e.target.nextElementSibling == null) {
      //checking if element with image is clicked in player option
      e.target.parentElement.nextElementSibling.classList.toggle('actived');
    } else {
      e.target.nextElementSibling.classList.toggle('actived'); //adding class to dropdown ul element
    }
    e.target.classList.toggle('arrow'); // adding class to dropdown h2 element
  });
});

//fetching characters data
const getCharacters = async () => {
  const response = await fetch('https://chess-tournament-api.devtest.ge/api/grandmasters');
  const data = await response.json();
  const characterContainer = document.querySelector('.second-dropdown-options');

  //then appending each character info into html options list
  characterContainer.innerHTML += `<p style="font-weight: 600; font-size: 16px; color: #817d7d; margin-left: 28px; padding-bottom =8px">(Total ${data.length})</p>`;
  data.forEach((player) => {
    const playerElement = `<li  data-id="${player.id}">${player.name}<img src=" https://chess-tournament-api.devtest.ge${player.image}"  alt="" /></li>`;
    characterContainer.innerHTML += playerElement;
  });
};

//after fetching data making to replace clicked character as selected one.
//doing that because event listener bellow doesn't work and doesn't recognizes fetched data in html
//replace clicked option as selected one.
getCharacters().then(() => {
  document.querySelectorAll('.dropdown-options > li').forEach((element) => {
    if (element.parentElement.classList.contains('first-dropdown-options')) {
      //checking click of option
      element.addEventListener('click', (e) => {
        e.target.parentElement.previousElementSibling.innerHTML = element.innerHTML; //changing selected option after click
        e.target.parentElement.classList.remove('actived'); //removing class to dropdown ul element
        e.target.parentElement.previousElementSibling.classList.remove('arrow'); //removing class to dropdown ul element

        //adding green if any option was choosen
        const progressStep2 = document.getElementById('progress-step2');
        progressStep2.style.background = '#e9faf1';
        sessionStorage.setItem('progress-step2', '#e9faf1');
      });
    } else {
      //checking click of option
      element.addEventListener('click', (e) => {
        document.getElementById('player').innerHTML = element.textContent; //changing selected option after click
        document.getElementById('player').dataset.id = element.getAttribute('data-id'); //setting id as well
        e.target.parentElement.classList.remove('actived'); //removing class to dropdown ul element
        document.getElementById('player').classList.remove('arrow'); //removing class to dropdown ul element

        //adding green if any option was choosen
        const progressStep2 = document.getElementById('progress-step2');
        progressStep2.style.background = '#e9faf1';
        sessionStorage.setItem('progress-step2', '#e9faf1');
      });
    }
  });
});

//checking click outside of dropdown list
document.addEventListener('click', function (event) {
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
