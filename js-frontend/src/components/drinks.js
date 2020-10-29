class Drinks {
    constructor(){
        this.drinks = []
        this.adapter = new DrinksAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadDrinks()
    }

    initBindingsAndEventListeners(){
        this.drinksContainer = document.getElementById('drinks-container')
        this.newDrinkBody = document.getElementById('new-drink-body')
        this.drinkForm = document.getElementById('new-drink-form')
        this.drinkForm.addEventListener('submit', this.createDrink.bind(this))

    }
    createDrink(e){
        e.preventDefault()
        const value = this.newDrinkBody.value
        this.adapter.createDrink(value).then(drink => {
            this.drinks.push(new Drink (drink))
            this.newDrinkBody.value = ''
            this.render
        })
    }
    

   fetchAndLoadDrinks(){
       this.adapter
       .getDrinks()
       .then(drinks => {
          drinks.forEach(drink => this.drinks.push(new Drink(drink)))
       })
       .then(() => {
           this.render()
       })
   }
   render(){
       this.drinksContainer.innerHTML = this.drinks.map(drink => drink.renderLi()).join('')
   }
}