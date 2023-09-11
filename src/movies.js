// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorArr = moviesArray.map((oneMovie) => {
        return oneMovie.director
    })
    return directorArr;

}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevensDramaMovies = moviesArray.filter((currentMovie) => {
        return currentMovie.director === "Steven Spielberg" && currentMovie.genre.includes("Drama");          
    })
    return stevensDramaMovies.length 
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0 ){
        return 0;
    }

    const noEmptyScore = moviesArray.filter((currentMovie) => {
        return typeof currentMovie.score === "number";

    })

    const scoreAvg = noEmptyScore.reduce((accumulator, currentMovie) => {
        return (accumulator + currentMovie.score)
    }, 0)

    const average = scoreAvg / moviesArray.length

    return parseFloat(average.toFixed(2));
}




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
       
    const dramaArr = moviesArray.filter((currentMovie) => {
        return typeof currentMovie.score === "number" && currentMovie.genre.includes("Drama");
    })

    if (dramaArr.length === 0 ){
        return 0;
    }

    const dramaScoreAvg = dramaArr.reduce((accumulator, currentMovie) =>{
        return (accumulator + currentMovie.score)
    }, 0)

    const averageDrama = dramaScoreAvg / dramaArr.length;

    return parseFloat(averageDrama.toFixed(2));
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const byYearArr = moviesArray.toSorted((currentMovie, nextMovie) => {
        if (currentMovie.year !== nextMovie.year){
            return currentMovie.year - nextMovie.year  
        }
            return currentMovie.title.localeCompare(nextMovie.title);
       
    })

    return byYearArr;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const byNameArr =  moviesArray.toSorted((currentMovie, nextMovie) => {
        return currentMovie.title.localeCompare(nextMovie.title);
    });

    const byNameTitleArr = byNameArr.map((oneMovie) => {
        return oneMovie.title;
    })


    return byNameTitleArr.splice(0,20);

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
