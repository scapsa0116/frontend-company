class Drink {
    constructor(drinkJSON) {
        this.id = drinkJSON.id
        this.strDrink = drinkJSON.strDrink
        this.strInstructions = drinkJSON.strInstructions
    }

    renderLi() {
        return `<br><br><br><li>${this.strDrink}</li><br>${this.strInstructions}`
    }
}