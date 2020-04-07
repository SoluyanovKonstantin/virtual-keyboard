// eslint-disable-next-line import/extensions
import { keyCodes } from './js/keyCodes.js';
import {
  layoutToRus,
  layoutToEng,
  toUppercase,
  layoutToShiftEng,
  layoutToShiftRus,
// eslint-disable-next-line import/extensions
} from './js/layout.js';

let capslockUnpressed = true;
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
if (localStorage.getItem('layout') === 'rus' || localStorage.getItem('layout') === undefined) {
  keys = layoutToRus(keys);
} else {
  keys = layoutToEng(keys);
}

keys[13].classList.add('backspace');
keys[14].classList.add('tab');
keys[27].classList.add('del');
keys[28].classList.add('caps_lock');
keys[41].classList.add('enter');
keys[42].classList.add('shiftLeft');
keys[54].classList.add('shift');
keys[55].classList.add('ctrl');
keys[56].classList.add('win');
keys[57].classList.add('alt');
keys[58].classList.add('space');
keys[59].classList.add('alt');
keys[60].classList.add('ctrl');
keys[61].classList.add('keyLeft');
keys[63].classList.add('keyRight');

function keyNumberToId(keyNumber, location) {
  let keyN = keyNumber;
  if (keyNumber === 16 || keyNumber === 17 || keyNumber === 18) {
    //  Нужно для возможности различить дублирующиеся клавиши;
    keyN = Number(String(keyNumber) + String(location));
  }
  return keyCodes[keyN];
}

const textArea = document.querySelector('textarea');
textArea.focus();
function keyOff(keyId) {
  if (keys[42].classList.contains('active') && keys[55].classList.contains('active')) {
    keys = localStorage.getItem('layout') === 'eng' ? layoutToShiftRus(keys) : layoutToShiftEng(keys);
  }
  if ((keyId === 42 || keyId === 54) && shiftPressed) {
    keys = toUppercase(keys);
    if (localStorage.getItem('layout') === 'eng') {
      layoutToEng(keys);
    } else {
      layoutToRus(keys);
    }
    shiftPressed = false;
  }

  if (keyId === 28) {
    capslockUnpressed = true;
  }

  keys[keyId].classList.remove('active');
  setTimeout(() => {
    keys[keyId].style.animation = '';
  }, 200);
}

function keyOn(keyId) {
  textArea.focus();
  if ((keyId !== 42 && keyId !== 54) || !shiftPressed) {
    keys[keyId].classList.add('active');
    keys[keyId].style.animation = 'toBorder 0.3s';
  }
  if (keyId === 28 && capslockUnpressed) {
    keys = toUppercase(keys);
    capslockUnpressed = false;
  }

  if ((keyId === 42 || keyId === 54) && !shiftPressed) {
    keys = toUppercase(keys);
    if (localStorage.getItem('layout') === 'eng') {
      layoutToShiftEng(keys);
    } else {
      layoutToShiftRus(keys);
    }
    shiftPressed = true;
  }

  if (keyId === 13) {
    if (textArea.value.length > 0) {
      textArea.setRangeText('', textArea.selectionStart - 1, textArea.selectionEnd, 'end');
    }
  }
  if (keyId === 27) {
    if (textArea.value.length > 0) {
      textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd + 1, 'end');
    }
  }

  const str = keys[keyId].innerText;
  if (str.length === 1 && keyId !== 61 && keyId !== 63) {
    textArea.setRangeText(str, textArea.selectionStart, textArea.selectionEnd, 'end');
  }
  if (keyId === 61) {
    textArea.selectionStart -= 1;
    textArea.selectionEnd -= 1;
  }
  if (keyId === 63) {
    textArea.selectionStart += 1;
  }
  if (keyId === 58) {
    textArea.setRangeText(' ', textArea.selectionStart, textArea.selectionEnd, 'end');
  }
  if (keyId === 14) {
    textArea.setRangeText('    ', textArea.selectionStart, textArea.selectionEnd, 'end');
  }
  if (keyId === 41) {
    textArea.setRangeText('\n', textArea.selectionStart, textArea.selectionEnd, 'end');
  }
}

window.addEventListener('blur', () => {
  document.querySelectorAll('.active').forEach((item) => {
    const activeKey = item;
    activeKey.classList.remove('active');
    activeKey.style.animation = '';
  });
});

document.addEventListener('keydown', (evt) => {
  if (keyNumberToId(evt.keyCode, evt.location) !== undefined) {
    evt.preventDefault();
    const keyId = keyNumberToId(evt.keyCode, evt.location);
    keyOn(keyId);
  }
});

document.addEventListener('keyup', (evt) => {
  if (keyNumberToId(evt.keyCode, evt.location) !== undefined) {
    evt.preventDefault();
    const keyId = keyNumberToId(evt.keyCode, evt.location);
    keyOff(keyId);
  }
});

keys.forEach((item, index) => {
  item.addEventListener('click', () => {
    if (index !== 54 && index !== 42) {
      keyOn(index);
      setTimeout(() => {
        keyOff(index);
      }, 100);
    } else if (!item.classList.contains('active')) {
      keyOn(index);
    } else {
      keyOff(index);
    }
  });
});
