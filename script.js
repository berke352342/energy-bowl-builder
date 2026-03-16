class EnergyBowl{

constructor(base, fruits, size) {

 this.base = base;
 this.fruits = fruits;
 this.size = size;

}

calculatePrice(){

  let price = 5; //  base price

  price += this.fruits.length * 2;

if(this.size === "Medium") price += 2;
if(this.size === "Large") price += 4;

return price;

}

  calculateCalories(){

let calories = 200;

calories += this.fruits.length * 50;

 if(this.size === "Medium") calories += 100;
 if(this.size === "Large") calories += 200;

return calories;

}

getDescription(){

return "Your Energy Bowl:<br>" +
"Base: " + this.base + "<br>" +
"Fruits: " + this.fruits.join(", ") + "<br>" +
"Size: " + this.size + "<br><br>" +
"Total Price: $" + this.calculatePrice() + "<br>" +
"Total Calories: " + this.calculateCalories() + " kcal";

}

}

const button = document.getElementById("calculateBtn");
const result = document.getElementById("result");

button.addEventListener("click", function() {

const base = document.getElementById("base").value;

  const fruitCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let fruits = [];

 fruitCheckboxes.forEach(function(cb){
 fruits.push(cb.value);
  });

const sizeRadio = document.querySelector('input[name="size"]:checked');
let size = "";

if(sizeRadio){
 size = sizeRadio.value;
}

 const bowl = new EnergyBowl(base, fruits, size);

 result.innerHTML = bowl.getDescription();

});