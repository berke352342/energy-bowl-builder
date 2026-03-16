class EnergyBowl{

constructor(base, toppings, size) {

 this.base = base;
 this.toppings = toppings;
 this.size = size;

}

calculatePrice(){

  let price = 5; //  base price

  price += this.toppings.length * 2;

if(this.size === "Medium") price += 2;
if(this.size === "Large") price += 4;

return price;

}

  calculateCalories(){

let calories = 200;

calories += this.toppings.length * 50;

 if(this.size === "Medium") calories += 100;
 if(this.size === "Large") calories += 200;

return calories;

}

getDescription(){

return "Your Energy Bowl:<br>" +
"Base: " + this.base + "<br>" +
"Toppings: " + this.toppings.join(", ") + "<br>" +
"Size: " + this.size + "<br><br>" +
"Total Price: $" + this.calculatePrice() + "<br>" +
"Total Calories: " + this.calculateCalories() + " kcal";

}

}

const button = document.getElementById("calculateBtn");
const result = document.getElementById("result");

button.addEventListener("click", function() {

const base = document.getElementById("base").value;

  const toppingsCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let toppings = [];

 toppingsCheckboxes.forEach(function(cb){
 toppings.push(cb.value);
  });

const sizeRadio = document.querySelector('input[name="size"]:checked');
let size = "";

if(sizeRadio){
 size = sizeRadio.value;
}

 const bowl = new EnergyBowl(base, toppings, size);

 result.innerHTML = bowl.getDescription();

});