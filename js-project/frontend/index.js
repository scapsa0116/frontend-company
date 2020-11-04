document.addEventListener("DOMContentLoaded", () => {
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







