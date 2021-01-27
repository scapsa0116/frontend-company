document.addEventListener("DOMContentLoaded", () => {
    handleOnSearchSubmit ()
    createForm();
    fetchDrinks();
    
    
})

const BASE_URL = "http://127.0.0.1:3000"

// strIngredient  strDrinkThumb

function fetchDrinks(){
    fetch(`${BASE_URL}/drinks`)
    .then(resp => resp.json())
    .then(drinks => {
        console.log(drinks)
        for (const drink of drinks){
            let d = new Drink(drink.id, drink.strDrink, drink.strIngredient, drink.strInstructions, drink.strDrinkThumb, drink.category_id)
            d.renderDrink();
        }
    })
}


function createForm(){
    let drinksForm = document.getElementById("drinks-form")

    drinksForm.innerHTML += 
    `
    <form>
    <input placeholder="Cocktal Name:" type="text" id="strDrink"><br><br>
    <input placeholder="Cocktal Ingredients:" type="text" id="strIngredient"><br><br>
    <input placeholder="Cocktail Instructions:" type="text" id="strInstructions"><br><br>
    <div id = "category_id">
    <input  type="button" value="Alcoholic" >
    <input  type="button" value="Nonalcoholic"><br><br>
    </div>
    <img  placeholder="Cocktal http:" type="text" id="strDrinkThumb"><br>
    <input type="submit" value="Create Drink">
    </form> 
    `
    drinksForm.addEventListener("submit", drinkFormSubmission)
}

function drinkFormSubmission(e){
   e.preventDefault()
    let strDrink = document.getElementById("strDrink").value
    let strInstructions = document.getElementById("strInstructions").value
    let strIngredient  = document.getElementById("strIngredient").value
    let strDrinkThumb = document.getElementById("strDrinkThumb").value
    let category_id = document.getElementById("category_id").value

    let drink = {
        strDrink: strDrink,
        strInstructions: strInstructions,
        strIngredient: strIngredient , 
        strDrinkThumb: strDrinkThumb,
        category_id: category_id
    }
   
    fetch(`${BASE_URL}/drinks`,{
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({...drink, category_id: 1})
    })
    .then(resp => resp.json())
    .then(drink => {
        let d = new Drink(drink.id, drink.strDrink, drink.strIngredient, drink.strInstructions,  drink.strDrinkThumb, drink.category_id)
        // console.log("d")
        d.renderDrink();
    })
    
    
}

function deleteDrink(){
    // event.preventDefault();
    let drinkId = parseInt(event.target.dataset.id)

    fetch(`${BASE_URL}/drinks/${drinkId}`,{
        method: 'DELETE'

         
    })
    // setTimeout(function(){
    //     window.location.reload();
    //   });
    

    this.location.reload();
}






const createSearchForm = () => {
    let searchForm = document.getElementById("search-form")
    searchForm.innerHTML +=
    `
    <input type="text" placeholder="Search by Cathegory" id="search"/><br><br>
    <button id="search-bttn">Search</button>
    
    `

    let searchBttn = document.getElementById('search-bttn')
    searchBttn.addEventListener("click", processSearchQuery)
}


const processSearchQuery = () => {
// let drinksForm = document.getElementById("drinks-form")
//    drinksForm.innerHTML += ``
let query = document.getElementById('search').value


fetch(`${BASE_URL}/search/${query}`)
.then(resp => resp.json())
.then(category => {
    const div = document.getElementById("search-results")
    div.innerHTML += `${category.name}`

    let drinksForm = document.getElementById("drinks-form")
    drinksForm.innerHTML +=
    `
    <div id="search-results">
    ${category.name}
    </div>
    `
})
.catch(error => {
   const msg = {message: `<h2>"ERROR: CHOOSE ALCOHOLIC OR NONALCOHOLIC CATEGORY"</h2>`}
   let drinksForm = document.getElementById("search-form")
   drinksForm.innerHTML += `${msg.message}`
})
}








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