class Drink{
    constructor(id, strDrink, strIngredient, strInstructions, strDrinkThumb, category_id){
        this.id = id;
        this.strDrink = strDrink;
        this.strIngredient = strIngredient;
        this.strInstructions = strInstructions;
        this.strDrinkThumb = strDrinkThumb;
        this.category_id = category_id;
    }

    //render drink instance method

    renderDrink(){
        let drinksDiv = document.getElementById("drinks-container")

        drinksDiv.innerHTML +=
        `
        <ul>
        <br><br><h1>Cocktail Name: ${this.strDrink}</h1><br>
        <li>Cocktail Ingredients: ${this.strIngredient}</li><br>
        <li>Cocktail Instructions: ${this.strInstructions}</li><br>
        <p>Cocktail Picture: ${this.strDrinkThumb}</p><br>
        <p>Category: ${this.category_id} </p>
        </ul>
        <button class="delete-bttn" data-id=${this.id} onClick="deleteDrink()">Delete Drink</button><br><br>
        `
    }
}
