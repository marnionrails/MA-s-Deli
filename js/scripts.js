$(document).ready(function() {
  let foodOrder = []
  $("form#form-group").submit(function(event) {
   event.preventDefault();
   const firstName = $("input#firstName").val();
   const lastName = $("input#lastName").val();
   const address = $("input#address").val();

   
  if ($("#Mushroom-Burger").is(":checked"))
    {  foodOrder.push("Mushroom Burger");
    }
  if ($("#Sweet-Potato-Burger").is(":checked"))
    {  foodOrder.push("Sweet Potato Burger");
    }
  if ($("#Sweet-Potato-Burger").is(":checked"))
    {  foodOrder.push("Sweet Potato Burger");
    }
  if ($("#Kale-Burger").is(":checked"))
    {  foodOrder.push("Kale Burger");
    }
  if ($("#Tomato-Soup").is(":checked"))
    {  foodOrder.push("Tomato Soup");
    }
  if ($("#Sweet-Potato-Fries").is(":checked"))
    {  foodOrder.push("Sweet Potato Fries");
    }

let orderString = "";
    foodOrder.forEach(function(item){
      orderString += '<li>' + item + '</li>';
    });

    ordeString = '<ul>' + orderString + '</ul>';
    console.log(orderString);
    document.querySelector("#receipt").innerHTML = orderString;
  });
});
