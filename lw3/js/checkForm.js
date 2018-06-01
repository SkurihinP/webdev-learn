function validateData(email, password, repeatPassword) {
  var checkbox = document.getElementsByClassName('checkbox')[0].checked;
  var mask = email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  if (email =='') {
    return 'Введите email';
  } else if (!mask) {
    return 'Введён некорректный email';
  } else if (password.length < 6) {
    return 'Пароль слишком короткий';
  } else if (password != repeatPassword) {
    return 'Введенные пароли не совпадают';
  } else if (!checkbox) {
    return 'Чтобы зарегистрироваться, необходимо согласиться с правилами сайта';
  } else {
    return true;
  }
}

function registration(event) {
  var email = document.getElementsByClassName("email")[0].value;
  var pass = document.getElementsByClassName("password")[0].value;
  var repeatPass = document.getElementsByClassName("repeatPassword")[0].value;
  var validateResult = validateData(email, pass, repeatPass);
  if (validateResult === true) {
    alert("Вы зарегистрированы");
  } else {
    alert(validateResult);
    event.preventDefault();
  }
}

window.onload = function() {
  document.getElementById('registration').addEventListener('submit', registration);
}
