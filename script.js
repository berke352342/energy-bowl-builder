class EnergyBowl  {

constructor(base, fruits, size){

this.base = base;
this.fruits = fruits;
this.size = size;

}

getDescription(){

return "Your Energy Bowl:<br>" +
"Base: " + this.base + "<br>" +
"Fruits: " + this.fruits.join(", ") + "<br>" +
"Size: " + this.size;

     }

}

  const button = document.getElementById("calculateBtn");
  const result = document.getElementById("result");

button.addEventListener("click", function(){

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