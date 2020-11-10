document.addEventListener("DOMContentLoaded", () => {
    createSearchForm();
    createForm();
    fetchDrinks();
    
})

const BASE_URL = "http://127.0.0.1:9393"

// strIngredient  strDrinkThumb

function fetchDrinks(){
    fetch(`${BASE_URL}/drinks`)
    .then(resp => resp.json())
    .then(drinks => {
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
    <input placeholder="Cocktal http:" type="text" id="strDrinkThumb"><br><br>
    <button type="submit" value="Create Drink">Create Drink</button>
    </form> 
    `
    drinksForm.addEventListener("submit",drinkFormSubmission)
}

function drinkFormSubmission(){
   event.preventDefault();
    let strDrink = document.getElementById("strDrink").value
    let strInstructions = document.getElementById("strInstructions").value
    let strIngredient  = document.getElementById("strIngredient").value
    let strDrinkThumb = document.getElementById("strDrinkThumb").value

    let drink = {
        strDrink: strDrink,
        strInstructions: strInstructions,
        strIngredient : strIngredient , 
        strDrinkThumb: strDrinkThumb,
        category_id: category_id
    }
   
    fetch(`${BASE_URL}/drinks`,{
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(drink)
    })
    .then(resp => resp.json())
    .then(drink => {
        let d = new Drink(drink.id, drink.strDrink, drink.strIngredient, drink.strInstructions,  drink.strDrinkThumb, drink.category_id)
        
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
    

    // this.location.reload();
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
    // const div = document.getElementById("search-results")
    // div.innerHTML += `${category.name}`

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