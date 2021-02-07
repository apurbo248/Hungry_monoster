fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data => displayFood(data))

const displayFood = categories =>{
    const div = document.getElementById('allfood');
    for(let i = 0; i< categories.length; i++){
        const foodCategories = categories[i];
        const item = document.createElement('li');
        item.innerText = foodCategories.strCategory;
        div.appendChild(item);
    }
   
}