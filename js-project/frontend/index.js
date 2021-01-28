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
    <input  type="button" value="Alcoholic"  id="alcoholic">
    <input  type="button" value="Nonalcoholic" id="nonalcoholic><br><br>
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
        category_id: category_id,
        
    }
   
    fetch(`${BASE_URL}/drinks`,{
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({...drink, category_id: [0,1]  })
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






