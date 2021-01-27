class Category {
    constructor(categoryData){
        this.id = categoryData.id
        this.name = categoryData.name;
    }
    
}




function handleOnSearchSubmit (){
    const form = document.getElementById('category-form');
    form.addEventListener('submit', function(e){
        e.preventDefault();
        e.stopPropagation();
        let categoryName = e.target['name'].value

        

        fetch(`http://localhost:3000/categories/${categoryName}/`)
        .then(res => res.json())
        .then(category => console.log('@@category', category_id))
    })
    
}


