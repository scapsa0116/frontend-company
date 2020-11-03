class Drink {
    constructor(id, strDrink, strInstructions) {
        // this.id = drinkJSON.id
        // this.strDrink = drinkJSON.strDrink
        // this.strInstructions = drinkJSON.strInstructions
        this.id = id
        this.strDrink = strDrink
        this.strInstructions = strInstructions
    }
    

    renderLi() {
        return `
        <h1>${this.strDrink}</h1>
        <br><br><br><li data-id=${this.id}>
        
        <br><br>${this.strInstructions}</li>
        <button class="delete-bttn" data-id=${this.id} onClick="deleteDrink()">Delete Drink</button>
        `
        
    }

    
}



// contenteditable="true"