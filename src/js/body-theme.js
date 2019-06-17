// Реализуй функционал изменения темы при нажатии на кнопку button[data-action="theme-switch"] в тулбаре.

// По умолчанию тема светлая
// При изменении темы, необходимо добавлять на элемент body класс theme-light или theme-dark
// Выбранная тема должна сохраняться между перезагрузками страницы (используй localStorage)
// Для иконок как обычно используем Material Icons, достаточно подменить текст в теге i.

// Иконка светлой темы - wb_sunny
// Иконка темной темы - brightness_3

import '../css/styles.css';

const chanchButtonThem = document.querySelector(
  'button[data-action="theme-switch"]',
);

console.log(chanchButtonThem);
