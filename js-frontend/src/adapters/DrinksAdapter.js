class DrinksAdapter {
    constructor() {
        this.baseUrl = 'http://127.0.0.1:9393/api/v1/drinks'
    }

    getDrinks(){
        return fetch(this.baseUrl).then(res => res.json())
    }

    createDrink(value) {

        const drink = {
            strDrink: value,
            strInstructions: value

        }
        
        return fetch(this.baseUrl,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({drink})
        }).then(res => res.json())
    }
}