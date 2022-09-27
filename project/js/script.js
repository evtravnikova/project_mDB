'use strict';
document.addEventListener('DOMContentLoaded', () => {

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

    const movieList = document.querySelector('.promo__interactive-list');
    const adv = document.querySelector('.promo__adv');
    const poster = document.querySelector('.promo__bg');
    const addForm = document.querySelector('form.add');
    const addInput = addForm.querySelector('.adding__input');
    const checkbox = addForm.querySelector('[type="checkbox"]');


    deleteAdv(adv);
    changeBackgroundAndGenre();
    createMovieList(movieDB.movies, movieList);




    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`
            }
            if (favorite) {
                console.log('Favorite film is added');
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }
        event.target.reset();
    })


    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);


        films.forEach((film, i) => {
            parent.innerHTML += `
                            <li class="promo__interactive-item">${i + 1}. ${film}
                            <div class="delete"></div>
                        </li>`;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            })
        })
    }


    function deleteAdv(arr) {
        arr.remove();
    }


    function changeBackgroundAndGenre() {
        document.querySelector('.promo__genre').textContent = 'ДРАМА';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    }

    function sortArr(arr) {
        arr.sort()
    }
});

