const url = "http://localhost:3000/drinks"

document.addEventListener('DOMContentLoaded', () => {
    getFetch();


    const createDrinksForm = document.querySelector("#create-drinks-form")

    createDrinksForm.addEventListener("submit", (e) => 
    createEventhandeler(e))



    const drinkContainer = document.querySelector("#drinks-container")
    drinkContainer.addEventListener("click", e => {
        const id = parseInt(e.target.dataset.id);
        const drink = Drink.findById(id);
       document.querySelector('#update-drink').innerHTML = drink.renderUpdateForm();
       
    });

    document.querySelector('#update-drink').addEventListener('submit', e => updateFormHandler(e))

})


function updateFormHandler(e) {
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
    const drink = Drink.findById(id);
    const strDrink = document.querySelector("#input-strDrink").value
    const strIngredient = document.querySelector("#input-strIngredient").value 
    const strInstructions = document.querySelector("#input-strInstructions").value
    const strDrinkThumb = document.querySelector("#input-strDrinkThumb").value
    const category_id = parseInt(document.querySelector('#categories').value)
    patchDrink(drink, strDrink, strIngredient, strInstructions,strDrinkThumb, category_id)
   

    function patchDrink(drink, strDrink, strIngredient, strInstructions,strDrinkThumb, category_id){
        bodyJSON = { strDrink, strIngredient, strInstructions,strDrinkThumb, category_id }
        fetch(`http://localhost:3000/drinks/${drink.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          Accept: 'application/json',
          },
          body: JSON.stringify(bodyJSON),  
          })
          .then(res => res.json())
          .then(updatedDrink => console.log(updatedDrink));
    }
  
  }


  


function getFetch() {
    fetch(url) 
    .then(res => res.json())
    .then(drinks => {
        // debugger;
        drinks.data.forEach(drink => {
        //    debugger;  
       let newDrink = new Drink(drink, drink.attributes)
            // const renderDrinks =`
            // <div data-id =${drink.id}>
            //   <img
            //   src=${drink.attributes.strDrinkThumb}
            //   height ="200" width="250">
            //   <h3>${drink.attributes.strDrink}</h3>
            //   <p>${drink.attributes.strIngredient}</p>
            //   <p>${drink.attributes.strInstructions}</p>
            //   <p>${drink.attributes.category.name}</p>
            //   <button data-id=${drink.id}>Edit</button>
            // </div>
            // <br><br>`;

            document.querySelector('#drinks-container').innerHTML += 
            newDrink.renderDrinkCard()
            // debugger;
            
        })
        // .catch(err => console.log(err))
    })
}



function createEventhandeler(e){
e.preventDefault()

const strDrink = document.querySelector("#input-strDrink").value
const strIngredient = document.querySelector("#input-strIngredient").value 
const strInstructions = document.querySelector("#input-strInstructions").value
const strDrinkThumb = document.querySelector("#input-strDrinkThumb").value
const categoryId = parseInt(document.querySelector('#categories').value)

postfetch(strDrink, strIngredient, strInstructions,strDrinkThumb, categoryId)
}

function postfetch(strDrink, strIngredient, strInstructions,strDrinkThumb, category_id){
    const bodyData = {strDrink, strIngredient, strInstructions,strDrinkThumb, category_id}
 
    fetch(url, {
     method: "POST",
     headers: {"Content-Type": "application/json"},
     body: JSON.stringify( bodyData
        //  {
        // strDrink:  strDrink,
        // strIngredient: strIngredient,
        // strInstructions: strInstructions,
        // strDrinkThumb: strDrinkThumb,
        // category_id: category_id}
        )
 })
 
 .then(res => res.json())
 .then(drink => {
     console.log(drink);
     const drinkData = drink.data
    let newDrink = new Drink(drinkData, drinkData.attributes)
    //  document.querySelector("#")


    //  const drinksMarkup = 
    //         `
    //         <div data-id=${drink.id}>
    //           <img
    //           src=${drinkData.attributes.strDrinkThumb}
    //           height ="200" width="250">
    //           <h3>${drinkData.attributes.strDrink}</h3>
    //           <p>${drinkData.attributes.strIngredient}</p>
    //           <p>${drinkData.attributes.strInstructions}</p>
    //           <p>${drinkData.attributes.category.name}</p>
    //           <button data-id=${drinkData.id}>Edit</button>

    //         </div>
    //         `



    //  let newDrink = new Drink(drinkData, drinkData.attributes)
     document.querySelector("#drinks-container").innerHTML += 
    //  drinksMarkup
    newDrink.renderDrinkCard()

    
    
 })

 this.location.reload();
 
}

function deleteDrink(){
    // event.preventDefault();
    let drinkId = parseInt(event.target.dataset.id)

    fetch(`${url}/${drinkId}`,{
        method: 'DELETE'

         
    })
    
    

    this.location.reload();
}