/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () =>{ // это делает так что код будет работать только после полной прогрузки
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addFoarm = document.querySelector('form.add'),
          addInput = addFoarm.querySelector('.adding__input'),
          checkbox = addFoarm.querySelector('[type="checkbox"]'); // [] - это обозначение html атрибутов

    
    addFoarm.addEventListener('submit', (event) => { // submit - собфтие которое происходит при отправке формы (нажимает на кнопку например)
        event.preventDefault(); // отмена стандартного поведения браузера

        const newFilm = addInput.value; // value - это то что мы вводим в форму
        const favotite = checkbox.checked;
    }) // остановился на 10 минуте
    
    adv.forEach(item => {
        item.remove();
    });
    
    genre.textContent = 'Драмма';
    
    poster.style.backgroundImage = 'url("../img/bg.jpg")';
    
    movieList.innerHTML = ""; // так можно удобно отчистить элемент
    
    movieDB.movies.sort();
    
    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
        `;
    });
    
});