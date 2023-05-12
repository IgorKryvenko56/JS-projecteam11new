// var content = document.getElementsByTagName('body')[0];
// var darkMode = document.getElementById('dark-change');
// darkMode.addEventListener('click', function () {
//     darkMode.classList.toggle('active');
//     content.classList.toggle('night');
// });



// let content = document.querySelector('body');
// let darkMode = document.querySelector('#dark-change');

// darkMode.addEventListener('click', function () {
//   darkMode.classList.toggle('active');
//   content.classList.toggle('night');


// });


const input = document.querySelector('input');

input.addEventListener('input', () => {
  if (input.checked) {
    addDarkTheme();
    localStorage.setItem('theme', 'on');
    console.log(localStorage.theme);
  } else {
    removeDarkTheme();
    localStorage.setItem('theme', 'off');
    console.log(localStorage.theme);
  }
})

function addDarkTheme() {
  document.body.classList.add('night');
}

function removeDarkTheme() {
  document.body.classList.remove('night');
}

window.onload = () => {
  if (localStorage.theme === 'on') {
    addDarkTheme();
    input.checked = true;
  }

}


