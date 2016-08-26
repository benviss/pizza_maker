// Back End
function Order() {
  this.total;
  this.pizzas = [];
}

function Pizza(size, crust, cheese, sauce) {
  this.total = 0;
  this.size = size;
  this.crust = crust;
  this.toppings = [];
  this.cheese = cheese;
  this.sauce = sauce;
}
// Pizza Additions
  // Pizza Size
var tiny = {name: "Tiny - 6 inch" , price: 7}
var medium = {name: "Medium - 12 inch" , price: 10}
var classic = {name: "Classic - 16 inch" , price: 14}
var ohBoy = {name: "Oh Boy - 32 inch" , price: 32}
  // Pizza Crust
var thin = {name: 'Thin Crust'}
var original = {name: 'Original Crust'}
var thinWheat = {name: 'Thin Wheat Crust'}
var originalWheat = {name: 'Original Wheat Crust'}
  // Pizza Toppings
var pepperoni = {name: 'Pepperoni' , price: 1.25}
var sausage = {name: 'Sausage' , price: 1.50}
var pineapple = {name: 'Pineapple' , price: .75}
var mushrooms = {name: 'Mushrooms' , price: .75}
var onion = {name: 'Onion', price: .5}
var bacon = {name: 'Bacon', price: 1.5}
  // Pizza Cheese
var mozzarella = {name: 'Mozzarella' , price: .75}
var cheddar = {name: 'Cheddar' , price: .75}
  // Pizza Sauce
var marinara = {name: 'Marinara' , price: .50}
var pesto = {name: 'Pesto' , price: .50}
var whiteGarlic = {name: 'White Garlic' , price: .75}
var bbq = {name: 'BBQ' , price: .75}

var userPizza = new Pizza('thin')

Pizza.prototype.findPCost = function() {
  this.total += this.size.price;



  for (var i = 0; i < this.toppings.length; i++) {
    this.total += this.toppings[i].price
  }
}

// Front End
$(document).ready(function() {
  // $('#order-pizza').click(function(){
  var order = new Order();
  var pizzaToppings = 0;
  $('#user-size').change(function() {
    $('#item-tally-size p').detach();
    $('#item-tally-size').append('<p>Pizza Size - '+ document.getElementById("user-size").value + '</p>')
  });
  $('#user-crust').change(function() {
    $('#item-tally-crust p').detach();
    $('#item-tally-crust').append('<p>Pizza Crust - '+ document.getElementById("user-crust").value + '</p>')
  });
  $('#user-cheese').change(function() {
    $('#item-tally-cheese p').detach();
    $('#item-tally-cheese').append('<p>Pizza Cheese - '+ document.getElementById("user-cheese").value + '</p>')
  });
  $('#user-sauce').change(function() {
    $('#item-tally-sauce p').detach();
    $('#item-tally-sauce').append('<p>Pizza Sauce - '+ document.getElementById("user-sauce").value + '</p>')
  });
  $('.new-topping').change(function() {
    $('#item-tally-toppings p').detach();
    $('#item-tally-toppings').append('<p>Pizza Toppings <ul>');
    for (var i = 0; i <= pizzaToppings; i++) {
      var toppingindex = 'pizza-topping' + i;
      $('#item-tally-toppings').append('<li>'+ document.getElementById(toppingindex).value + '</li>');
    }
    $('#item-tally-toppings').append('</ul></p>');

  });
    $('#new-topping').click(function(){
      pizzaToppings += 1;
      console.log(pizzaToppings)
      $("#pizza-toppings").append('<div class="form-group">' +
      '<label for="new-topping">Select a topping</label>' +
      '<select class="new-topping form-control" id="pizza-topping'+pizzaToppings+'"">' +
      '<option value="pepperoni">Pepperoni</option>' +
      '<option value="sausage">Sausage</option>' +
      '<option value="pineapple">Pineapple</option>' +
      '<option value="mushrooms">Mushrooms</option>' +
      '<option value="onion">Onion</option>' +
      '<option value="bacon">Bacon</option>' +
      '</select>' +
      '</div>' +
      '</div>');
    });
    $('form').submit(function(event){
      event.preventDefault();
      var userSize = $('#user-size').val();
      var userCrust = $('#user-crust').val();
      var userCheese = $('#user-cheese').val();
      var userSauce = $('#user-sauce').val();
      order.pizzas.push(new Pizza(userSize,userCrust,userCheese,userSauce));
    });

  // });
});
