// Реализуй функционал изменения темы при нажатии на кнопку button[data-action="theme-switch"] в тулбаре.

// По умолчанию тема светлая
// При изменении темы, необходимо добавлять на элемент body класс theme-light или theme-dark
// Выбранная тема должна сохраняться между перезагрузками страницы (используй localStorage)
// Для иконок как обычно используем Material Icons, достаточно подменить текст в теге i.

// Иконка светлой темы - wb_sunny
// Иконка темной темы - brightness_3

import '../css/styles.css';

const actionButton = document.querySelector(
  'button[data-action="theme-switch"]',
);
const body = document.querySelector('body');
const icon = document.querySelector('i.toolbar__icon');

const darkTheme = {
  theme: 'theme-dark',
  icon: 'brightness_3',
};
const lightTheme = {
  theme: 'theme-light',
  icon: 'wb_sunny',
};

document.addEventListener('DOMContentLoaded', checkTheme);
actionButton.addEventListener('click', changeThemeColor);

function changeThemeColor(event) {
  if (load('theme') === undefined || load('theme').theme === 'theme-light') {
    save('theme', darkTheme);

    icon.textContent = darkTheme.icon;
    body.classList.remove(lightTheme.theme);
    body.classList.add(darkTheme.theme);
  } else {
    save('theme', lightTheme);

    icon.textContent = lightTheme.icon;
    body.classList.remove(darkTheme.theme);
    body.classList.add(lightTheme.theme);
  }
}

function checkTheme(event) {
  if (load('theme') === undefined || load('theme').theme === 'theme-light') {
    icon.textContent = lightTheme.icon;
    body.classList.add(lightTheme.theme);
  } else {
    icon.textContent = darkTheme.icon;
    body.classList.add(darkTheme.theme);
  }
}

// Принимает ключ `key` по которому будет произведена выборка.
const load = key => {
  try {
    const serializedState = localStorage.getItem(key);

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.error('Get state error: ', err);
  }
};

// Принимает ключ `key` и значение `value`.
const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
};
