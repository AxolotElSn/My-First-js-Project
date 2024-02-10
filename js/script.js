'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) { // isNaN(a) пока внутри не число, он возвращает правду
            personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
        }
    },

    rememberMyFilms: function(){
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
    },
    
    detectPersonalLevel: function(){
        if (personalMovieDB.count < 10){
            console.log('Просмотренно мало фильмов');
        } else if (personalMovieDB.count >=10 && personalMovieDB.count < 30){
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30){
            console.log('Вы киноман');
        } else {
            console.log('error');
        }
    },

    showMyDb: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleWisibleMyDB: function() {
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function(){
        //for(let i = 1; i <= 3; i++){
            // let genre = prompt(`Ваш любимый жанр под номером ${i} ?`);

            // if (genre === '' || genre == null){
            //     console.log('Вы ввели некорректные данные');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre; // i-1 для того чтоб ответ записыватся в нулёвый элемент массива
            //}
        // 2ой вариант цикла:
        for(let i = 1; i < 2; i++){
            let genres = prompt(`Введите ваши дюбимые жанры через запятую`).toLocaleLowerCase(); // превращает в ниж. регистр

            if(genres === "" || genres == null){
                console.log('Вы ввели некорректные данные');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', '); // split разбивает строку на отдельные элементы массива через разделитель
                personalMovieDB.genres.sort(); // sort отсортирует по алфавиту
            }
        }

        personalMovieDB.genres.forEach((item, i) =>{ // item - элемент массива, i - индекс 
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};
