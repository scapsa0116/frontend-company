class DrinksAdapter {
    constructor() {
        this.baseUrl = 'http://127.0.0.1:9393/api/v1/drinks'
    }

    getDrinks(){
        return fetch(this.baseUrl).then(res => res.json())
    }

    

    createDrink(strDrink, strInstructions) {

        let drink = {
            strDrink: strDrink,
            strInstructions: strInstructions

        }
        
        return fetch(`${this.baseUrl}`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(drink)
        }).then(res => res.json())
        // .then(drink => {
        //     let d = new Drink(drink.id, drink.strDrink, drink.strInstructions)
        //     d.renderLi()
        // })
    }

    
    
    
    
    
    updateDrink(id, strDrink, strInstructions) {
        let drink = {
            strDrink: strDrink,
            strInstructions: strInstructions

        }

        return fetch(`${this.baseUrl}/${id}`, {
            method: 'PATCH',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify( drink ),
          }).then(res => res.json())
        }
      }
      


    //   const buttons = document.getElementsByClassName("delete-bttn")
    //   console.log(buttons)
    //   for(const button of buttons) {
    //       button.addEventListener("click", () => {
    //           console.log("fie")
    //       })
    //   }

    function deleteDrink(){
        let drinkId = parseInt(event.target.dataset.id)

        fetch(`${this.baseUrl}/${drinkId}`,{
            method: 'DELETE',
        })
        this.location.reload()
    }