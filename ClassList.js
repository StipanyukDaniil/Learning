'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const LastFilms = prompt('Один из последних просмотренных фильмов?', ''),
    RankFilms = prompt('На сколько его оцените?', ''),
    LastFilms2 = prompt('Один из последних просмотренных фильмов?', ''),
    RankFilms2 = prompt('На сколько его оцените?', '');

personalMovieDB.movies[LastFilms] = RankFilms;
personalMovieDB.movies[LastFilms2] = RankFilms2;
console.log(personalMovieDB);