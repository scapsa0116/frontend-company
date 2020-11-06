document.addEventListener("DOMContentLoaded", () => {
    createSearchForm();
    createForm();
    fetchDrinks();
    
})

const BASE_URL = "http://127.0.0.1:9393"



function fetchDrinks(){
    fetch(`${BASE_URL}/drinks`)
    .then(resp => resp.json())
    .then(drinks => {
        for (const drink of drinks){
            let d = new Drink(drink.id, drink.strDrink, drink.strInstructions)
            d.renderDrink();
        }
    })
}


function createForm(){
    let drinksForm = document.getElementById("drinks-form")

    drinksForm.innerHTML += 
    `
    <h1>Create a New Cocktail!</h1>
    <form>
    <input placeholder="Cocktal Name:" type="text" id="strDrink"><br><br>
    <input placeholder="Cocktail Instructions:" type="text" id="strInstructions"><br><br><br>
    <button type="submit" value="Create Drink">Create Drink</button>
    </form> 
    `
    drinksForm.addEventListener("submit",drinkFormSubmission)
}

function drinkFormSubmission(){
   event.preventDefault();
    let strDrink = document.getElementById("strDrink").value
    let strInstructions = document.getElementById("strInstructions").value

    let drink = {
        strDrink: strDrink,
        strInstructions: strInstructions
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
        let d = new Drink(drink.id, drink.strDrink, drink.strInstructions)
        
        d.renderDrink();
    })
    
    
}

function deleteDrink(){
   
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
   const msg = {message: "Choose category alcoholic or nonalcoholic"}
   let drinksForm = document.getElementById("drinks-form")
   drinksForm.innerHTML += `${msg.message}`
})
}