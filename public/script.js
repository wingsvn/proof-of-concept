
// console.log('hello!');

// show up effect op variatie tip
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
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


// Dutch price format
// ik selecteer alle elementen waarvan deze een prijs bevatten
const price = document.querySelectorAll('.ingredient-price');

//ik loop vervolgens door elk element en geef die een functie mee
price.forEach(price => {
    // functie: ophalen van de prijstekst en vervangen van de tekens hiervan
    const amount = price.textContent.replace(/[^\d.-]/g, '').replace(',', '.');

    // het bedrag formatteren naar Nederlands prijsformaat
    price.textContent = new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(amount);
});











