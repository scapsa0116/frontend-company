class Drink{
    constructor(id, strDrink, strInstructions){
        this.id = id;
        this.strDrink = strDrink;
        this.strInstructions = strInstructions;
    }

    //render drink instance method

    renderDrink(){
        let drinksDiv = document.getElementById("drinks-container")

        drinksDiv.innerHTML +=
        `
        <ul>
        <br><br><h1>Cocktail Name: ${this.strDrink}</h1><br>
        <li>Cocktail Instructions: ${this.strInstructions}</li><br>
        </ul>
        <button class="delete-bttn" data-id=${this.id} onClick="deleteDrink()">Delete Drink</button>
        `
    }
}
