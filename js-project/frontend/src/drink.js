class Drink{
    constructor(drink, drinkAttributes){
        this.id = drink.id;
        this.strDrink = drinkAttributes.strDrink;
        this.strIngredient = drinkAttributes.strIngredient;
        this.strInstructions = drinkAttributes.strInstructions;
        this.strDrinkThumb = drinkAttributes.strDrinkThumb;
        this.category = drinkAttributes.category;
        Drink.all.push(this)
        // debugger;
    }

    renderDrinkCard() {
        // debugger;
        return`
        <div data-id =${this.id}>
          <img
          src=${this.strDrinkThumb}
          height ="200" width="250">
          <h3>${this.strDrink}</h3>
          <p>${this.strIngredient}</p>
          <p>${this.strInstructions}</p>
          <p>${this.category.name}</p>
          <button data-id=${this.id}>Edit</button>
          <button class="delete-bttn" data-id=${this.id} onClick="deleteDrink()">Delete Drink</button>
         
        </div>
        <br><br>`;

        // document.querySelector('#drinks-container').innerHTML += renderDrinks 
    }

    static findById(id) {
        return this.all.find(drink => drink.id === id)
    }

    renderUpdateForm(){
        return`
        <form data-id =${this.id}>
        <h3>Edit a Drink!</h3>


            <input id="input-strDrink" type="text" name="strDrink" value="${this.strDrink}" class="input-text">
            <br><br>
            <textarea id="input-strIngredient" name="strIngredient" rows="3" cols="30" value="${this.strIngredient}" ></textarea>
            <br><br>
            <textarea id="input-strInstructions" name="strInstructions" rows="3" cols="30" value="${this.strInstructions}" ></textarea>
            <br><br>
            <input id="input-strDrinkThumb" type="text" name="strDrinkThumb" value="${this.strDrinkThumb}"  class="input-text">
            <br><br>

            <p>Choose A category </p>
            <select id="categories" name="categories" value="${this.category.name}">
            <option value="9">Alcoholic</option>
            <option value="10">Nonalcoholic</option>
            </select>
            <br><br>
    
          <input id='edit-button' type="submit" name="submit" value="Edit Drink" class="submit">
        </form>
        <br><br>`;
    
        
    }
}


Drink.all = [];


