class Category {
    constructor(categoryData){
        this.id = categoryData.id
        this.name = categoryData.name;
    }
    
}




function handleOnSearchSubmit (){
    const form = document.getElementById('category-form');
    form.addEventListener('submit', function(e){
        e.preventDefault();
        e.stopPropagation();
      console.log(e.target['name'].value) 
      let categoryName = e.target['name'].value

        

        fetch(`http://localhost:3000/category/${categoryName}/`)
        .then(res => res.json())
        .then(categoryData => {
            const newCategory = new Category(categoryData)
            let profileDiv = document.getElementById('profile')
            profileDiv.innerHTML = `
            <h2>Profile</h2>
            <ul>
            <li>${newCategory.name}</li>
            <li>${newCategory.id}</li>
            </ul>
            `
        })
        
    })
    
}







// const createSearchForm = () => {
//     let searchForm = document.getElementById("search-form")
//     searchForm.innerHTML +=
//     `
//     <input type="text" placeholder="Search by Cathegory" id="search"/><br><br>
//     <button id="search-bttn">Search</button>
    
//     `

//     let searchBttn = document.getElementById('search-bttn')
//     searchBttn.addEventListener("click", processSearchQuery)
// }


// const processSearchQuery = () => {
// // let drinksForm = document.getElementById("drinks-form")
// //    drinksForm.innerHTML += ``
// let query = document.getElementById('search').value


// fetch(`${BASE_URL}/search/${query}`)
// .then(resp => resp.json())
// .then(category => {
//     const div = document.getElementById("search-results")
//     div.innerHTML += `${category.name}`

//     let drinksForm = document.getElementById("drinks-form")
//     drinksForm.innerHTML +=
//     `
//     <div id="search-results">
//     ${category.name}
//     </div>
//     `
// })
// .catch(error => {
//    const msg = {message: `<h2>"ERROR: CHOOSE ALCOHOLIC OR NONALCOHOLIC CATEGORY"</h2>`}
//    let drinksForm = document.getElementById("search-form")
//    drinksForm.innerHTML += `${msg.message}`
// })
// }








//const search = document.getElementById('search'),
//   submit = document.getElementById('submit'),
//   single_mealEl = document.getElementById('single-meal');

//   function searchMeal(e) {
//     e.preventDefault();
  
//     // Clear single meal
//     single_mealEl.innerHTML = '';
  
//     // Get search term
//     const term = search.value;
  
//     // Check for empty
//     if (term.trim()) {
//       fetch(`${BASE_URL}/search/${term}`)
//         .then(res => res.json())
//         .then(data => {
//           console.log(data);
//           resultHeading.innerHTML = `<h2>Search results for '${term}':</h2>`;

//           if (data.drinks === null) {
//             resultHeading.innerHTML = `<p>There are no search results. Try again!<p>`;
//           } else {
//             mealsEl.innerHTML = data.drinks
//               .map(
//                 drink => `
//               <div class="meal">
//                 <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" />
//                 <div class="meal-info" data-mealID="${drink.id}">
//                   <h3>${drink.strInstructions}</h3>
//                 </div>
//               </div>
//             `
//               )
//               .join('');
//           }
//         });
//       // Clear search text
//       search.value = '';
//     } else {
//       alert('Please enter a search term');
//     }
//   }


// const searchBar = document.getElementById("search")
// searchx.addEventListener("keyup", function(e){
//     const searchInput = e.target.value.toLowerCase()
//     const searchResult = Drink.allCocktails.filter( cocktail => {
    
//       if ( cocktail.name.toLowerCase().includes(searchInput)){
//         return true
        
//       } 
//   })