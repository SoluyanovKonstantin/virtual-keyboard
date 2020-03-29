// eslint-disable-next-line import/extensions
import keyCodes from './js/keyCodes.js';
// eslint-disable-next-line import/extensions
import { layoutToRus, layoutToEng } from './js/layout.js';

let shiftPressed = false;
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

let keys = document.querySelectorAll('.key');
keys = layoutToRus(keys);

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

function keyOn(keyCode, location) {
  const keyId = keyNumberToId(keyCode, location);
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

  if ((keyId === 42 || keyId === 54) && !shiftPressed) {
    for (let i = 15; i < 27; i += 1) {
      keys[i].classList.toggle('uppercase');
    }
    for (let i = 29; i < 40; i += 1) {
      keys[i].classList.toggle('uppercase');
    }
    for (let i = 43; i < 52; i += 1) {
      keys[i].classList.toggle('uppercase');
    }
    shiftPressed = true;
  }

  const str = keys[keyNumberToId(keyCode, location)].innerText;
  if (str.length === 1) {
    document.querySelector('textArea').value += str;
  }
  if (keyCode === 32) {
    document.querySelector('textArea').value += ' ';
  }
}

function keyOff(keyCode, location) {
  const keyId = keyNumberToId(keyCode, location);
  if (keys[42].classList.contains('active') && keys[57].classList.contains('active')) {
    keys = keys[0].innerText === 'ё' ? layoutToEng(keys) : layoutToRus(keys);
  }
  if ((keyId === 42 || keyId === 54) && shiftPressed) {
    for (let i = 15; i < 27; i += 1) {
      keys[i].classList.toggle('uppercase');
    }
    for (let i = 29; i < 40; i += 1) {
      keys[i].classList.toggle('uppercase');
    }
    for (let i = 43; i < 52; i += 1) {
      keys[i].classList.toggle('uppercase');
    }
    shiftPressed = false;
  }

  keys[keyId].classList.remove('active');
}

document.addEventListener('keydown', (evt) => {
  evt.preventDefault();
  keyOn(evt.keyCode, evt.location);
});

document.addEventListener('keyup', (evt) => {
  evt.preventDefault();
  keyOff(evt.keyCode, evt.location);
});
