var el;

function validate(e) {
  var textEntered;
  textEntered = document.getElementById('message').value;

  if (!isNaN(textEntered)) {
    document.getElementById('message').disabled = true;
    document.getElementById('message').value = '';
  }
}

el = document.getElementById('message');
el.addEventListener('keyup', validate, false); // on keyup - call charCount()
