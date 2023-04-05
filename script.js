document.addEventListener("DOMContentLoaded", function()
{
	
  // Set initial values
  var money = 0;
  var autoclickerPrice = 50;
  var autoclickerLevel = 0;
  var sageModePrice = 10;
  var senninModePrice = 25;
  var kuramaModePrice = 50;

  // Get elements from the HTML
  var moneyElement = document.getElementById("money");
  var tempeButton = document.getElementById("tempe-btn");
  var autoclickerPriceElement = document.getElementById("autoclicker-price");
  var autoclickerButton = document.getElementById("autoclicker-btn");
  var upgrade1Button = document.getElementById("upgrade1").getElementsByTagName("button")[0];
  var upgrade2Button = document.getElementById("upgrade2").getElementsByTagName("button")[0];
  var upgrade3Button = document.getElementById("upgrade3").getElementsByTagName("button")[0];

  // Add event listeners
  tempeButton.addEventListener("click", clickTempe);
  autoclickerButton.addEventListener("click", buyAutoclicker);
  upgrade1Button.addEventListener("click", buyUpgrade1);
  upgrade2Button.addEventListener("click", buyUpgrade2);
  upgrade3Button.addEventListener("click", buyUpgrade3);

  // Define event handlers
  function clickTempe() {
    money++;
    moneyElement.innerHTML = "Money: $" + money;
    var animationElement = document.createElement("div");
    animationElement.innerHTML = "+1";
    animationElement.classList.add("money-animation");
    document.body.appendChild(animationElement);
    setTimeout(function() {
    animationElement.parentNode.removeChild(animationElement);
    }, 1000);
  }

  function buyAutoclicker() {
    if (money >= autoclickerPrice) {
      money -= autoclickerPrice;
      autoclickerLevel++;
      autoclickerPrice *= 2;
      moneyElement.innerHTML = "Money: $" + money;
      autoclickerPriceElement.innerHTML = "Auto-Clicker: $" + autoclickerPrice;
      autoclickerButton.innerHTML = "Upgrade Auto-Clicker (Level " + autoclickerLevel + ")";
      if (autoclickerLevel === 1) {
        setInterval(clickTempe, 1000);
      }
      else if (autoclickerLevel === 2){
        setInterval(clickTempe, 900);
      }
      else if (autoclickerLevel === 3){
        setInterval(clickTempe, 800);
      }
      else if (autoclickerLevel === 4){
        setInterval(clickTempe, 700);
      }
      else if (autoclickerLevel === 5){
        setInterval(clickTempe, 600);
      }
      else if (autoclickerLevel === 6){
        setInterval(clickTempe, 500);
      }
      else if (autoclickerLevel === 7){
        setInterval(clickTempe, 400);
      }
      else if (autoclickerLevel === 8){
        setInterval(clickTempe, 300);
      }
      else if (autoclickerLevel === 9){
        setInterval(clickTempe, 200);
      }
      else if (autoclickerLevel === 10){
        setInterval(clickTempe, 100);
        autoclickerButton.innerHTML = "Max Level Autoclicker"
      }
    }
  }

  function buyUpgrade1() {
    if (money >= sageModePrice) {
      money -= sageModePrice;
      sageModePrice *= 2;
      moneyElement.innerHTML = "Money: $" + money;
      upgrade1Button.innerHTML = "Sage Mode: $" + sageModePrice;
      upgrade1Button.classList.add("upgrade-bought");
      clickTempe();
    }
  }

  function buyUpgrade2() {
    if (money >= senninModePrice) {
      money -= senninModePrice;
      senninModePrice *= 2;
      moneyElement.innerHTML = "Money: $" + money;
      upgrade2Button.innerHTML = "Sennin Mode: $" + senninModePrice;
      upgrade2Button.classList.add("upgrade-bought");
      clickTempe();
    }
  }

  function buyUpgrade3() {
    if (money >= kuramaModePrice) {
      money -= kuramaModePrice;
      kuramaModePrice *= 2;
      moneyElement.innerHTML = "Money: $" + money;
      upgrade3Button.innerHTML = "Kurama Mode: $" + kuramaModePrice;
      upgrade3Button.classList.add("upgrade-bought");
      clickTempe();
    }
  }
  document.addEventListener('DOMContentLoaded', function() {
		var audio = document.querySelector('audio');
		audio.play();
	});

  
});

 
