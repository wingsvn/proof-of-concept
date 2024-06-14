
// console.log('hello!');


// kijken of een item in de viewport binnen komt
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        // if intersecting add a class to it called: show
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show');
        }
    })
});

const hiddenElements = document.querySelectorAll('.suggestion');
hiddenElements.forEach((el) => observer.observe(el));


// toggle op boodschappenlijstje 
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.grocery-list button');
    const groceryList = document.querySelector('.grocery-list');

    button.addEventListener('click', function() {
        groceryList.classList.toggle('grocery-list-show'); // Toggle class to show/hide grocery list
    });
});


// scroll animation op boodschappenlijstje
// document.addEventListener('DOMContentLoaded', function() {
//     const startGrocery = document.querySelector('.suggestion');
//     const groceryList = document.querySelector('.grocery-list');

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 groceryList.classList.add('grocery-list-show');
//             } else {
//                 groceryList.classList.remove('grocery-list-show');
//             }
//         });
//     }, {
//         threshold: 1
//     });

//     observer.observe(startGrocery);
// });


















