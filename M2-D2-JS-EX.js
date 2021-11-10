/* MANDATORY JS EXERCISES (create a different file for this exercise) */

/* 1) Save this array in a variable called genres: ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"] */

let genres = [];
genres.push("Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary");

/* 2) Create an unordered list using JavaScript and save it in a variable. */

let listOfGenres = document.querySelector("#unordered-list");
listOfGenres.innerHTML = "<ul></ul>"

/* 3), 4), 5), 6) Cycle the array and create a list-item via JavaScript for every element;

Insert the genres as text in the list-item;

Append the list items in the unordered list;

Append the unordered list in the document. The list should appear in the page:*/

let cycleArray = function () {
    for (let i=0; i<genres.length; i++){
        let genre = genres[i]
        let listItem = document.createElement("li")
        listItem.innerText = genre
        listOfGenres.appendChild(listItem)
        console.log(listOfGenres)
    }
}

window.onload = function () {
    cycleArray()
}
