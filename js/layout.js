function layoutToRus(k) {
  const keys = Object.values(k);
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

  localStorage.setItem('layout', 'rus');
  return keys;
}

function layoutToEng(k) {
  const keys = Object.values(k);
  keys[0].innerText = '`';
  for (let i = 1; i < 10; i += 1) {
    keys[i].innerHTML = i;
  }
  keys[10].innerHTML = 0;
  keys[11].innerHTML = '-';
  keys[12].innerHTML = '=';
  keys[13].innerHTML = 'backspace';
  keys[14].innerHTML = 'Tab';
  keys[15].innerHTML = 'q';
  keys[16].innerHTML = 'w';
  keys[17].innerHTML = 'e';
  keys[18].innerHTML = 'r';
  keys[19].innerHTML = 't';
  keys[20].innerHTML = 'y';
  keys[21].innerHTML = 'u';
  keys[22].innerHTML = 'i';
  keys[23].innerHTML = 'o';
  keys[24].innerHTML = 'p';
  keys[25].innerHTML = '[';
  keys[26].innerHTML = ']';
  keys[27].innerHTML = 'del';
  keys[28].innerHTML = 'Caps Lock';
  keys[29].innerHTML = 'a';
  keys[30].innerHTML = 's';
  keys[31].innerHTML = 'd';
  keys[32].innerHTML = 'f';
  keys[33].innerHTML = 'g';
  keys[34].innerHTML = 'h';
  keys[35].innerHTML = 'j';
  keys[36].innerHTML = 'k';
  keys[37].innerHTML = 'l';
  keys[38].innerHTML = ';';
  keys[39].innerHTML = "'";
  keys[40].innerHTML = '\\';
  keys[41].innerHTML = 'Enter';
  keys[42].innerHTML = 'Shift';
  keys[43].innerHTML = 'z';
  keys[44].innerHTML = 'x';
  keys[45].innerHTML = 'c';
  keys[46].innerHTML = 'v';
  keys[47].innerHTML = 'b';
  keys[48].innerHTML = 'n';
  keys[49].innerHTML = 'm';
  keys[50].innerHTML = ',';
  keys[51].innerHTML = '.';
  keys[52].innerHTML = '/';
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

  localStorage.setItem('layout', 'eng');
  return keys;
}

function layoutToShiftRus(k) {
  const keys = Object.values(k);
  keys[0].innerText = 'Ё';
  keys[1].innerText = '!';
  keys[2].innerText = '"';
  keys[3].innerText = '№';
  keys[4].innerText = ';';
  keys[5].innerText = '%';
  keys[6].innerText = ':';
  keys[7].innerText = '?';
  keys[8].innerText = '*';
  keys[9].innerText = '(';
  keys[10].innerHTML = ')';
  keys[11].innerHTML = '_';
  keys[12].innerHTML = '+';
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
  keys[40].innerHTML = '/';
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
  keys[52].innerHTML = ',';
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

  localStorage.setItem('layout', 'rus');
  return keys;
}

function layoutToShiftEng(k) {
  const keys = Object.values(k);
  keys[0].innerText = '~';
  keys[1].innerText = '!';
  keys[2].innerText = '@';
  keys[3].innerText = '#';
  keys[4].innerText = '$';
  keys[5].innerText = '%';
  keys[6].innerText = '^';
  keys[7].innerText = '&';
  keys[8].innerText = '*';
  keys[9].innerText = '(';
  keys[10].innerHTML = ')';
  keys[11].innerHTML = '_';
  keys[12].innerHTML = '+';
  keys[13].innerHTML = 'backspace';
  keys[14].innerHTML = 'Tab';
  keys[15].innerHTML = 'q';
  keys[16].innerHTML = 'w';
  keys[17].innerHTML = 'e';
  keys[18].innerHTML = 'r';
  keys[19].innerHTML = 't';
  keys[20].innerHTML = 'y';
  keys[21].innerHTML = 'u';
  keys[22].innerHTML = 'i';
  keys[23].innerHTML = 'o';
  keys[24].innerHTML = 'p';
  keys[25].innerHTML = '{';
  keys[26].innerHTML = '}';
  keys[27].innerHTML = 'del';
  keys[28].innerHTML = 'Caps Lock';
  keys[29].innerHTML = 'a';
  keys[30].innerHTML = 's';
  keys[31].innerHTML = 'd';
  keys[32].innerHTML = 'f';
  keys[33].innerHTML = 'g';
  keys[34].innerHTML = 'h';
  keys[35].innerHTML = 'j';
  keys[36].innerHTML = 'k';
  keys[37].innerHTML = 'l';
  keys[38].innerHTML = ':';
  keys[39].innerHTML = '"';
  keys[40].innerHTML = '|';
  keys[41].innerHTML = 'Enter';
  keys[42].innerHTML = 'Shift';
  keys[43].innerHTML = 'z';
  keys[44].innerHTML = 'x';
  keys[45].innerHTML = 'c';
  keys[46].innerHTML = 'v';
  keys[47].innerHTML = 'b';
  keys[48].innerHTML = 'n';
  keys[49].innerHTML = 'm';
  keys[50].innerHTML = '<';
  keys[51].innerHTML = '>';
  keys[52].innerHTML = '?';
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

  localStorage.setItem('layout', 'eng');
  return keys;
}

function toUppercase(k) {
  const keys = Object.values(k);
  for (let i = 15; i < 27; i += 1) {
    keys[i].classList.toggle('uppercase');
  }
  for (let i = 29; i < 40; i += 1) {
    keys[i].classList.toggle('uppercase');
  }
  for (let i = 43; i < 52; i += 1) {
    keys[i].classList.toggle('uppercase');
  }

  return keys;
}

export {
  layoutToRus,
  layoutToEng,
  layoutToShiftRus,
  layoutToShiftEng,
  toUppercase,
};
