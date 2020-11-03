class Drinks {
    constructor(){
        this.drinks = []
        this.adapter = new DrinksAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadDrinks()
    }

    initBindingsAndEventListeners(){
        // this.drinksContainer = document.getElementById('drinks-container')
        this.drinksContainer = document.getElementById('drinks-container')
        this.strDrink = document.querySelector('body')
        this.strDrink = document.getElementById('strDrink')
        this.strInstructions = document.getElementById('strInstructions')
        this.drinkForm = document.getElementById('new-drink-form')
        this.drinkForm.addEventListener('submit', this.createDrink.bind(this))
        this.drinksContainer.addEventListener('dblclick', this.handleDrinkClick.bind
        (this))
        this.strDrink.addEventListener('blur', this.updateDrink.bind(this), true)
        
    }


    createDrink(event){
        event.preventDefault();
        const strDrink = this.strDrink.value
        const strInstructions = this.strInstructions.value
        
        this.adapter.createDrink(strDrink, strInstructions)
        .then(drink => {
            this.drinks.push(new Drink( drink.id, drink.strDrink, drink.strInstructions))
            this.strDrink.value = '',
            this.strInstructions.value = ''
            this.render()
        })
    }


    handleDrinkClick(e) {
        this.toggleDrink(e)
    }

    // it's fiering the li element
    handleDrinkClick(e){
        const li = e.target
        li.contentEditable = true
        li.focus();
        li.classList.add("editable")
    }
    

    updateDrink(e){
        const li = e.target
        li.contentEditable = false
        li.classList.remove("editable")
        const newValue = li.innerHTML
        const id = li.dataset.id
        console.log(id)
        this.adapter.updateDrink(newValue, id)
    }

   fetchAndLoadDrinks(){
       this.adapter
       .getDrinks()
       .then(drinks => {
          drinks.sort((a, b) => a.id - b.id).forEach(drink => this.drinks.push(new Drink(drink.id, drink.strDrink, drink.strInstructions)))
       })
       .then(() => {
           this.render()
       })
   }
   render(){
       this.drinksContainer.innerHTML = this.drinks.map(drink => drink.renderLi()).join('')
   }
}