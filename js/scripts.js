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
var pizzaSizesArray = [tiny, medium, classic, ohBoy];
var pizzaSizesArray2 = ['Tiny', 'Medium', 'Classic', 'Oh Boy'];
  // Pizza Crust
var thin = {name: 'Thin Crust'}
var original = {name: 'Original Crust'}
var thinWheat = {name: 'Thin Wheat Crust'}
var originalWheat = {name: 'Original Wheat Crust'}
var pizzaCrustArray = [thin,original,thinWheat,originalWheat];
var pizzaCrustArray2 = ['Thin','Original','ThinWheat','OriginalWheat'];
  // Pizza Toppings
var pepperoni = {name: 'Pepperoni' , price: 1.25}
var sausage = {name: 'Sausage' , price: 1.50}
var pineapple = {name: 'Pineapple' , price: .75}
var mushrooms = {name: 'Mushrooms' , price: .75}
var onion = {name: 'Onion', price: .5}
var bacon = {name: 'Bacon', price: 1.5}
var pizzaToppingsArray = [pepperoni,sausage,pineapple,mushrooms,onion,bacon];
var pizzaToppingsArray2 = ['Pepperoni','Sausage','Pineapple','Mushrooms','Onion','Bacon'];
  // Pizza Cheese
var mozzarella = {name: 'Mozzarella' , price: .75}
var cheddar = {name: 'Cheddar' , price: .75}
var pizzaCheeseArray = [mozzarella,cheddar];
var pizzaCheeseArray2 = ['Mozzarella','Cheddar'];
  // Pizza Sauce
var marinara = {name: 'Marinara' , price: .50}
var pesto = {name: 'Pesto' , price: .50}
var whiteGarlic = {name: 'White Garlic' , price: .75}
var bbq = {name: 'BBQ' , price: .75}
var pizzaSauceArray = [marinara,pesto,whiteGarlic,bbq];
var pizzaSauceArray2 = ['Marinara','Pesto','WhiteGarlic','BBQ'];

var userPizza = new Pizza('thin')

Pizza.prototype.findPCost = function() {
  this.total += this.size.price;
  for (var i = 0; i < this.toppings.length; i++) {
    this.total += this.toppings[i].price
  }
}

// Front End
$(document).ready(function() {
  var order = new Order();
  var pizzaToppings = 0;

    $('#new-topping').click(function(){
      pizzaToppings += 1;
      $("#pizza-toppings").append('<div class="form-group">' +
      '<label for="new-topping">Select a topping</label>' +
      '<select class="new-topping form-control" id="pizza-topping'+pizzaToppings+'"">' +
      '<option value="Pepperoni">Pepperoni - $1.25</option>' +
      '<option value="Sausage">Sausage - $1.50</option>' +
      '<option value="Pineapple">Pineapple - $0.75</option>' +
      '<option value="Mushrooms">Mushrooms - $0.75</option>' +
      '<option value="Onion">Onion - $0.50</option>' +
      '<option value="Bacon">Bacon - $1.50</option>' +
      '</select>' +
      '</div>' +
      '</div>');
    });
    $('form').submit(function(event){
      event.preventDefault();
      var userSize = $('#user-size').val();
        userSize = pizzaSizesArray2.findIndex(function(x) { return x == userSize; });
      var userCrust = $('#user-crust').val();
        userCrust = pizzaCrustArray2.findIndex(function(x) { return x == userCrust; });
      var userCheese = $('#user-cheese').val();
        userCheese = pizzaCheeseArray2.findIndex(function(x) { return x == userCheese; });
      var userSauce = $('#user-sauce').val();
        userSauce = pizzaSauceArray2.findIndex(function(x) { return x == userSauce; });
      var userPizza = new Pizza(pizzaSizesArray[userSize],pizzaCrustArray[userCrust],pizzaCheeseArray[userCheese],pizzaSauceArray[userSauce]);
      order.pizzas.push(userPizza)
      var userToppings = [];
      for (var i = 1; i <= pizzaToppings; i++) {
        var toppingindex = '#pizza-topping' + i
        var userTopping = $(toppingindex).val();
        userToppings.push(userTopping);
        var topindex = pizzaToppingsArray2.findIndex(function(x) { return x == userTopping; })
        userPizza.toppings.push(pizzaToppingsArray[topindex]);

      }
      userPizza.findPCost();

    $("ul#pizza-list").append("<li><span class='pizza'>" + userPizza.size.name +" Pizza Cost $" + userPizza.total+"</span></li>")
      $(".pizza").last().click(function(){
        $('#topping-list').empty();
        $("#show-pizza").toggle();
        $("#pickSize").text(" "+userPizza.size.name);
        $("#pickCrust").text(" "+userPizza.crust.name);
        $("#pickCheese").text(" "+userPizza.cheese.name);
        $("#pickSauce").text(" "+userPizza.sauce.name);
        userToppings.forEach(function(topping){
          $('#topping-list').append('<li>' + topping + '</li>')
        });
      });
      $('#complete-order').show();
    });
    $('#complete-order').click(function() {
      
    });
});
