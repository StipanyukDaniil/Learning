'use strict';

let numberOfFilms;

function start (){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms ==  null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function RememberMyFilms(){
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
}

RememberMyFilms();


function detectPersonalLevel (){
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
}
detectPersonalLevel();

function writeYourGeners(){
    for (let i = 1; i<=3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGeners();

function showMyDB (){
    if (personalMovieDB.privat== false){
        console.log(personalMovieDB);
    } else {
        console.log('нет доступа');
    }
}
showMyDB();



