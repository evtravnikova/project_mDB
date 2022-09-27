/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Тіні забутих предків",
        "Арго",
        "Домогосподарки",
        "Eleven",
        "Fargo",
        "Час",
        "Абетка"
    ]
};

const adv = document.querySelector('.promo__adv');
const poster = document.querySelector('.promo__bg');

adv.remove();
document.querySelector('.promo__genre').textContent = 'ДРАМА';
poster.style.backgroundImage = 'url("img/bg.jpg")';
createMovieList(movieDB);






function createMovieList(list) {
    const movieList = document.querySelector('.promo__interactive-list');
    
    movieList.innerHTML = '';
    list.movies.sort();
    
    list.movies.forEach((film, i) => {
        movieList.innerHTML += `
                            <li class="promo__interactive-item">${i + 1}. ${film}
                            <div class="delete"></div>
                        </li>
    `;
    });
}


/*
const movieList = document.querySelectorAll('.promo__interactive-item');
for (let i = 0; i < movieList.length; i++) {
    for (let j = 0; j <= i; j++) {
        movieList[i].innerHTML = movieDB['movies'][j] + '<div class = "delete"></div>'
    }
}
*/
