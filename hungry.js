
// Search meal by name //
document.getElementById('search-item').addEventListener('click', () => {
    const foodName = document.getElementById('food').value;
    if (!foodName) {
        alert("Please search an item by name!");
    } else {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
            .then(res => res.json())
            .then(data => displayFood(data.meals))
            .catch(error => alert("This meal name doesn't exist! search again... "));
    }
    document.getElementById('food').value = "";
})

//  Meal image and title 
const displayFood = items => {
    const showFood = document.getElementById('allMeals');
    showFood.innerHTML = "";
    items.forEach(item => {
        const foodItem = document.createElement('div');
        foodItem.className = 'food-item';
        const foodInfo = `
        <img onclick="displayFoodDetail('${item.idMeal}')" src="${item.strMealThumb}"><br><br>
        <h4 onclick="displayFoodDetail('${item.idMeal}')">${item.strMeal}</h4><br>`;
        foodItem.innerHTML = foodInfo;
        showFood.appendChild(foodItem);
    });
}
// Meal details call by different api 
const displayFoodDetail = id => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => foodDetailInfo(data.meals[0]))
        .catch(error => alert("Please search by valid name!"));
}

// Meal details 
const foodDetailInfo = foods => {

//Details site  
    document.getElementById('allMeals').style.display = "none";
    document.getElementById('search-item').style.display = "none";
    document.getElementById('food').style.display = "none";
    document.getElementById('mealDetails').style.display = "block";

    // show details
    const foodItem = document.getElementById('mealDetails');
    foodItem.innerHTML = `
    <img src="${foods.strMealThumb}"><br>
    <h3 id="item-name">${foods.strMeal}</h3>
    <h5><u>Ingredients</u></h5>`;

// Meal ingredients 
    const ul = document.createElement('ul');
    const ingredientsList = [foods.strIngredient1, foods.strIngredient2, foods.strIngredient3, foods.strIngredient4, foods.strIngredient5, foods.strIngredient6, foods.strIngredient7, foods.strIngredient8, foods.strIngredient9, foods.strIngredient10, foods.strIngredient11, foods.strIngredient12, foods.strIngredient13, foods.strIngredient14, foods.strIngredient15, foods.strIngredient16, foods.strIngredient17, foods.strIngredient18, foods.strIngredient19, foods.strIngredient20];
    ingredientsList.forEach(foods => {
        const li = document.createElement('li');
        if (foods != null && foods != '') {
            li.innerText = foods;
            ul.appendChild(li);
        }
    });
    foodItem.appendChild(ul);
}




