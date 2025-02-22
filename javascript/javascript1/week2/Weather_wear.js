//Code for assignment

function showClothesToWear(currentTemperature) {
  if (currentTemperature < -15) {
    return "It's really cold outside. Wear as much clothes, as you can";
  } else if (currentTemperature >= -15 && currentTemperature <= 0) {
    return "You should wear jacket, long-sleeve tee, long pants, hat, gloves and scarf";
  } else if (currentTemperature > 0 && currentTemperature <= 5) {
    return "You should wear jacket, long-sleeve tee and long pants";
  } else if (currentTemperature > 5 && currentTemperature <= 10) {
    return "You should wear hoodie, long-sleeve tee and long pants";
  } else if (currentTemperature > 10 && currentTemperature <= 15) {
    return "You should wear hoodie, t-shirt and long pants";
  } else if (currentTemperature > 15 && currentTemperature <= 30) {
    return "You should wear t-shirt and shorts";
  } else {
    return "Live in fridge";
  }
}

const clothesToWear = showClothesToWear(18);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt"

//Code for HTML-document

function showClothesToWearInteractiveVersion() {
  const currentTemperature = parseInt(
    document.getElementById("temperature").value,
    10
  );

  if (currentTemperature < -15) {
    document.getElementById("clothes").innerText =
      "It's really cold outside. Wear as much clothes, as you can";
  } else if (currentTemperature >= -15 && currentTemperature <= 0) {
    document.getElementById("clothes").innerText =
      "You should wear jacket, long-sleeve tee, long pants, hat, gloves and scarf";
  } else if (currentTemperature > 0 && currentTemperature <= 5) {
    document.getElementById("clothes").innerText =
      "You should wear jacket, long-sleeve tee and long pants";
  } else if (currentTemperature > 5 && currentTemperature <= 10) {
    document.getElementById("clothes").innerText =
      "You should wear hoodie, long-sleeve tee and long pants";
  } else if (currentTemperature > 10 && currentTemperature <= 15) {
    document.getElementById("clothes").innerText =
      "You should wear hoodie, t-shirt and long pants";
  } else if (currentTemperature > 15 && currentTemperature <= 30) {
    document.getElementById("clothes").innerText =
      "You should wear t-shirt and shorts";
  } else {
    document.getElementById("clothes").innerText = "Live in fridge";
  }
}
