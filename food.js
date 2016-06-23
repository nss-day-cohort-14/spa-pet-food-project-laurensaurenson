var foodInfoLabels = document.getElementById("foodInformation");

var dogFood = new XMLHttpRequest();
dogFood.open("GET", "dogs.json");
dogFood.send();
dogFood.addEventListener("load", loadedDogs);

var catFood = new XMLHttpRequest();
catFood.open("GET", "cats.json");
catFood.send();
catFood.addEventListener("load", loadedCats);

// // // CATS // // //

function loadedCats () {
  var catFood = JSON.parse( event.target.responseText );
  writeCatInfo(catFood);
}

function writeCatInfo ( food ) {
  var container = document.getElementById("foodInformation")
  for (var i = 0; i < food.cat_brands.length; i++) {
    var foodInfo = document.createElement("div");
    var foodName = document.createTextNode(food.cat_brands[i].name);
    foodInfo.classList.add("foodInfoCard");
    foodInfo.appendChild(foodName);
    for (var x = 0; x < food.cat_brands[i].breeds.length; x++) {
      var foodBreedBlock = document.createElement("div");
      var foodBreed = document.createTextNode(food.cat_brands[i].breeds[x].breed);
      foodBreedBlock.classList.add("foodTypeBlock");
      foodBreedBlock.appendChild(foodBreed);
      foodInfo.appendChild(foodBreedBlock);
      for (var y = 0; y < food.cat_brands[i].breeds[x].types.length; y++) {
        var types = document.createElement("div");
        var type = document.createTextNode(food.cat_brands[i].breeds[x].types[y].type + " ");
        var amount = document.createTextNode(food.cat_brands[i].breeds[x].types[y].name + " ");
        var price = document.createTextNode(food.cat_brands[i].breeds[x].types[y].price);
        types.appendChild(type);
        types.appendChild(amount);
        types.appendChild(price);
        foodInfo.appendChild(types);
      }
    }
    container.appendChild(foodInfo);
  }
}

// // // DOGS // // //

function loadedDogs () {
  var dogFood = JSON.parse( event.target.responseText );
  writeDogInfo(dogFood);
}

function writeDogInfo ( food ) {
  var container = document.getElementById("foodInformation")
  for (var i = 0; i < food.dog_brands.length; i++) {
    var foodInfo = document.createElement("div");
    var foodName = document.createTextNode(food.dog_brands[i].name);
    foodInfo.classList.add("foodInfoCard");
    foodInfo.appendChild(foodName);
    for (var x = 0; x < food.dog_brands[i].types.length; x++) {
      var foodTypeBlock = document.createElement("div");
      var foodType = document.createTextNode(food.dog_brands[i].types[x].type);
      foodTypeBlock.classList.add("foodTypeBlock");
      foodTypeBlock.appendChild(foodType);
      foodInfo.appendChild(foodTypeBlock);
      for (var y = 0; y < food.dog_brands[i].types[x].volumes.length; y++) {
        var volumes = document.createElement("div");
        var amount = document.createTextNode(food.dog_brands[i].types[x].volumes[y].name + " ");
        var price = document.createTextNode(food.dog_brands[i].types[x].volumes[y].price);
        volumes.appendChild(amount);
        volumes.appendChild(price);
        foodInfo.appendChild(volumes);
      }
    }
    container.appendChild(foodInfo);
  }
}