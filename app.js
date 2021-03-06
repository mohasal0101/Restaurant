const allFood = [];


const parentFoodElement = document.getElementById("formID");
function food(foodId, foodName, foodType, Price) {
    this.foodName = foodName;
    this.foodType = foodType;
    this.Price = Price;
    this.foodId = foodId;
    allFood.push(this);
}





//method to print foodName and foodType and Price
food.prototype.printFood = function () {



    const foodElement = document.createElement("div");

    foodElement.innerHTML = `
    <div class="food">
    <table>
    <tr>
    <th>food ID</th>
    <th>food name</th>
    <th>food type</th>
    <th>price </th>
  </tr>
  <tr>
    <td>${this.foodId}</td>
    <td>${this.foodName}</td>
    <td>${this.foodType}</td>
    <td>${this.Price}</td>
  </tr>
  </table> `;
    parentFoodElement.appendChild(foodElement);


}



const foodType = ["Fruit and vegetables", "Starchy food", "Dairy", "Protein", "Fat"];

const formEl = document.getElementById("formID");


function handleSubmit(event) {
    event.preventDefault();
    let foodName = event.target.foodName.value;
    let foodType = event.target.foodType.value;
    let Price = event.target.Price.value;
    const newFood = new food(foodId(), foodName, foodType, Price).printFood();
    saveData();

}
formEl.addEventListener("submit", handleSubmit);


// Create a function to generate a unique four digits for the food id number
function foodId() {
    return Math.floor(Math.random() * 10000);
}

// local storage
function saveData() {
    console.log("saveData function called");
    let strifyedData = JSON.stringify(allFood);
    localStorage.setItem("food", strifyedData);
    
}
saveData();