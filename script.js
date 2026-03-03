const ingredients = {
     rice: { price: 10, calories: 200 },
     chicken: { price: 20, calories: 250 },
     avocado: { price: 15, calories: 150 },
     tomato: { price: 5, calories: 30 }
   };

 const button = document.getElementById("calculateBtn");
 const result = document.getElementById("result");

 button.addEventListener("click", function() {

      let totalPrice = 0;
      let totalCalories = 0;

  const selected = document.querySelectorAll("input[type='checkbox']:checked");

      selected.forEach(function(item) {
          const value = item.value;
          totalPrice += ingredients[value].price;
          totalCalories += ingredients[value].calories;
        });

     result.innerHTML =
          "Total Price: " + totalPrice + " TL <br>" +
          "Total Calories: " + totalCalories +  " kcal";
});