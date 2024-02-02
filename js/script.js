'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) { // isNaN(a) пока внутри не число, он возвращает правду
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generas: [],
    privat: false
};


function rememberMyFilms(){
    for( let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length <50){
            personalMovieDB.movies[a] = b; 
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    
    }
}

rememberMyFilms();



function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log('Просмотренно мало фильмов');
    } else if (personalMovieDB.count >=10 && personalMovieDB.count < 30){
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30){
        console.log('Вы киноман');
    } else {
        console.log('error');
    }
}

detectPersonalLevel();

function showMyDb(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDb(personalMovieDB.privat);

function writeYourGenres(){
    for(let i = 1; i<=3; i++){
        const a = prompt(`Ваш любимый жанр под номером ${i}`)
        personalMovieDB.generas[i-1] = a;
    }
}

writeYourGenres();

console.log(personalMovieDB);