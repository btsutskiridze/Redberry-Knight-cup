const form = document.querySelector('#registerForm');

//fetching data
function postDATA() {
  //elements
  let Name = document.getElementById('name').value;
  let Email = document.getElementById('email').value;
  let Phone = document.getElementById('phone').value;
  let Birthday = new Date(document.getElementById('birthday').value).toLocaleDateString('en-US');
  let Knowledge = document.getElementById('knowledge').textContent;
  let PlayerId = document.getElementById('player').dataset.id;
  //to check which option is valid
  let yes = document.getElementById('yes');
  let ParticipatedBefore = yes.checked ? true : false;

  if (Knowledge == 'intermediate') Knowledge = 'normal';

  //object
  let formData = {
    name: Name,
    email: Email,
    phone: Phone,
    date_of_birth: Birthday,
    experience_level: Knowledge,
    already_participated: ParticipatedBefore,
    character_id: PlayerId,
  };

  fetch('https://chess-tournament-api.devtest.ge/api/register', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    //.then(response => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

//adding page event listener and if user pressed go back button of browser page will restart
window.addEventListener('pageshow', function (event) {
  let historyTraversal = event.persisted || (typeof window.performance != 'undefined' && window.performance.navigation.type === 2);
  if (historyTraversal) {
    window.location.reload();
  }
});
