const parentFoodElement = document.getElementById("formID");
function food (foodId,foodName, foodType, Price){
    this.foodName = foodName;
    this.foodType = foodType;
    this.Price = Price;
    this.foodId = foodId;


}
const food101 =[];
const foodType =["Fruit and vegetables", "Starchy food", "Dairy", "Protein", "Fat"];




//method to print foodName and foodType and Price
food.prototype.printFood = function(){
  

    
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




const food1 = new food(foodId(),"Apple", foodType[0] , "$0.50");
const food2 = new food(foodId(),"Cereals", foodType[1] , "$1.20");
const food3 = new food(foodId(),"Cheeze", foodType[2] , "$1.00");
const food4 = new food(foodId(),"Potato", foodType[3] , "$1.00");
const food5 = new food(foodId(),"Choco", foodType[4] , "$1.00");
/* // print the food object to the console
food1.printFood();
food2.printFood();
food3.printFood();
food4.printFood();
food5.printFood();

 */

const formEl=document.getElementById("formID");
formEl.addEventListener("submit",handleSubmit);

function handleSubmit(event){
event.preventDefault();

let foodName= event.target.foodName.value;
 let foodType = event.target.foodType.value;
  let Price= event.target.Price.value;


const newFood = new food(foodId(),foodName, foodType, Price).printFood();
console.log(newFood);


}

// Create a function to generate a unique four digits for the food id number
function foodId() {
    return Math.floor(Math.random() * 10000);
}








