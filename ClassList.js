'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if(personalMovieDB.count<10){
    console.log("Просмотренно мало фильмов!");
} else {
    if (personalMovieDB.count<30 && personalMovieDB.count>=10){
        console.log("Вы классичексий зритель!");
    } else{
        if (personalMovieDB.count >=30){
            console.log("Вы Киноман!");
        }
    }
}

for (let i = 0; i < 2; i++) {
    const LastFilms = prompt('Один из последних просмотренных фильмов?', ''),
          RankFilms = prompt('На сколько его оцените?', '');

        if (LastFilms.length < 50 && LastFilms!= null && LastFilms!='' && 
          RankFilms!= null && RankFilms!='') {
            personalMovieDB.movies[LastFilms] = RankFilms;
            console.log('Yes');
        } else {
            console.log('No');
           i--;
        }

}

console.log(personalMovieDB);

