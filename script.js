// eslint-disable-next-line import/extensions
import keyCodes from './js/keyCodes.js';

const ul = document.createElement('ul');
const textarea = document.createElement('textArea');
ul.classList.add('keyboard');
document.body.prepend(ul);
document.body.prepend(textarea);
for (let i = 0; i < 64; i += 1) {
  const li = document.createElement('li');
  li.classList.add('key');
  ul.append(li);
}

const keys = document.querySelectorAll('.key');

keys[0].innerText = 'ё';
for (let i = 1; i < 10; i += 1) {
  keys[i].innerHTML = i;
}
keys[10].innerHTML = 0;
keys[11].innerHTML = '-';
keys[12].innerHTML = '=';
keys[13].innerHTML = 'backspace';
keys[14].innerHTML = 'Tab';
keys[15].innerHTML = 'й';
keys[16].innerHTML = 'ц';
keys[17].innerHTML = 'у';
keys[18].innerHTML = 'к';
keys[19].innerHTML = 'е';
keys[20].innerHTML = 'н';
keys[21].innerHTML = 'г';
keys[22].innerHTML = 'ш';
keys[23].innerHTML = 'щ';
keys[24].innerHTML = 'з';
keys[25].innerHTML = 'х';
keys[26].innerHTML = 'ъ';
keys[27].innerHTML = 'del';
keys[28].innerHTML = 'Caps Lock';
keys[29].innerHTML = 'ф';
keys[30].innerHTML = 'ы';
keys[31].innerHTML = 'в';
keys[32].innerHTML = 'а';
keys[33].innerHTML = 'п';
keys[34].innerHTML = 'р';
keys[35].innerHTML = 'о';
keys[36].innerHTML = 'л';
keys[37].innerHTML = 'д';
keys[38].innerHTML = 'ж';
keys[39].innerHTML = 'э';
keys[40].innerHTML = '\\';
keys[41].innerHTML = 'Enter';
keys[42].innerHTML = 'Shift';
keys[43].innerHTML = 'я';
keys[44].innerHTML = 'ч';
keys[45].innerHTML = 'с';
keys[46].innerHTML = 'м';
keys[47].innerHTML = 'и';
keys[48].innerHTML = 'т';
keys[49].innerHTML = 'ь';
keys[50].innerHTML = 'б';
keys[51].innerHTML = 'ю';
keys[52].innerHTML = '.';
keys[53].innerHTML = '&uarr;';
keys[54].innerHTML = 'Shift';
keys[55].innerHTML = 'Ctrl';
keys[56].innerHTML = 'Win';
keys[57].innerHTML = 'Alt';
keys[58].innerHTML = 'Space';
keys[59].innerHTML = 'Alt';
keys[60].innerHTML = 'Ctrl';
keys[61].innerHTML = '&larr;';
keys[62].innerHTML = '&darr;';
keys[63].innerHTML = '&rarr;';

keys[58].classList.add('space');
keys[55].classList.add('ctrl');
keys[60].classList.add('ctrl');
keys[59].classList.add('alt');
keys[57].classList.add('alt');
keys[42].classList.add('shiftLeft');
keys[54].classList.add('shift');
keys[14].classList.add('tab');
keys[13].classList.add('backspace');
keys[28].classList.add('caps_lock');
keys[41].classList.add('enter');
keys[27].classList.add('del');
keys[56].classList.add('win');
keys[61].classList.add('keyLeft');
keys[63].classList.add('keyRight');

function keyNumberToId(keyNumber, location) {
  let keyN = keyNumber;
  if (keyNumber === 16 || keyNumber === 17 || keyNumber === 18) {
    keyN = Number(String(keyNumber) + String(location));
  }
  return keyCodes[keyN];
}

function keyOn(event) {
  const keyId = keyNumberToId(event.keyCode, event.location);
  keys[keyId].classList.add('active');
  if (keyId === 28) {
    for (let i = 15; i < 27; i += 1) {
      keys[i].classList.toggle('uppercase');
    }
    for (let i = 29; i < 40; i += 1) {
      keys[i].classList.toggle('uppercase');
    }
    for (let i = 43; i < 52; i += 1) {
      keys[i].classList.toggle('uppercase');
    }
  }

  const str = keys[keyNumberToId(event.keyCode, event.location)].innerText;
  if (str.length === 1) {
    document.querySelector('textArea').value += str;
  }
  if (event.keyCode === 32) {
    document.querySelector('textArea').value += ' ';
  }
}

function keyOff(event) {
  const keyId = keyNumberToId(event.keyCode, event.location);
  keys[keyId].classList.remove('active');
}

document.addEventListener('keydown', (evt) => {
  evt.preventDefault();
  keyOn(evt);
});

document.addEventListener('keyup', (evt) => {
  evt.preventDefault();
  keyOff(evt);
});
