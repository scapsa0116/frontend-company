const url = "http://localhost:3000/drinks"
document.addEventListener('DOMContentLoaded', () => {
    getFetch();
})


function getFetch() {
    fetch(url) 
    .then(res => res.json())
    .then(drinks => {
        drinks.data.forEach(drink => {
             

            const renderDrinks =`
            <div data-id =${drink.id}>
              <img
              src=${drink.attributes.strDrinkThumb}
              height ="200" width="250">
              <h3>${drink.attributes.strDrink}</h3>
              <p>${drink.attributes.strIngredient}</p>
              <p>${drink.attributes.strInstructions}</p>
              <p>${drink.attributes.category.name}</p>
              <button data-id=${drink.id}>Edit</button>
            </div>
            <br><br>`;

            document.querySelector('#drinks-container').innerHTML += renderDrinks
            
        })
    })
}