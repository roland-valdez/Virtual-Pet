$(function() {
 
  // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
let pet_info = {
  name:"Zeus",
  weight: 48,
  happiness: 0,
  message: "Tati I'm hungry. Please feed me!?"
}
  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();// why no passed argument

  // When each button is clicked, it will "call" function for that button (functions are below)
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  $('.message-button').click(clickedMessageButton);
  

  function clickedMessageButton() {
    var random = Math.floor(Math.random() * (6 - 1) ) + 1;
    if (random == 1){
      pet_info.message = "Can we play?";
    }else if (random == 2){
      pet_info.message = "Tati hasn't fed me yet!";
    }else if (random == 3){
      pet_info.message = "I don't like exercise I prefer to go out and play!";
    }else if (random == 4){
      pet_info.message = "I love Roland the best!";
    }else if (random == 5){
      pet_info.message = "I don't like to shower. Just like the Valdez kids!";
    }
      checkAndUpdatePetInfoInHtml();
    }

  function clickedTreatButton() {
    pet_info["happiness"] = pet_info["happiness"] + 1;// Increase pet happiness
    pet_info["weight"] = pet_info["weight"] + 1;// Increase pet weight
    checkAndUpdatePetInfoInHtml();
  }
  
  function clickedPlayButton() {
    pet_info["happiness"] = pet_info["happiness"] + 2;// Increase pet happiness
    pet_info["weight"] = pet_info["weight"] - 1;// Decrease pet weight
    checkAndUpdatePetInfoInHtml();
  }
  
  function clickedExerciseButton() {
    pet_info.happiness -= 2;// Decrease pet happiness
    //pet_info.happiness = pet_info.happiness - 2// Decrease pet happiness
    pet_info["weight"] = pet_info["weight"] - 1;// Decrease pet weight
    checkAndUpdatePetInfoInHtml();
  }

  function checkAndUpdatePetInfoInHtml() {
    checkWeightAndHappinessBeforeUpdating();  
    updatePetInfoInHtml();
  }
  
  function checkWeightAndHappinessBeforeUpdating() {// Add conditional so if weight is lower than zero, set it back to zero
    if (pet_info.weight < 30){
      pet_info.weight = 30;
  }
    if (pet_info.happiness < 0){
      pet_info.happiness = 0;
  }
    if (pet_info.happiness > 45){
      pet_info.happiness = 45;
  } 
  }
  
  // Updates your HTML with the current values in your pet_info object
  function updatePetInfoInHtml() {
    $('.name').text(pet_info.name);
    $('.weight').text(pet_info.weight);
    $('.happiness').text(pet_info.happiness);
    $('.message').text(pet_info.message);
  }
});